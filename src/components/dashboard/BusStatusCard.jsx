import {
  BusFront,
  MapPin,
  Users,
  Clock3,
  Navigation,
} from "lucide-react";

const BusStatusCard = ({
  busNumber = "BUS-102",
  driver = "Rahul Sharma",
  route = "City Center → School",
  students = 32,
  currentStop = "Green Park",
  nextStop = "Central School",
  status = "On Route",
  time = "08:42 AM",
}) => {
  const isOnRoute = status === "On Route";

  return (
    <div className="bus-status-card">
      <div className="bus-card-header">
        <div className="bus-icon">
          <BusFront size={24} />
        </div>

        <div className="bus-info">
          <h3>{busNumber}</h3>
          <p>{driver}</p>
        </div>

        <span
          className={`bus-status ${
            isOnRoute ? "status-active" : "status-warning"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="bus-route">
        <div className="route-point">
          <span className="route-dot current"></span>

          <div>
            <small>Current Location</small>
            <strong>{currentStop}</strong>
          </div>
        </div>

        <div className="route-line"></div>

        <div className="route-point">
          <span className="route-dot next"></span>

          <div>
            <small>Next Stop</small>
            <strong>{nextStop}</strong>
          </div>
        </div>
      </div>

      <div className="bus-card-footer">
        <div className="bus-footer-item">
          <Users size={17} />
          <span>{students} Students</span>
        </div>

        <div className="bus-footer-item">
          <MapPin size={17} />
          <span>{route}</span>
        </div>

        <div className="bus-footer-item">
          <Clock3 size={17} />
          <span>{time}</span>
        </div>
      </div>

      <button type="button" className="track-bus-button">
        <Navigation size={17} />
        Track Bus
      </button>
    </div>
  );
};

export default BusStatusCard;