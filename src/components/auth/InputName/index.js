import React from 'react';

export default function InputName({ nameRef, name, onChangeName }) {
  return (
    <div className="input-box">
      <div className="input-label-box">
        <label>이름</label>
      </div>
      <div className="input-input-box">
        <input
          className="input-only"
          placeholder="이름을 입력해 주세요"
          ref={nameRef}
          value={name}
          onChange={onChangeName}
        />
      </div>
    </div>
  );
}
