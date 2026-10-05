import { ArrowUpRight } from "lucide-react";

const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  iconClass = "purple",
  trend,
}) => {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className={`stat-card-icon ${iconClass}`}>
          {Icon && <Icon size={22} strokeWidth={2} />}
        </div>

        {trend && (
          <span className="stat-card-trend">
            <ArrowUpRight size={14} />
            {trend}
          </span>
        )}
      </div>

      <div className="stat-card-content">
        <p>{title}</p>
        <h3>{value}</h3>

        {subtitle && <span>{subtitle}</span>}
      </div>
    </div>
  );
};

export default StatCard;
