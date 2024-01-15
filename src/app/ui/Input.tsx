import React from 'react';
import { InputProps } from './Interfaces';

export default function Input({ type, name, id, value, className, placeholder, onChange, onSubmit }: InputProps) {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}