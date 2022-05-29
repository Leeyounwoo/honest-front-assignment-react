import { useLocation } from 'react-router';

function PhoneCertification() {
  const location = useLocation();
  const { token } = location.state;
  console.log('token', token);
  return <main>휴대전화 본인인증 코드 입력 화면</main>;
}

export default PhoneCertification;
