import {
  Activity,
  BusFront,
  CheckCircle2,
  Clock3,
  MapPin,
  Users,
} from "lucide-react";

const JourneyStatus = ({
  status = "In Progress",
  busNumber = "BUS-102",
  route = "Route A",
  currentLocation = "City Center",
  studentsBoarded = 28,
  totalStudents = 32,
  startedAt = "07:35 AM",
  lastUpdated = "08:24 AM",
}) => {
  const progress =
    totalStudents > 0
      ? Math.min((studentsBoarded / totalStudents) * 100, 100)
      : 0;

  const isCompleted = status === "Completed";
  const isActive = status === "In Progress";

  return (
    <div
      className={`journey-status-card ${
        isCompleted
          ? "journey-status-completed"
          : isActive
          ? "journey-status-active"
          : "journey-status-pending"
      }`}
    >
      <div className="journey-status-header">
        <div className="journey-status-title">
          <div className="journey-status-icon">
            {isCompleted ? (
              <CheckCircle2 size={23} />
            ) : (
              <Activity size={23} />
            )}
          </div>

          <div>
            <span>Current Journey</span>
            <h3>{status}</h3>
          </div>
        </div>

        <span className="journey-status-badge">{status}</span>
      </div>

      <div className="journey-status-grid">
        <div className="journey-status-item">
          <BusFront size={18} />
          <div>
            <span>Bus</span>
            <strong>{busNumber}</strong>
          </div>
        </div>

        <div className="journey-status-item">
          <MapPin size={18} />
          <div>
            <span>Route</span>
            <strong>{route}</strong>
          </div>
        </div>

        <div className="journey-status-item">
          <MapPin size={18} />
          <div>
            <span>Current Location</span>
            <strong>{currentLocation}</strong>
          </div>
        </div>

        <div className="journey-status-item">
          <Clock3 size={18} />
          <div>
            <span>Started At</span>
            <strong>{startedAt}</strong>
          </div>
        </div>
      </div>

      <div className="journey-progress-section">
        <div className="journey-progress-header">
          <div>
            <span>Students Boarded</span>
            <strong>
              {studentsBoarded} / {totalStudents}
            </strong>
          </div>

          <span>{Math.round(progress)}%</span>
        </div>

        <div className="journey-progress-bar">
          <div
            className="journey-progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="journey-progress-footer">
          <span>
            <Users size={14} />
            {studentsBoarded} boarded
          </span>

          <span>Last updated {lastUpdated}</span>
        </div>
      </div>
    </div>
  );
};

export default JourneyStatus;