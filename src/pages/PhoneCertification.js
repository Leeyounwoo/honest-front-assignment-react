import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { request, submit } from '../api';

function PhoneCertification() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = useRef('');
  const params = useRef({});
  const [restartCnt, setRestartCnt] = useState(0);

  useEffect(() => {
    if (location.state === null) {
      navigate('/identity-authentication');
    } else {
      token.current = location.state.token;
      params.current = location.state.params;
    }
  }, [location.state, navigate]);

  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const time = useRef(180);
  const timerId = useRef(null);
  const [code, setCode] = useState('');

  const onChangeCode = (event) => {
    const text = event.target.value;
    setCode(text);
  };

  const onClickRestart = async () => {
    try {
      const result = await request(params.current);

      if (result.status === 200) {
        alert('본인확인을 위한 인증번호가 재발신되었습니다.');
        token.current = result.body.response.token;
        time.current = 180;
        setRestartCnt(restartCnt + 1);
      } else {
        alert('인증번호 재발신을 실패하였습니다.');
        navigate('/identity-authentication');
      }
    } catch (error) {
      alert('예상치 못한 에러가 발생하여 회원정보 입력 페이지로 돌아갑니다.');
      navigate('/identity-authentication');
    }
  };

  const onClickDone = async () => {
    const submitParams = { code, token: token.current };
    try {
      const result = await submit(submitParams);
      if (result.status === 200) {
        alert('본인인증이 완료되었습니다.');
      } else {
        alert(result.body.error);
      }
    } catch (error) {
      alert('예상치 못한 에러입니다');
    }
  };

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);
    return () => clearInterval(timerId.current);
  }, [restartCnt]);

  useEffect(() => {
    if (time.current < 0) {
      clearInterval(timerId.current);
    }
  }, [sec]);

  return (
    <div>
      <div>
        <p>
          휴대폰 번호로 전송된 <br /> 인증번호를 입력해 주세요
        </p>
      </div>

      <div>
        <div>
          <p>인증번호</p>
          <div>
            {min} 분 {sec} 초
          </div>
        </div>
        <input value={code} onChange={onChangeCode} />
        <button onClick={onClickRestart}>재전송</button>
      </div>

      <div>
        <button onClick={onClickDone}>본인인증하기</button>
      </div>
    </div>
  );
}

export default PhoneCertification;
