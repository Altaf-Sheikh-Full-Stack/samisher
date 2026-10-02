import React from "react";
import "./Input.css";

interface Props {
  id?: string;
  name?: string;
  label?: string;
  labelClassName?: string;
  type?: string;
  value?: string | number;
  placeholder?: string;
  options?: Array<string | { value: string; label: string }>;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string | null;
  className?: string;
  disabled?: boolean;
}

export default function Input({
  id,
  name,
  label,
  labelClassName,
  type = "text",
  value,
  placeholder,
  min,
  max,
  step,
  onChange,
  onBlur,
  error,
  className,
  disabled,
  options,
}: Props) {
  const inputId = id || name || undefined;

  return (
    <div className={`Input ${className || ""} ${error ? "Input--error" : ""}`}>
      {label && (
        <label className={`Input-label ${labelClassName || ""}`.trim()} htmlFor={inputId}>
          {label}
        </label>
      )}

      {/* render select when options provided */}
      {options && Array.isArray(options) ? (
        <select
          id={inputId}
          name={name}
          className="Input-field"
          value={value as any}
          onChange={(e) => onChange && onChange(e as any)}
          onBlur={(e) => onBlur && onBlur(e as any)}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
        >
          {options.map((opt, i) =>
            typeof opt === "string" ? (
              <option key={i} value={opt}>
                {opt}
              </option>
            ) : (
              <option key={(opt as any).value || i} value={(opt as any).value}>
                {(opt as any).label}
              </option>
            ),
          )}
        </select>
      ) : (
        <input
          id={inputId}
          name={name}
          className="Input-field"
          type={type}
          value={value}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
      )}

      {error && (
        <div id={`${inputId}-error`} className="Input-error">
          {error}
        </div>
      )}
    </div>
  );
}
