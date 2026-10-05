import {
  Bell,
  BusFront,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";

import JourneyStatus from "../../components/journey/JourneyStatus";
import JourneyTimeline from "../../components/journey/JourneyTimeline";
import NotificationCard from "../../components/notifications/NotificationCard";
import Button from "../../components/ui/Button";

const ParentDashboard = () => {
  const notifications = [
    {
      title: "Bus has started its journey",
      message:
        "BUS-102 has started from the depot and is currently travelling towards Green Park.",
      time: "5 min ago",
      type: "bus",
      read: false,
    },
    {
      title: "Your child has boarded",
      message:
        "Aarav Sharma successfully boarded BUS-102 at Green Park.",
      time: "18 min ago",
      type: "success",
      read: false,
    },
    {
      title: "Route update",
      message:
        "BUS-102 is currently near City Center. Estimated school arrival is 08:45 AM.",
      time: "24 min ago",
      type: "info",
      read: true,
    },
  ];

  return (
    <div className="parent-dashboard">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Parent Portal</span>

          <h1>Good morning, Rakesh! 👋</h1>

          <p>
            Here's the latest transportation update for your
            child.
          </p>
        </div>

        <div className="page-header-actions">
          <Button
            variant="secondary"
            icon={Bell}
          >
            Notifications
          </Button>

          <Button
            variant="primary"
            icon={Navigation}
          >
            Track Bus
          </Button>
        </div>
      </div>

      {/* Child Profile Card */}
      <section className="parent-child-overview">
        <div className="parent-child-main">
          <div className="parent-child-avatar">
            <UserRound size={30} />
          </div>

          <div className="parent-child-info">
            <span>My Child</span>

            <h2>Aarav Sharma</h2>

            <p>Class 8 - A · Student ID: STU-1001</p>
          </div>

          <span className="parent-child-status">
            <CheckCircle2 size={15} />
            Safe & On Route
          </span>
        </div>

        <div className="parent-child-details">
          <div>
            <BusFront size={17} />
            <span>Bus</span>
            <strong>BUS-102</strong>
          </div>

          <div>
            <MapPin size={17} />
            <span>Pickup</span>
            <strong>Green Park</strong>
          </div>

          <div>
            <Clock3 size={17} />
            <span>School ETA</span>
            <strong>08:45 AM</strong>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="parent-stats-grid">
        <div className="parent-stat-card parent-stat-purple">
          <div className="parent-stat-icon">
            <BusFront size={21} />
          </div>

          <div>
            <span>Today's Bus</span>
            <strong>BUS-102</strong>
            <small>Route A</small>
          </div>
        </div>

        <div className="parent-stat-card parent-stat-blue">
          <div className="parent-stat-icon">
            <Navigation size={21} />
          </div>

          <div>
            <span>Current Location</span>
            <strong>City Center</strong>
            <small>Moving towards school</small>
          </div>
        </div>

        <div className="parent-stat-card parent-stat-mint">
          <div className="parent-stat-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Boarding Status</span>
            <strong>Boarded</strong>
            <small>07:52 AM</small>
          </div>
        </div>

        <div className="parent-stat-card parent-stat-orange">
          <div className="parent-stat-icon">
            <Clock3 size={21} />
          </div>

          <div>
            <span>Estimated Arrival</span>
            <strong>08:45 AM</strong>
            <small>On schedule</small>
          </div>
        </div>
      </div>

      {/* Current Journey */}
      <section className="dashboard-section">
        <div className="section-heading">
          <div>
            <span>Live Transportation</span>
            <h2>Today's Journey</h2>
          </div>

          <span className="live-indicator">
            <span></span>
            Live
          </span>
        </div>

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

      {/* Main Dashboard Columns */}
      <section className="dashboard-two-column parent-dashboard-columns">
        {/* Journey Timeline */}
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <span>Journey Activity</span>
              <h2>Today's Timeline</h2>
            </div>

            <button
              type="button"
              className="panel-link"
            >
              View Details
            </button>
          </div>

          <JourneyTimeline
            events={[
              {
                title: "Journey Started",
                location: "Central Bus Depot",
                time: "07:35 AM",
                type: "start",
                completed: true,
              },
              {
                title: "Child Boarded",
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
            ]}
          />
        </div>

        {/* Child Information */}
        <div className="dashboard-panel parent-information-panel">
          <div className="panel-header">
            <div>
              <span>Child Information</span>
              <h2>Aarav Sharma</h2>
            </div>

            <div className="parent-info-avatar">
              <UserRound size={21} />
            </div>
          </div>

          <div className="parent-information-list">
            <div className="parent-information-item">
              <div>
                <Users size={17} />
                <span>Class</span>
              </div>

              <strong>8 - A</strong>
            </div>

            <div className="parent-information-item">
              <div>
                <BusFront size={17} />
                <span>Assigned Bus</span>
              </div>

              <strong>BUS-102</strong>
            </div>

            <div className="parent-information-item">
              <div>
                <MapPin size={17} />
                <span>Pickup Point</span>
              </div>

              <strong>Green Park</strong>
            </div>

            <div className="parent-information-item">
              <div>
                <Navigation size={17} />
                <span>Route</span>
              </div>

              <strong>Route A</strong>
            </div>

            <div className="parent-information-item">
              <div>
                <UserRound size={17} />
                <span>Driver</span>
              </div>

              <strong>Rahul Sharma</strong>
            </div>

            <div className="parent-information-item">
              <div>
                <ShieldCheck size={17} />
                <span>Safety Status</span>
              </div>

              <strong className="safe-status">
                Safe
              </strong>
            </div>
          </div>

          <button
            type="button"
            className="parent-view-child-button"
          >
            <UserRound size={16} />
            View Child Details
          </button>
        </div>
      </section>

      {/* Notifications + Quick Actions */}
      <section className="dashboard-two-column parent-bottom-columns">
        {/* Notifications */}
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <span>Latest Updates</span>
              <h2>Notifications</h2>
            </div>

            <button
              type="button"
              className="panel-link"
            >
              View All
            </button>
          </div>

          <div className="notification-list">
            {notifications.map((notification, index) => (
              <NotificationCard
                key={`${notification.title}-${index}`}
                {...notification}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <span>Quick Access</span>
              <h2>Parent Actions</h2>
            </div>

            <SparklesIcon />
          </div>

          <div className="parent-quick-actions">
            <button type="button">
              <div className="quick-action-icon quick-purple">
                <Navigation size={20} />
              </div>

              <div>
                <strong>Track Live Bus</strong>
                <span>View current bus location</span>
              </div>
            </button>

            <button type="button">
              <div className="quick-action-icon quick-blue">
                <CalendarDays size={20} />
              </div>

              <div>
                <strong>School Calendar</strong>
                <span>View holidays and events</span>
              </div>
            </button>

            <button type="button">
              <div className="quick-action-icon quick-mint">
                <Clock3 size={20} />
              </div>

              <div>
                <strong>Journey History</strong>
                <span>Check previous journeys</span>
              </div>
            </button>

            <button type="button">
              <div className="quick-action-icon quick-orange">
                <Phone size={20} />
              </div>

              <div>
                <strong>Contact School</strong>
                <span>Get help from administration</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <div className="parent-safety-notice">
        <div className="parent-safety-icon">
          <ShieldCheck size={20} />
        </div>

        <div>
          <strong>Your child's journey is being monitored</strong>

          <p>
            EduTrack keeps you updated about boarding, route
            progress and school arrival.
          </p>
        </div>

        <CheckCircle2 size={19} />
      </div>
    </div>
  );
};

const SparklesIcon = () => {
  return (
    <div className="parent-panel-decoration">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default ParentDashboard;