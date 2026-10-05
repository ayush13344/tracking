const Badge = ({
  children,
  variant = "default",
  dot = false,
  className = "",
}) => {
  return (
    <span className={`ui-badge ui-badge-${variant} ${className}`}>
      {dot && <span className="badge-dot"></span>}
      {children}
    </span>
  );
};

export default Badge;