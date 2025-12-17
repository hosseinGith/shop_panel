"use client";
import { useState, type ChangeEvent, type HTMLInputTypeAttribute } from "react";

export default function InputWithEfect({
  placeholder = "",
  className = "",
  required,
  type = "",
  value = "",
  inputClassName = "",
  errorText = "",
  dir,
  onChange = () => {},
}: {
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number | readonly string[] | undefined;
  dir?: "rtl" | "ltr" | "auto" | undefined;
  className?: string;
  required?: boolean | undefined;
  type?: HTMLInputTypeAttribute;
  codition?: unknown;
  inputClassName?: string;
  errorText?: string;
}) {
  const [focus, setFocus] = useState(Boolean(value));

  return (
    <label
      className={`block relative h-15  ${
        errorText ? "text-(--danger)" : ""
      } ${className}`}
    >
      <span
        className={`mr-2 absolute -translate-y-1/2 transition-all bg-[background] px-1  ${
          focus ? "top-0" : "top-[40%]"
        }`}
      >
        {placeholder}
      </span>
      <input
        value={value}
        required={required}
        className={`w-full border-2 h-[80%] transition-all px-2 outline-inherit rounded-md text-(--textColor)  outline-0 ${
          errorText
            ? "border-(--danger) outline-(--danger)"
            : "not-focus:border-(--borderLowerColor) "
        } ${inputClassName}`}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(Boolean(value))}
        onChange={onChange}
        type={type}
        dir={dir}
      />
      <p>{errorText}</p>
    </label>
  );
}
