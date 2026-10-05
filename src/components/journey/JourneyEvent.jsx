import {
  BusFront,
  CheckCircle2,
  MapPin,
  Clock3,
  UserRound,
} from "lucide-react";

const JourneyEvent = ({
  title = "Students Picked Up",
  location = "Green Park",
  time = "07:52 AM",
  description = "Students successfully boarded the bus.",
  status = "completed",
  students = 8,
}) => {
  const isCompleted = status === "completed";
  const isActive = status === "active";

  return (
    <div
      className={`journey-event ${
        isCompleted
          ? "journey-event-completed"
          : isActive
          ? "journey-event-active"
          : "journey-event-upcoming"
      }`}
    >
      <div className="journey-event-icon">
        {isCompleted ? (
          <CheckCircle2 size={21} />
        ) : isActive ? (
          <BusFront size={21} />
        ) : (
          <MapPin size={21} />
        )}
      </div>

      <div className="journey-event-main">
        <div className="journey-event-header">
          <div>
            <h4>{title}</h4>
            <div className="journey-event-location">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
          </div>

          <div className="journey-event-time">
            <Clock3 size={14} />
            <span>{time}</span>
          </div>
        </div>

        <p className="journey-event-description">{description}</p>

        <div className="journey-event-footer">
          <div className="journey-event-students">
            <UserRound size={15} />
            <span>{students} Students</span>
          </div>

          <span
            className={`journey-event-badge ${
              isCompleted
                ? "badge-completed"
                : isActive
                ? "badge-active"
                : "badge-upcoming"
            }`}
          >
            {isCompleted
              ? "Completed"
              : isActive
              ? "In Progress"
              : "Upcoming"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JourneyEvent;