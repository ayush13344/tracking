import { Loader2 } from "lucide-react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "medium",
  icon: Icon,
  loading = false,
  disabled = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`ui-button ui-button-${variant} ui-button-${size} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? (
        <Loader2 className="button-spinner" size={17} />
      ) : (
        Icon && <Icon size={17} strokeWidth={2} />
      )}

      <span>{loading ? "Please wait..." : children}</span>
    </button>
  );
};

export default Button;