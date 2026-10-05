import {
  AlertTriangle,
  BusFront,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Fuel,
  Gauge,
  MapPin,
  Settings,
  ShieldCheck,
  Thermometer,
  UserRound,
  Users,
  Wrench,
} from "lucide-react";

const AssignedBus = () => {
  const safetyChecks = [
    {
      label: "Brakes",
      status: "Good",
      icon: ShieldCheck,
    },
    {
      label: "Tyres",
      status: "Good",
      icon: CheckCircle2,
    },
    {
      label: "Lights",
      status: "Good",
      icon: CheckCircle2,
    },
    {
      label: "First Aid Kit",
      status: "Available",
      icon: ShieldCheck,
    },
    {
      label: "Emergency Exit",
      status: "Checked",
      icon: CheckCircle2,
    },
    {
      label: "GPS Tracking",
      status: "Active",
      icon: MapPin,
    },
  ];

  return (
    <div className="driver-page assigned-bus-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Driver Portal</span>

          <h1>Assigned Bus</h1>

          <p>
            View your assigned vehicle, maintenance information
            and daily safety status.
          </p>
        </div>

        <div className="page-header-actions">
          <span className="driver-page-status">
            <span></span>
            Vehicle Active
          </span>
        </div>
      </div>

      {/* Bus Hero */}
      <section className="assigned-bus-hero">
        <div className="assigned-bus-hero-visual">
          <div className="assigned-bus-large-icon">
            <BusFront size={54} />
          </div>

          <div>
            <span>Assigned Vehicle</span>
            <h2>BUS-102</h2>
            <p>School Transportation Vehicle</p>
          </div>
        </div>

        <div className="assigned-bus-hero-status">
          <div className="bus-active-indicator">
            <span></span>
            Active
          </div>

          <div>
            <span>Current Driver</span>

            <strong>
              <UserRound size={16} />
              Rahul Sharma
            </strong>
          </div>
        </div>
      </section>

      {/* Vehicle Stats */}
      <section className="assigned-bus-stats-grid">
        <div className="assigned-bus-stat">
          <div className="assigned-bus-stat-icon bus-stat-purple">
            <Users size={21} />
          </div>

          <div>
            <span>Capacity</span>
            <strong>40</strong>
            <small>Students</small>
          </div>
        </div>

        <div className="assigned-bus-stat">
          <div className="assigned-bus-stat-icon bus-stat-blue">
            <Users size={21} />
          </div>

          <div>
            <span>Current Load</span>
            <strong>28</strong>
            <small>Students onboard</small>
          </div>
        </div>

        <div className="assigned-bus-stat">
          <div className="assigned-bus-stat-icon bus-stat-mint">
            <Gauge size={21} />
          </div>

          <div>
            <span>Current Speed</span>
            <strong>28 km/h</strong>
            <small>Within safe limit</small>
          </div>
        </div>

        <div className="assigned-bus-stat">
          <div className="assigned-bus-stat-icon bus-stat-orange">
            <Fuel size={21} />
          </div>

          <div>
            <span>Fuel Level</span>
            <strong>72%</strong>
            <small>Good for today's route</small>
          </div>
        </div>
      </section>

      {/* Main Information */}
      <section className="assigned-bus-main-grid">
        {/* Vehicle Details */}
        <div className="dashboard-panel assigned-bus-details-panel">
          <div className="panel-header">
            <div>
              <span>Vehicle Information</span>
              <h2>Bus Details</h2>
            </div>

            <BusFront size={21} />
          </div>

          <div className="assigned-bus-details-grid">
            <div className="assigned-bus-detail">
              <div className="assigned-bus-detail-icon">
                <FileText size={18} />
              </div>

              <div>
                <span>Registration Number</span>
                <strong>MP07 AB 1020</strong>
              </div>
            </div>

            <div className="assigned-bus-detail">
              <div className="assigned-bus-detail-icon bus-detail-blue">
                <BusFront size={18} />
              </div>

              <div>
                <span>Vehicle Model</span>
                <strong>School Bus XL</strong>
              </div>
            </div>

            <div className="assigned-bus-detail">
              <div className="assigned-bus-detail-icon bus-detail-mint">
                <CalendarDays size={18} />
              </div>

              <div>
                <span>Year</span>
                <strong>2023</strong>
              </div>
            </div>

            <div className="assigned-bus-detail">
              <div className="assigned-bus-detail-icon bus-detail-orange">
                <Users size={18} />
              </div>

              <div>
                <span>Seating Capacity</span>
                <strong>40 Students</strong>
              </div>
            </div>

            <div className="assigned-bus-detail">
              <div className="assigned-bus-detail-icon bus-detail-purple">
                <MapPin size={18} />
              </div>

              <div>
                <span>Assigned Route</span>
                <strong>Route A</strong>
              </div>
            </div>

            <div className="assigned-bus-detail">
              <div className="assigned-bus-detail-icon bus-detail-pink">
                <Clock3 size={18} />
              </div>

              <div>
                <span>Service Schedule</span>
                <strong>Mon - Sat</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Current Assignment */}
        <div className="dashboard-panel assigned-bus-assignment-panel">
          <div className="panel-header">
            <div>
              <span>Today's Assignment</span>
              <h2>Route Information</h2>
            </div>

            <MapPin size={21} />
          </div>

          <div className="assigned-route-card">
            <div className="assigned-route-top">
              <div className="assigned-route-icon">
                <RouteIcon />
              </div>

              <div>
                <span>Assigned Route</span>
                <h3>Route A</h3>
              </div>

              <span className="assigned-route-status">
                Active
              </span>
            </div>

            <div className="assigned-route-path">
              <div className="assigned-path-point">
                <span className="path-dot start"></span>

                <div>
                  <small>Starting Point</small>
                  <strong>Central Bus Depot</strong>
                  <span>07:35 AM</span>
                </div>
              </div>

              <div className="assigned-path-line"></div>

              <div className="assigned-path-point">
                <span className="path-dot current"></span>

                <div>
                  <small>Current Location</small>
                  <strong>City Center</strong>
                  <span>08:24 AM</span>
                </div>
              </div>

              <div className="assigned-path-line"></div>

              <div className="assigned-path-point">
                <span className="path-dot destination"></span>

                <div>
                  <small>Destination</small>
                  <strong>EduTrack Public School</strong>
                  <span>08:45 AM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="assigned-route-summary">
            <div>
              <Clock3 size={16} />
              <span>Journey Time</span>
              <strong>70 min</strong>
            </div>

            <div>
              <MapPin size={16} />
              <span>Stops</span>
              <strong>5 Stops</strong>
            </div>

            <div>
              <Users size={16} />
              <span>Students</span>
              <strong>32</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance + Safety */}
      <section className="assigned-bus-bottom-grid">
        {/* Maintenance */}
        <div className="dashboard-panel bus-maintenance-panel">
          <div className="panel-header">
            <div>
              <span>Vehicle Care</span>
              <h2>Maintenance</h2>
            </div>

            <Wrench size={21} />
          </div>

          <div className="maintenance-status">
            <div className="maintenance-status-icon">
              <CheckCircle2 size={25} />
            </div>

            <div>
              <h3>Vehicle is in good condition</h3>

              <p>
                No maintenance issues have been reported for
                this vehicle.
              </p>
            </div>

            <span>Good</span>
          </div>

          <div className="maintenance-details">
            <div>
              <CalendarDays size={17} />
              <div>
                <span>Last Maintenance</span>
                <strong>September 28, 2026</strong>
              </div>
            </div>

            <div>
              <CalendarDays size={17} />
              <div>
                <span>Next Maintenance</span>
                <strong>October 28, 2026</strong>
              </div>
            </div>

            <div>
              <Wrench size={17} />
              <div>
                <span>Maintenance Type</span>
                <strong>Routine Service</strong>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="maintenance-report-button"
            onClick={() =>
              console.log("Maintenance report clicked")
            }
          >
            <FileText size={17} />
            View Maintenance Report
          </button>
        </div>

        {/* Safety Checks */}
        <div className="dashboard-panel bus-safety-panel">
          <div className="panel-header">
            <div>
              <span>Pre-Trip Inspection</span>
              <h2>Safety Checks</h2>
            </div>

            <ShieldCheck size={21} />
          </div>

          <p className="bus-safety-description">
            Complete safety checks before starting each journey.
          </p>

          <div className="bus-safety-check-list">
            {safetyChecks.map((check) => {
              const Icon = check.icon;

              return (
                <div
                  className="bus-safety-check"
                  key={check.label}
                >
                  <div className="bus-check-icon">
                    <Icon size={17} />
                  </div>

                  <span>{check.label}</span>

                  <strong>{check.status}</strong>

                  <CheckCircle2 size={16} />
                </div>
              );
            })}
          </div>

          <div className="safety-check-footer">
            <ShieldCheck size={16} />

            <span>
              All required safety checks completed for today.
            </span>
          </div>
        </div>
      </section>

      {/* Vehicle Monitoring */}
      <section className="dashboard-panel vehicle-monitor-panel">
        <div className="panel-header">
          <div>
            <span>Live Vehicle Monitoring</span>
            <h2>Current Vehicle Status</h2>
          </div>

          <div className="vehicle-monitor-live">
            <span></span>
            Live
          </div>
        </div>

        <div className="vehicle-monitor-grid">
          <div className="vehicle-monitor-item">
            <div className="vehicle-monitor-icon monitor-purple">
              <Gauge size={19} />
            </div>

            <div>
              <span>Speed</span>
              <strong>28 km/h</strong>
              <small>Safe driving range</small>
            </div>
          </div>

          <div className="vehicle-monitor-item">
            <div className="vehicle-monitor-icon monitor-blue">
              <Fuel size={19} />
            </div>

            <div>
              <span>Fuel</span>
              <strong>72%</strong>
              <small>Good level</small>
            </div>
          </div>

          <div className="vehicle-monitor-item">
            <div className="vehicle-monitor-icon monitor-mint">
              <Thermometer size={19} />
            </div>

            <div>
              <span>Engine Temperature</span>
              <strong>82°C</strong>
              <small>Normal range</small>
            </div>
          </div>

          <div className="vehicle-monitor-item">
            <div className="vehicle-monitor-icon monitor-orange">
              <MapPin size={19} />
            </div>

            <div>
              <span>GPS</span>
              <strong>Connected</strong>
              <small>Updated 2 min ago</small>
            </div>
          </div>
        </div>
      </section>

      {/* Warning / Emergency */}
      <div className="driver-safety-notice assigned-bus-notice">
        <div className="driver-safety-icon">
          <AlertTriangle size={21} />
        </div>

        <div>
          <strong>Report vehicle issues immediately</strong>

          <p>
            If you notice any problem with the vehicle, stop at
            a safe location and report it to the transport
            administrator.
          </p>
        </div>

        <ShieldCheck size={19} />
      </div>
    </div>
  );
};

/* Small route icon component */
const RouteIcon = () => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 4V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 7C9 7 15 7 18 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 14C9 14 15 14 18 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AssignedBus;