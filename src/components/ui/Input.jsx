import { AlertCircle } from "lucide-react";

const Input = ({
label,
name,
type = "text",
placeholder = "",
value,
defaultValue,
onChange,
icon: Icon,
error,
helperText,
required = false,
disabled = false,
className = "",
}) => {
return (
<div className={`ui-input-group ${className}`}>
{label && ( <label htmlFor={name}>
{label}
{required && <span className="required-mark">*</span>} </label>
)}

  <div
    className={`ui-input-wrapper ${
      error ? "ui-input-error" : ""
    } ${disabled ? "ui-input-disabled" : ""}`}
  >
    {Icon && <Icon size={17} className="ui-input-icon" />}

    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  </div>

  {error ? (
    <div className="ui-input-message ui-input-error-message">
      <AlertCircle size={14} />
      <span>{error}</span>
    </div>
  ) : (
    helperText && (
      <span className="ui-input-helper">{helperText}</span>
    )
  )}
</div>

);
};

export default Input;
