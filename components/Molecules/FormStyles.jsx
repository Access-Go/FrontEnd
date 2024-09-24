import React, { useState } from 'react';

const Form = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[400px]" 
    >
      {children}
    </form>
  );
};

const Input = ({ label, type = 'text', placeholder, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div
      className={`relative w-[330px] h-[65px] rounded bg-blue-400 transition-colors duration-200 ${
        isFocused ? 'bg-blue-700' : 'bg-blue-400'
      }`}
    >
      <label
        className="absolute text-[#455A64] text-[12px] left-[10px] top-[10px]"
      >
        {label}
      </label>
      <input
        type={type}
        className="w-full h-full bg-transparent text-[16px] text-[#78909C] px-[10px] pt-[20px] focus:outline-none"
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </div>
  );
};


export { Form, Input };
