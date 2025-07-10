import React from 'react';

export default function InputComponent({ inputs = [], selects = [], buttonText = '확인', onClick }) {
  return (
    <div className='form-basic'>
      {inputs.map(({ label, value, onChange, type = 'number', id, placeholder = '입력해주세요' }, idx) => (
        <label key={id || idx} htmlFor={`${label}-${id || idx}`}>
          {label}:{' '}
          <input
            id={`${label}-${id || idx}`}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          />
        </label>
      ))}

      {selects.map(({ label, options, value, onChange, id }, idx) => (
        <label key={id || idx} htmlFor={`${label}-${id || idx}`}>
          {label}:{' '}
          <select id={`${label}-${id || idx}`} value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((opt, i) => (
              <option key={i} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      ))}

      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
}
