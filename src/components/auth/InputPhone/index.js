import React from 'react';

export default function InputPhone({
  phoneStart,
  phoneMidRef,
  phoneMid,
  onChangePhoneMid,
  phoneEndRef,
  phoneEnd,
  onChangePhoneEnd,
}) {
  return (
    <div className="input-box">
      <div className="input-label-box">
        <label>휴대폰 번호</label>
      </div>
      <div className="input-input-box">
        <input className="input" value={phoneStart} readOnly />
        <p className="input-line">-</p>

        <input
          className="input"
          ref={phoneMidRef}
          value={phoneMid}
          onChange={onChangePhoneMid}
        />
        <p className="input-line">-</p>
        <input
          className="input"
          ref={phoneEndRef}
          value={phoneEnd}
          onChange={onChangePhoneEnd}
        />
      </div>
    </div>
  );
}
