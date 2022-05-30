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
    <div className="input-box">
      <div className="input-label-box">
        <label>주민등록번호</label>
      </div>
      <div className="input-input-box">
        <input
          className="input"
          placeholder="앞 6자리"
          ref={regNoFrontRef}
          value={regNoFront}
          onChange={onChangeRegNoFront}
        />
        <p className="input-line">-</p>
        <input
          className="input"
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
