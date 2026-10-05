import {
  BusFront,
  CheckCircle2,
  Clock3,
  Compass,
  MapPin,
  Navigation,
  Phone,
  Route,
  ShieldCheck,
  UserRound,
  Users,
  Zap,
} from "lucide-react";

import Button from "../../components/ui/Button";

const LiveBus = () => {
  const stops = [
    {
      name: "Central Bus Depot",
      time: "07:35 AM",
      status: "completed",
    },
    {
      name: "Green Park",
      time: "07:52 AM",
      status: "completed",
      yours: true,
    },
    {
      name: "City Center",
      time: "08:15 AM",
      status: "current",
    },
    {
      name: "University Road",
      time: "08:32 AM",
      status: "upcoming",
    },
    {
      name: "EduTrack Public School",
      time: "08:45 AM",
      status: "upcoming",
    },
  ];

  return (
    <div className="parent-page live-bus-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Parent Portal</span>

          <h1>Live Bus Tracking</h1>

          <p>
            Track your child's bus location and journey progress
            in real time.
          </p>
        </div>

        <div className="page-header-actions">
          <Button
            variant="secondary"
            icon={Phone}
          >
            Contact Driver
          </Button>

          <Button
            variant="primary"
            icon={Navigation}
          >
            Refresh Location
          </Button>
        </div>
      </div>

      {/* Live Status Banner */}
      <section className="live-bus-status-banner">
        <div className="live-bus-status-left">
          <div className="live-bus-pulse-icon">
            <BusFront size={25} />
            <span></span>
          </div>

          <div>
            <span>Live Tracking Active</span>

            <h2>BUS-102 is on Route A</h2>

            <p>
              Last location update: 08:24 AM · Moving towards
              University Road
            </p>
          </div>
        </div>

        <div className="live-bus-status-right">
          <div className="live-location-status">
            <span></span>
            Live
          </div>
        </div>
      </section>

      {/* Main Tracking Area */}
      <section className="live-bus-main-grid">
        {/* Map Area */}
        <div className="live-map-panel">
          <div className="live-map-header">
            <div>
              <span>Current Location</span>
              <h2>BUS-102</h2>
            </div>

            <div className="map-header-actions">
              <button type="button" title="Compass">
                <Compass size={17} />
              </button>

              <button type="button" title="Current location">
                <Navigation size={17} />
              </button>
            </div>
          </div>

          {/* Frontend Map Placeholder */}
          <div className="live-map-area">
            <div className="map-grid-lines"></div>

            <div className="map-road road-one"></div>
            <div className="map-road road-two"></div>
            <div className="map-road road-three"></div>
            <div className="map-road road-four"></div>

            <div className="map-area-label label-one">
              City Center
            </div>

            <div className="map-area-label label-two">
              University Road
            </div>

            <div className="map-area-label label-three">
              Green Park
            </div>

            <div className="map-school-marker">
              <div>
                <MapPin size={20} />
              </div>

              <span>EduTrack School</span>
            </div>

            <div className="map-pickup-marker">
              <div>
                <MapPin size={19} />
              </div>

              <span>Your Pickup</span>
            </div>

            <div className="map-bus-route">
              <span className="route-line-segment segment-one"></span>
              <span className="route-line-segment segment-two"></span>
              <span className="route-line-segment segment-three"></span>
            </div>

            <div className="map-bus-marker">
              <div className="map-bus-marker-icon">
                <BusFront size={21} />
              </div>

              <div className="map-bus-marker-label">
                <strong>BUS-102</strong>
                <span>Moving</span>
              </div>
            </div>

            <div className="map-current-location">
              <span></span>
            </div>

            <div className="map-overlay-card">
              <div className="map-overlay-icon">
                <Navigation size={17} />
              </div>

              <div>
                <span>Current Location</span>
                <strong>City Center</strong>
              </div>

              <span className="map-speed">
                28 km/h
              </span>
            </div>

            <div className="map-provider-note">
              Live map integration
            </div>
          </div>

          <div className="live-map-footer">
            <div>
              <Zap size={16} />
              <span>Live location</span>
            </div>

            <span>
              Updated 2 minutes ago
            </span>
          </div>
        </div>

        {/* Journey Information */}
        <div className="live-bus-info-panel">
          <div className="panel-header">
            <div>
              <span>Journey Details</span>
              <h2>Route A</h2>
            </div>

            <span className="live-indicator">
              <span></span>
              Live
            </span>
          </div>

          <div className="live-bus-details">
            <div className="live-detail-card">
              <div className="live-detail-icon live-purple">
                <BusFront size={19} />
              </div>

              <div>
                <span>Bus</span>
                <strong>BUS-102</strong>
              </div>
            </div>

            <div className="live-detail-card">
              <div className="live-detail-icon live-blue">
                <Navigation size={19} />
              </div>

              <div>
                <span>Current Stop</span>
                <strong>City Center</strong>
              </div>
            </div>

            <div className="live-detail-card">
              <div className="live-detail-icon live-mint">
                <Clock3 size={19} />
              </div>

              <div>
                <span>School ETA</span>
                <strong>08:45 AM</strong>
              </div>
            </div>

            <div className="live-detail-card">
              <div className="live-detail-icon live-orange">
                <Users size={19} />
              </div>

              <div>
                <span>Students</span>
                <strong>28 / 32</strong>
              </div>
            </div>
          </div>

          <div className="live-next-stop">
            <div className="live-next-stop-icon">
              <MapPin size={20} />
            </div>

            <div>
              <span>Next Stop</span>
              <strong>University Road</strong>
              <small>Expected at 08:32 AM</small>
            </div>

            <Navigation size={18} />
          </div>

          <div className="live-bus-driver">
            <div className="live-driver-avatar">
              <UserRound size={23} />
            </div>

            <div>
              <span>Driver</span>
              <strong>Rahul Sharma</strong>

              <small>
                <ShieldCheck size={13} />
                Verified Driver
              </small>
            </div>

            <button
              type="button"
              title="Contact driver"
            >
              <Phone size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* Route Stops */}
      <section className="dashboard-panel live-stops-panel">
        <div className="panel-header">
          <div>
            <span>Route Progress</span>
            <h2>All Stops</h2>
          </div>

          <span className="route-progress-text">
            2 completed · 3 remaining
          </span>
        </div>

        <div className="live-stops-grid">
          {stops.map((stop, index) => (
            <div
              className={`live-stop-card live-stop-${stop.status} ${
                stop.yours ? "live-stop-yours" : ""
              }`}
              key={stop.name}
            >
              <div className="live-stop-number">
                {stop.status === "completed" ? (
                  <CheckCircle2 size={18} />
                ) : stop.status === "current" ? (
                  <Navigation size={18} />
                ) : (
                  index + 1
                )}
              </div>

              <div className="live-stop-content">
                <span>
                  {stop.yours
                    ? "Your Pickup"
                    : stop.status === "current"
                    ? "Current Stop"
                    : stop.status === "completed"
                    ? "Completed"
                    : "Upcoming"}
                </span>

                <strong>{stop.name}</strong>

                <small>{stop.time}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Driver + Safety */}
      <section className="dashboard-two-column">
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <span>Transportation Team</span>
              <h2>Driver Information</h2>
            </div>

            <ShieldCheck size={20} />
          </div>

          <div className="live-driver-large">
            <div className="live-driver-large-avatar">
              <UserRound size={31} />
            </div>

            <div className="live-driver-large-info">
              <h3>Rahul Sharma</h3>
              <span>Assigned Driver · BUS-102</span>

              <div>
                <ShieldCheck size={14} />
                Verified Driver
              </div>
            </div>

            <button type="button">
              <Phone size={18} />
              Contact
            </button>
          </div>

          <div className="live-driver-stats">
            <div>
              <BusFront size={17} />
              <span>Bus</span>
              <strong>BUS-102</strong>
            </div>

            <div>
              <Route size={17} />
              <span>Route</span>
              <strong>Route A</strong>
            </div>

            <div>
              <Users size={17} />
              <span>Students</span>
              <strong>32</strong>
            </div>
          </div>
        </div>

        <div className="dashboard-panel live-safety-panel">
          <div className="panel-header">
            <div>
              <span>Safety</span>
              <h2>Journey Status</h2>
            </div>

            <ShieldCheck size={21} />
          </div>

          <div className="live-safety-main">
            <div className="live-safety-check">
              <CheckCircle2 size={29} />
            </div>

            <div>
              <h3>Journey is safe</h3>

              <p>
                No emergency alerts or safety issues have been
                reported for this journey.
              </p>
            </div>
          </div>

          <div className="live-safety-list">
            <div>
              <CheckCircle2 size={15} />
              <span>Bus location available</span>
            </div>

            <div>
              <CheckCircle2 size={15} />
              <span>Driver verified</span>
            </div>

            <div>
              <CheckCircle2 size={15} />
              <span>Journey is on schedule</span>
            </div>
          </div>

          <button
            type="button"
            className="live-emergency-button"
          >
            <Phone size={17} />
            Emergency Contact
          </button>
        </div>
      </section>

      {/* Footer Notice */}
      <div className="parent-safety-notice">
        <div className="parent-safety-icon">
          <Navigation size={20} />
        </div>

        <div>
          <strong>Live location is updated automatically</strong>

          <p>
            Location accuracy may vary depending on the driver's
            device and network connection.
          </p>
        </div>

        <CheckCircle2 size={19} />
      </div>
    </div>
  );
};

export default LiveBus;