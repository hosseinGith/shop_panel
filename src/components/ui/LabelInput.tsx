"use client";
import {
  type ChangeEvent,
  type HTMLInputTypeAttribute,
  type ReactNode,
} from "react";

export default function LabelInput({
  placeholder = "",
  className = "",
  required,
  type = "",
  value = "",
  dir,
  children,
  onChange = () => {},
}: {
  dir?: "rtl" | "ltr" | "auto" | undefined;
  className?: string;
  required?: boolean | undefined;
  type?: HTMLInputTypeAttribute;
  codition?: unknown;
  placeholder?: string;
  children?: ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number | readonly string[] | undefined;
}) {
  return (
    <label
      className={`bg-(--background)  items-center text-(--neutral5) flex w-full shadow-low rounded-full p-2 px-3 ${className}`}
    >
      {children ? children : ""}
      <input
        placeholder={placeholder}
        className="px-2 w-full"
        onChange={onChange}
        type={type}
        dir={dir}
        value={value}
        required={required}
      />
    </label>
  );
}
