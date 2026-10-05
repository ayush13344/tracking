import {
  AlertTriangle,
  ArrowRight,
  BusFront,
  CheckCircle2,
  Clock3,
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
import JourneyStatus from "../../components/journey/JourneyStatus";
import JourneyTimeline from "../../components/journey/JourneyTimeline";

const DriverDashboard = () => {
  const routeStops = [
    {
      name: "Central Bus Depot",
      time: "07:35 AM",
      students: 0,
      status: "Completed",
    },
    {
      name: "Green Park",
      time: "07:52 AM",
      students: 8,
      status: "Completed",
    },
    {
      name: "City Center",
      time: "08:15 AM",
      students: 7,
      status: "Current",
    },
    {
      name: "University Road",
      time: "08:32 AM",
      students: 9,
      status: "Upcoming",
    },
    {
      name: "EduTrack Public School",
      time: "08:45 AM",
      students: 8,
      status: "Upcoming",
    },
  ];

  const journeyEvents = [
    {
      title: "Journey Started",
      location: "Central Bus Depot",
      time: "07:35 AM",
      type: "start",
      completed: true,
    },
    {
      title: "Students Picked Up",
      location: "Green Park",
      time: "07:52 AM",
      type: "pickup",
      completed: true,
    },
    {
      title: "Route in Progress",
      location: "City Center",
      time: "08:15 AM",
      type: "route",
      completed: true,
    },
    {
      title: "Next Stop",
      location: "University Road",
      time: "08:32 AM",
      type: "stop",
      completed: false,
    },
    {
      title: "School Arrival",
      location: "EduTrack Public School",
      time: "08:45 AM",
      type: "school",
      completed: false,
    },
  ];

  return (
    <div className="driver-page driver-dashboard-page">
      {/* Page Header */}
      <div className="page-header driver-page-header">
        <div>
          <span className="page-eyebrow">Driver Portal</span>

          <h1>Good morning, Rahul! 👋</h1>

          <p>
            Manage today's bus journey, students and assigned
            route from your dashboard.
          </p>
        </div>

        <div className="page-header-actions">
          <Button
            variant="secondary"
            icon={Phone}
            onClick={() =>
              console.log("Support clicked")
            }
          >
            Contact Support
          </Button>

          <Button
            variant="primary"
            icon={Navigation}
            onClick={() =>
              console.log("Start journey clicked")
            }
          >
            Start Journey
          </Button>
        </div>
      </div>

      {/* Driver Status */}
      <section className="driver-status-banner">
        <div className="driver-status-left">
          <div className="driver-status-icon">
            <BusFront size={26} />
          </div>

          <div>
            <span>Today's Assignment</span>

            <h2>BUS-102 · Route A</h2>

            <p>
              Morning journey · 07:35 AM - 08:45 AM
            </p>
          </div>
        </div>

        <div className="driver-status-right">
          <div className="driver-online-status">
            <span></span>
            Driver Online
          </div>

          <span className="driver-last-update">
            Updated 2 min ago
          </span>
        </div>
      </section>

      {/* Stats */}
      <section className="driver-stats-grid">
        <div className="driver-stat-card driver-stat-purple">
          <div className="driver-stat-icon">
            <BusFront size={21} />
          </div>

          <div>
            <span>Assigned Bus</span>
            <strong>BUS-102</strong>
            <small>Route A</small>
          </div>
        </div>

        <div className="driver-stat-card driver-stat-blue">
          <div className="driver-stat-icon">
            <Users size={21} />
          </div>

          <div>
            <span>Students</span>
            <strong>32</strong>
            <small>Assigned today</small>
          </div>
        </div>

        <div className="driver-stat-card driver-stat-mint">
          <div className="driver-stat-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Boarded</span>
            <strong>28 / 32</strong>
            <small>87.5% complete</small>
          </div>
        </div>

        <div className="driver-stat-card driver-stat-orange">
          <div className="driver-stat-icon">
            <Clock3 size={21} />
          </div>

          <div>
            <span>Next Stop</span>
            <strong>08:32 AM</strong>
            <small>University Road</small>
          </div>
        </div>
      </section>

      {/* Journey Status */}
      <section className="driver-dashboard-section">
        <JourneyStatus
          status="In Progress"
          busNumber="BUS-102"
          route="Route A"
          currentLocation="City Center"
          studentsBoarded={28}
          totalStudents={32}
          startedAt="07:35 AM"
          lastUpdated="08:24 AM"
        />
      </section>

      {/* Main Dashboard Grid */}
      <section className="driver-main-grid">
        {/* Today's Route */}
        <div className="dashboard-panel driver-route-panel">
          <div className="panel-header">
            <div>
              <span>Today's Route</span>
              <h2>Route A</h2>
            </div>

            <div className="driver-route-header-icon">
              <Route size={20} />
            </div>
          </div>

          <div className="driver-route-list">
            {routeStops.map((stop, index) => (
              <div
                className={`driver-route-stop ${
                  stop.status === "Current"
                    ? "driver-route-current"
                    : stop.status === "Completed"
                    ? "driver-route-completed"
                    : "driver-route-upcoming"
                }`}
                key={stop.name}
              >
                <div className="driver-stop-marker">
                  {stop.status === "Completed" ? (
                    <CheckCircle2 size={17} />
                  ) : stop.status === "Current" ? (
                    <Navigation size={17} />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>

                <div className="driver-stop-info">
                  <div>
                    <strong>{stop.name}</strong>

                    {stop.status === "Current" && (
                      <span className="driver-current-badge">
                        Current
                      </span>
                    )}
                  </div>

                  <p>
                    <Clock3 size={13} />
                    {stop.time}
                  </p>
                </div>

                <div className="driver-stop-students">
                  {stop.students > 0 ? (
                    <>
                      <Users size={14} />
                      <span>{stop.students}</span>
                    </>
                  ) : (
                    <span>Depot</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="driver-view-route-button"
            onClick={() =>
              console.log("View route clicked")
            }
          >
            <MapPin size={17} />
            View Full Route
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Bus Information */}
        <div className="dashboard-panel driver-bus-panel">
          <div className="panel-header">
            <div>
              <span>Vehicle Assignment</span>
              <h2>My Bus</h2>
            </div>

            <BusFront size={21} />
          </div>

          <div className="driver-bus-visual">
            <div className="driver-bus-visual-icon">
              <BusFront size={39} />
            </div>

            <div>
              <strong>BUS-102</strong>
              <span>School Transport</span>
            </div>

            <span className="driver-bus-active">
              Active
            </span>
          </div>

          <div className="driver-bus-details">
            <div>
              <span>Registration</span>
              <strong>MP07 AB 1020</strong>
            </div>

            <div>
              <span>Capacity</span>
              <strong>40 Students</strong>
            </div>

            <div>
              <span>Current Load</span>
              <strong>28 Students</strong>
            </div>

            <div>
              <span>Route</span>
              <strong>Route A</strong>
            </div>
          </div>

          <div className="driver-bus-health">
            <div className="driver-health-icon">
              <ShieldCheck size={19} />
            </div>

            <div>
              <strong>Vehicle Status: Good</strong>
              <span>
                Last maintenance check completed recently.
              </span>
            </div>

            <CheckCircle2 size={18} />
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="dashboard-panel driver-timeline-panel">
        <div className="panel-header">
          <div>
            <span>Journey Activity</span>
            <h2>Today's Journey Timeline</h2>
          </div>

          <div className="driver-live-badge">
            <Zap size={15} />
            Live
          </div>
        </div>

        <JourneyTimeline events={journeyEvents} />
      </section>

      {/* Driver + Quick Actions */}
      <section className="driver-bottom-grid">
        {/* Driver Profile */}
        <div className="dashboard-panel driver-profile-panel">
          <div className="panel-header">
            <div>
              <span>My Profile</span>
              <h2>Driver Information</h2>
            </div>

            <UserRound size={21} />
          </div>

          <div className="driver-profile-main">
            <div className="driver-profile-avatar">
              <UserRound size={30} />
            </div>

            <div>
              <h3>Rahul Sharma</h3>

              <span>
                Professional Driver · Employee ID DRV-102
              </span>

              <div className="driver-profile-verified">
                <ShieldCheck size={14} />
                Verified Driver
              </div>
            </div>
          </div>

          <div className="driver-profile-details">
            <div>
              <Phone size={16} />
              <span>+91 98765 12345</span>
            </div>

            <div>
              <BusFront size={16} />
              <span>BUS-102 Assigned</span>
            </div>

            <div>
              <Route size={16} />
              <span>Route A</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-panel driver-actions-panel">
          <div className="panel-header">
            <div>
              <span>Quick Access</span>
              <h2>Driver Actions</h2>
            </div>

            <Zap size={21} />
          </div>

          <div className="driver-action-grid">
            <button
              type="button"
              onClick={() =>
                console.log("Students clicked")
              }
            >
              <Users size={20} />
              <span>My Students</span>
              <small>32 assigned</small>
            </button>

            <button
              type="button"
              onClick={() =>
                console.log("Boarding clicked")
              }
            >
              <CheckCircle2 size={20} />
              <span>Boarding</span>
              <small>28 / 32 boarded</small>
            </button>

            <button
              type="button"
              onClick={() =>
                console.log("QR Scanner clicked")
              }
            >
              <Zap size={20} />
              <span>QR Scanner</span>
              <small>Scan student QR</small>
            </button>

            <button
              type="button"
              className="driver-emergency-action"
              onClick={() =>
                console.log("Emergency clicked")
              }
            >
              <AlertTriangle size={20} />
              <span>Emergency</span>
              <small>Report an issue</small>
            </button>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <div className="driver-safety-notice">
        <div className="driver-safety-icon">
          <ShieldCheck size={21} />
        </div>

        <div>
          <strong>Drive safely and keep students secure</strong>

          <p>
            Follow the assigned route, verify boarding records
            and report emergencies immediately.
          </p>
        </div>

        <CheckCircle2 size={19} />
      </div>
    </div>
  );
};

export default DriverDashboard;