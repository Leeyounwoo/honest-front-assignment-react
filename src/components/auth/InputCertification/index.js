import React from 'react';

export default function InputCertification({
  code,
  onChangeCode,
  onClickRestart,
}) {
  return (
    <div className="input-input-box">
      <input className="input-only" value={code} onChange={onChangeCode} />
      <button className="restart-btn" onClick={onClickRestart}>
        재전송
      </button>
    </div>
  );
}
