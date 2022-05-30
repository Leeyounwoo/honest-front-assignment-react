import React from 'react';

export default function SubmitButton({ onClick, flag, label }) {
  return (
    <button
      className={flag ? 'active-button' : 'non-active-button'}
      onClick={onClick}
      disabled={!flag}
    >
      {label}
    </button>
  );
}
