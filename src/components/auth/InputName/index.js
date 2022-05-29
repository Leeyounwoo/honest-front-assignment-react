import React from 'react';

export default function InputName({ nameRef, name, onChangeName }) {
  return (
    <div>
      <label>이름</label>
      <input ref={nameRef} value={name} onChange={onChangeName} />
    </div>
  );
}
