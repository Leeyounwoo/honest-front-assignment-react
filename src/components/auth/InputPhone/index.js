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
    <div>
      <label>휴대폰 번호</label>
      <div style={{ display: 'flex' }}>
        <input value={phoneStart} readOnly />
        <p style={{ fontSize: 16, fontWeight: 'bold' }}>-</p>
        <input ref={phoneMidRef} value={phoneMid} onChange={onChangePhoneMid} />
        <p>-</p>
        <input ref={phoneEndRef} value={phoneEnd} onChange={onChangePhoneEnd} />
      </div>
    </div>
  );
}
