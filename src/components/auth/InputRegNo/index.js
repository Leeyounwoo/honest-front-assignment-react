import React from 'react';

export default function InputRegNo({
  regNoFrontRef,
  regNoFront,
  onChangeRegNoFront,
  regNoBackRef,
  regNoBack,
  onChangeRegNoBack,
}) {
  return (
    <div>
      <label>주민등록번호</label>
      <div style={{ display: 'flex' }}>
        <input
          placeholder="앞 6자리"
          ref={regNoFrontRef}
          value={regNoFront}
          onChange={onChangeRegNoFront}
        />
        <p>-</p>
        <input
          placeholder="뒤 7자리"
          type="password"
          ref={regNoBackRef}
          value={regNoBack}
          onChange={onChangeRegNoBack}
        />
      </div>
    </div>
  );
}
