import {
  Bell,
  BusFront,
  CheckCircle2,
  Clock3,
  AlertTriangle,
  Info,
  XCircle,
} from "lucide-react";

const NotificationCard = ({
  title = "Bus has started its journey",
  message = "BUS-102 has left the depot and is now on Route A.",
  time = "5 min ago",
  type = "info",
  read = false,
}) => {
  const notificationIcons = {
    success: <CheckCircle2 size={21} />,
    info: <Info size={21} />,
    warning: <AlertTriangle size={21} />,
    danger: <XCircle size={21} />,
    bus: <BusFront size={21} />,
  };

  const icon = notificationIcons[type] || <Bell size={21} />;

  return (
    <div
      className={`notification-card ${
        read ? "notification-read" : "notification-unread"
      }`}
    >
      <div className={`notification-icon notification-${type}`}>
        {icon}
      </div>

      <div className="notification-content">
        <div className="notification-content-top">
          <h4>{title}</h4>

          {!read && <span className="notification-new">New</span>}
        </div>

        <p>{message}</p>

        <div className="notification-meta">
          <span>
            <Clock3 size={14} />
            {time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;