import React from 'react';

export default function Timer({ min, sec }) {
  return (
    <div className="timer-box">
      <p>인증번호</p>
      <p className="timer">
        {min} 분 {sec} 초
      </p>
    </div>
  );
}
