import {
Bus,
CheckCircle2,
Clock3,
Gauge,
MapPin,
Navigation,
Phone,
ShieldCheck,
UserRound,
} from "lucide-react";

const LiveBus = () => {
const stops = [
{
number: 1,
name: "Shivaji Nagar",
time: "07:15 AM",
status: "completed",
},
{
number: 2,
name: "MP Nagar",
time: "07:25 AM",
status: "completed",
},
{
number: 3,
name: "Arera Colony",
time: "07:35 AM",
status: "current",
},
{
number: 4,
name: "Bawadia Kalan",
time: "07:45 AM",
status: "upcoming",
},
{
number: 5,
name: "School Campus",
time: "08:00 AM",
status: "upcoming",
},
];

return ( <div className="parent-page live-bus-page">
{/* Page Header */} <div className="page-header"> <div> <span className="page-eyebrow">LIVE TRACKING</span>

      <h1>Live Bus</h1>

      <p>
        Track your child's school bus and view the current journey status.
      </p>
    </div>

    <div className="page-header-actions">
      <button type="button" className="secondary-button">
        <Navigation size={16} />
        Refresh Location
      </button>
    </div>
  </div>

  {/* Live Status Banner */}
  <div className="live-bus-status-banner">
    <div className="live-bus-status-left">
      <div className="live-bus-pulse-icon">
        <Bus size={22} />
      </div>

      <div>
        <strong>Bus BUS-102 is currently moving</strong>

        <span>
          Last updated just now • Route A • Aarav Sharma
        </span>
      </div>
    </div>

    <div className="live-bus-status-right">
      <span className="live-location-status">
        <span></span>
        Live Location
      </span>

      <strong>07:38 AM</strong>
    </div>
  </div>

  {/* Main Grid */}
  <div className="live-bus-main-grid">
    {/* Live Map */}
    <section className="dashboard-panel live-map-panel">
      <div className="panel-header live-map-header">
        <div>
          <h3>Bus Location</h3>
          <span>Real-time journey map</span>
        </div>

        <div className="map-header-actions">
          <button
            type="button"
            className="map-control-button"
          >
            +
          </button>

          <button
            type="button"
            className="map-control-button"
          >
            −
          </button>
        </div>
      </div>

      <div className="live-map-area">
        <div className="map-grid-lines"></div>

        {/* Roads */}
        <div className="map-road road-one"></div>
        <div className="map-road road-two"></div>
        <div className="map-road road-three"></div>
        <div className="map-road road-four"></div>

        {/* Area Labels */}
        <span className="map-area-label label-one">
          Arera Colony
        </span>

        <span className="map-area-label label-two">
          MP Nagar
        </span>

        <span className="map-area-label label-three">
          Bawadia Kalan
        </span>

        {/* School Marker */}
        <div className="map-school-marker">
          <div>
            <MapPin size={16} />
          </div>

          <span>School</span>
        </div>

        {/* Pickup Marker */}
        <div className="map-pickup-marker">
          <div>
            <MapPin size={15} />
          </div>

          <span>Your Stop</span>
        </div>

        {/* Bus Route */}
        <div className="map-bus-route">
          <div className="route-line-segment segment-one"></div>
          <div className="route-line-segment segment-two"></div>
          <div className="route-line-segment segment-three"></div>
        </div>

        {/* Bus Marker */}
        <div className="map-bus-marker">
          <div className="map-bus-marker-icon">
            <Bus size={20} />
          </div>

          <div className="map-bus-marker-label">
            BUS-102
          </div>
        </div>

        {/* Current Location */}
        <div className="map-current-location">
          <span></span>
        </div>

        {/* Speed Overlay */}
        <div className="map-overlay-card">
          <div className="map-overlay-icon">
            <Gauge size={17} />
          </div>

          <div>
            <span>Current Speed</span>
            <strong>32 km/h</strong>
          </div>
        </div>

        <div className="map-provider-note">
          Live map preview
        </div>
      </div>

      {/* Map Legend */}
      <div className="live-map-footer">
        <div>
          <span className="legend-dot bus-dot"></span>
          Bus
        </div>

        <div>
          <span className="legend-dot pickup-dot"></span>
          Pickup Stop
        </div>

        <div>
          <span className="legend-dot school-dot"></span>
          School
        </div>
      </div>
    </section>

    {/* Bus Information */}
    <section className="live-bus-info-panel">
      <div className="live-bus-details">
        <div className="live-detail-card">
          <div className="live-detail-icon live-purple">
            <Bus size={20} />
          </div>

          <div>
            <span>Bus Number</span>
            <strong>BUS-102</strong>
          </div>
        </div>

        <div className="live-detail-card">
          <div className="live-detail-icon live-blue">
            <Clock3 size={20} />
          </div>

          <div>
            <span>Estimated Arrival</span>
            <strong>07:45 AM</strong>
          </div>
        </div>

        <div className="live-detail-card">
          <div className="live-detail-icon live-mint">
            <Gauge size={20} />
          </div>

          <div>
            <span>Current Speed</span>
            <strong>32 km/h</strong>
          </div>
        </div>

        <div className="live-detail-card">
          <div className="live-detail-icon live-orange">
            <Navigation size={20} />
          </div>

          <div>
            <span>Distance</span>
            <strong>3.2 km</strong>
          </div>
        </div>
      </div>

      {/* Next Stop */}
      <div className="live-next-stop">
        <div className="live-next-stop-icon">
          <MapPin size={19} />
        </div>

        <div>
          <span>Next Stop</span>
          <strong>Bawadia Kalan</strong>
          <small>Expected at 07:45 AM</small>
        </div>
      </div>

      {/* Driver Quick Info */}
      <div className="live-bus-driver">
        <div className="live-driver-avatar">
          <UserRound size={22} />
        </div>

        <div>
          <span>Driver</span>
          <strong>Rahul Sharma</strong>
          <small>Verified Driver</small>
        </div>

        <button
          type="button"
          className="icon-button"
          title="Call Driver"
        >
          <Phone size={18} />
        </button>
      </div>
    </section>
  </div>

  {/* Route Stops */}
  <section className="dashboard-panel live-stops-panel">
    <div className="panel-header">
      <div>
        <h3>Route Stops</h3>
        <span>Today's route progress</span>
      </div>

      <strong className="route-progress-text">
        3 of 5 stops
      </strong>
    </div>

    <div className="live-stops-grid">
      {stops.map((stop) => (
        <div
          key={stop.number}
          className={`live-stop-card live-stop-${stop.status}`}
        >
          <div className="live-stop-number">
            {stop.status === "completed" ? (
              <CheckCircle2 size={17} />
            ) : (
              stop.number
            )}
          </div>

          <div className="live-stop-content">
            <strong>{stop.name}</strong>

            <span>{stop.time}</span>

            {stop.status === "completed" && (
              <small>Completed</small>
            )}

            {stop.status === "current" && (
              <small>Bus is here</small>
            )}

            {stop.status === "upcoming" && (
              <small>Upcoming</small>
            )}
          </div>

          {stop.status === "current" && (
            <span className="live-stop-yours">
              Current
            </span>
          )}
        </div>
      ))}
    </div>
  </section>

  {/* Driver + Safety */}
  <div className="live-bus-bottom-grid">
    {/* Driver Information */}
    <section className="dashboard-panel live-driver-large">
      <div className="panel-header">
        <div>
          <h3>Driver Information</h3>
          <span>Assigned driver for today's journey</span>
        </div>
      </div>

      <div className="live-driver-large-content">
        <div className="live-driver-large-avatar">
          <UserRound size={30} />
        </div>

        <div className="live-driver-large-info">
          <strong>Rahul Sharma</strong>

          <span>
            Assigned Driver · BUS-102
          </span>

          <div className="driver-verified-badge">
            <CheckCircle2 size={13} />
            Verified Driver
          </div>
        </div>

        <button
          type="button"
          className="secondary-button"
        >
          <Phone size={16} />
          Contact
        </button>
      </div>

      {/* Driver Stats */}
      <div className="driver-info-stats">
        <div className="driver-info-stat">
          <span>Bus</span>
          <strong>BUS-102</strong>
        </div>

        <div className="driver-info-stat">
          <span>Route</span>
          <strong>Route A</strong>
        </div>

        <div className="driver-info-stat">
          <span>Students</span>
          <strong>32</strong>
        </div>
      </div>
    </section>

    {/* Safety */}
    <section className="dashboard-panel live-safety-panel">
      <div className="panel-header">
        <div>
          <h3>Safety Status</h3>
          <span>Current journey safety checks</span>
        </div>
      </div>

      <div className="live-safety-main">
        <div className="live-safety-check">
          <ShieldCheck size={24} />
        </div>

        <div>
          <strong>All systems normal</strong>
          <span>No safety alerts reported</span>
        </div>
      </div>

      <div className="live-safety-list">
        <div>
          <CheckCircle2 size={16} />
          GPS tracking active
        </div>

        <div>
          <CheckCircle2 size={16} />
          Driver verified
        </div>

        <div>
          <CheckCircle2 size={16} />
          Route on schedule
        </div>
      </div>

      <button
        type="button"
        className="live-emergency-button"
      >
        <ShieldCheck size={17} />
        Emergency Assistance
      </button>
    </section>
  </div>

  {/* Safety Notice */}
  <div className="parent-safety-notice">
    <div className="parent-safety-icon">
      <ShieldCheck size={18} />
    </div>

    <div>
      <strong>Child Safety First</strong>

      <p>
        Location information is provided only for the
        registered parent/guardian. Please contact the
        school in case of any emergency.
      </p>
    </div>
  </div>
</div>
);
};

export default LiveBus;
