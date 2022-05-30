import React, { useEffect, useRef, useState } from 'react';
import InputName from '../components/auth/InputName';
import InputPhone from '../components/auth/InputPhone';
import InputRegNo from '../components/auth/InputRegNo';
import SubmitButton from '../components/auth/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { request } from '../api';

function IdentityAuthentication() {
  const navigate = useNavigate();
  const [submitFlag, setSubmitFlag] = useState(false);
  const phoneMidRef = useRef(null);
  const phoneEndRef = useRef(null);
  const regNoFrontRef = useRef(null);
  const regNoBackRef = useRef(null);
  const nameRef = useRef(null);

  const phoneStart = '010';
  const [phoneMid, setPhoneMid] = useState('');
  const [phoneEnd, setPhoneEnd] = useState('');

  const [regNoFront, setRegNoFront] = useState('');
  const [regNoBack, setRegNoBack] = useState('');

  const [name, setName] = useState('');

  const onlyNumber = (text) => {
    const regExp = /[0-9]/g;
    return regExp.test(text);
  };

  const onlyKorean = (text) => {
    const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    return regExp.test(text);
  };

  const updateInput = (type, text, maxLength, update, nextRef) => {
    const flag = onlyNumber(text[text.length - 1]);
    // 입력이 숫자이거나 빈 값일 때
    if (flag === true || text === '') {
      // 최대 문자열 길이보다 작거나 같을 때
      if (text.length <= maxLength) {
        update(text);
        // 최대 문자열 길이일 때 다음 단계로 넘어간다.
        if (text.length === maxLength) {
          nextRef.current.focus();
        }
      } else {
        alert(`${type}는 ${maxLength} 글자를 초과할 수 없습니다.`);
      }
    } else {
      alert('숫자를 입력해주세요.');
    }
  };

  const onChangePhoneMid = (event) => {
    const text = event.target.value;
    updateInput('휴대폰 중간자리', text, 4, setPhoneMid, phoneEndRef);
  };

  const onChangePhoneEnd = (event) => {
    const text = event.target.value;
    updateInput('휴대폰 끝자리', text, 4, setPhoneEnd, regNoFrontRef);
  };

  const onChangeRegNoFront = (event) => {
    const text = event.target.value;
    updateInput('주민등록번호 앞 자리', text, 6, setRegNoFront, regNoBackRef);
  };

  const onChangeRegNoBack = async (event) => {
    const text = event.target.value;
    updateInput('주민등록번호 뒷 자리', text, 7, setRegNoBack, nameRef);
  };

  const onChangeName = (event) => {
    const text = event.target.value;
    const flag = onlyKorean(text[text.length - 1]);
    if (flag === true || text === '') {
      setName(text);
    } else {
      alert('한글을 입력해주세요');
    }
  };

  const onSubmit = async (event) => {
    // event.preventDefault();
    event.preventDefault();
    try {
      const params = {
        name,
        civilcodeFirst: regNoFront,
        civilcodeLast: regNoBack,
        mobile: '010' + phoneMid + phoneEnd,
      };
      const result = await request(params);
      if (result.status === 200) {
        alert('본인확인을 위한 인증번호가 발신되었습니다.');
        const token = result.body.response.token;
        navigate('/phone-certification', {
          state: {
            token: token,
            params: params,
          },
        });
      }
    } catch (error) {
      alert(
        '인증번호를 보내지 못하였습니다. 회원정보를 다시 한 번 확인해주세요.'
      );
    }
  };

  useEffect(() => {
    if (
      phoneMid.length === 4 &&
      phoneEnd.length === 4 &&
      regNoFront.length === 6 &&
      regNoBack.length === 7 &&
      name !== ''
    ) {
      setSubmitFlag(true);
    } else {
      setSubmitFlag(false);
    }
  }, [phoneMid, phoneEnd, regNoFront, regNoBack, name]);

  return (
    <div className="container">
      <div>
        <div className="guide">
          <p>비대면 대출을 위해 본인인증이 필요해요</p>
        </div>
        <form>
          <InputPhone
            phoneStart={phoneStart}
            phoneMidRef={phoneMidRef}
            phoneMid={phoneMid}
            onChangePhoneMid={onChangePhoneMid}
            phoneEndRef={phoneEndRef}
            phoneEnd={phoneEnd}
            onChangePhoneEnd={onChangePhoneEnd}
          />

          <InputRegNo
            regNoFrontRef={regNoFrontRef}
            regNoFront={regNoFront}
            onChangeRegNoFront={onChangeRegNoFront}
            regNoBackRef={regNoBackRef}
            regNoBack={regNoBack}
            onChangeRegNoBack={onChangeRegNoBack}
          />

          <InputName
            nameRef={nameRef}
            name={name}
            onChangeName={onChangeName}
          />
          <SubmitButton flag={submitFlag} onClick={onSubmit} label={'다음'} />
        </form>
      </div>
    </div>
  );
}

export default IdentityAuthentication;
