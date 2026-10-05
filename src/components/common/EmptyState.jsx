import { Inbox } from "lucide-react";
const EmptyState = ({
  title = "No data found",
  message = "There is nothing to display here right now.",
}) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <Inbox size={28} />
      </div>

      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;