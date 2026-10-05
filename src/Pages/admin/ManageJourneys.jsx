import {
  Activity,
  BusFront,
  CheckCircle2,
  Clock3,
  MapPin,
  MoreHorizontal,
  Navigation,
  PauseCircle,
  PlayCircle,
  Plus,
  Search,
  UserRound,
  Users,
  XCircle,
} from "lucide-react";

import Button from "../../components/ui/Button";
import JourneyStatus from "../../components/journey/JourneyStatus";
import JourneyTimeline from "../../components/journey/JourneyTimeline";

const journeys = [
  {
    id: 1,
    bus: "BUS-102",
    route: "Route A",
    driver: "Rahul Sharma",
    students: 32,
    boarded: 28,
    start: "07:35 AM",
    currentLocation: "City Center",
    status: "In Progress",
  },
  {
    id: 2,
    bus: "BUS-105",
    route: "Route B",
    driver: "Amit Verma",
    students: 31,
    boarded: 31,
    start: "07:30 AM",
    currentLocation: "School",
    status: "Completed",
  },
  {
    id: 3,
    bus: "BUS-101",
    route: "Route C",
    driver: "Suresh Gupta",
    students: 34,
    boarded: 30,
    start: "07:40 AM",
    currentLocation: "Thatipur",
    status: "In Progress",
  },
  {
    id: 4,
    bus: "BUS-103",
    route: "Route D",
    driver: "Vikram Singh",
    students: 29,
    boarded: 29,
    start: "07:25 AM",
    currentLocation: "School",
    status: "Completed",
  },
  {
    id: 5,
    bus: "BUS-104",
    route: "Route E",
    driver: "Manoj Yadav",
    students: 36,
    boarded: 0,
    start: "08:00 AM",
    currentLocation: "Depot",
    status: "Scheduled",
  },
  {
    id: 6,
    bus: "BUS-106",
    route: "Route F",
    driver: "Arun Khan",
    students: 28,
    boarded: 0,
    start: "08:05 AM",
    currentLocation: "Depot",
    status: "Scheduled",
  },
];

const ManageJourneys = () => {
  const inProgressCount = journeys.filter(
    (journey) => journey.status === "In Progress"
  ).length;

  const completedCount = journeys.filter(
    (journey) => journey.status === "Completed"
  ).length;

  const scheduledCount = journeys.filter(
    (journey) => journey.status === "Scheduled"
  ).length;

  return (
    <div className="manage-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Transportation</span>

          <h1>Journeys</h1>

          <p>
            Monitor today's school transportation journeys and
            student boarding activity.
          </p>
        </div>

        <div className="page-header-actions">
          <Button
            variant="secondary"
            icon={Navigation}
          >
            Live Map
          </Button>

          <Button
            variant="primary"
            icon={Plus}
          >
            Create Journey
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="management-stats">
        <div className="management-stat-card management-stat-purple">
          <div className="management-stat-icon">
            <Activity size={21} />
          </div>

          <div>
            <span>Total Journeys</span>
            <strong>{journeys.length}</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-blue">
          <div className="management-stat-icon">
            <PlayCircle size={21} />
          </div>

          <div>
            <span>In Progress</span>
            <strong>{inProgressCount}</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-mint">
          <div className="management-stat-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Completed</span>
            <strong>{completedCount}</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-orange">
          <div className="management-stat-icon">
            <Clock3 size={21} />
          </div>

          <div>
            <span>Scheduled</span>
            <strong>{scheduledCount}</strong>
          </div>
        </div>
      </div>

      {/* Current Journey */}
      <section className="dashboard-section">
        <div className="section-heading">
          <div>
            <span>Live Monitoring</span>
            <h2>Current Journey</h2>
          </div>

          <span className="live-indicator">
            <span></span>
            Live Tracking
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
          lastUpdated="08:42 AM"
        />
      </section>

      {/* Journey Details */}
      <section className="dashboard-two-column">
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <span>Journey Progress</span>
              <h2>Route A Activity</h2>
            </div>

            <span className="journey-live-badge">
              <Activity size={14} />
              Active
            </span>
          </div>

          <JourneyTimeline />
        </div>

        <div className="dashboard-panel journey-summary-panel">
          <div className="panel-header">
            <div>
              <span>Journey Information</span>
              <h2>BUS-102</h2>
            </div>

            <div className="journey-bus-icon">
              <BusFront size={22} />
            </div>
          </div>

          <div className="journey-summary-list">
            <div className="journey-summary-item">
              <div>
                <BusFront size={17} />
                <span>Bus Number</span>
              </div>

              <strong>BUS-102</strong>
            </div>

            <div className="journey-summary-item">
              <div>
                <Navigation size={17} />
                <span>Route</span>
              </div>

              <strong>Route A</strong>
            </div>

            <div className="journey-summary-item">
              <div>
                <UserRound size={17} />
                <span>Driver</span>
              </div>

              <strong>Rahul Sharma</strong>
            </div>

            <div className="journey-summary-item">
              <div>
                <MapPin size={17} />
                <span>Current Location</span>
              </div>

              <strong>City Center</strong>
            </div>

            <div className="journey-summary-item">
              <div>
                <Users size={17} />
                <span>Students</span>
              </div>

              <strong>28 / 32 Boarded</strong>
            </div>

            <div className="journey-summary-item">
              <div>
                <Clock3 size={17} />
                <span>Started At</span>
              </div>

              <strong>07:35 AM</strong>
            </div>
          </div>

          <button
            type="button"
            className="track-bus-button journey-track-button"
          >
            <Navigation size={17} />
            Track Bus Live
          </button>
        </div>
      </section>

      {/* Journey Table */}
      <section className="management-table-panel">
        <div className="management-table-toolbar">
          <div>
            <span>Journey Management</span>
            <h2>Today's Journeys</h2>
          </div>

          <div className="management-search">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search journeys..."
            />
          </div>
        </div>

        <div className="management-table-container">
          <table className="management-table journey-table">
            <thead>
              <tr>
                <th>Journey</th>
                <th>Bus</th>
                <th>Driver</th>
                <th>Students</th>
                <th>Start Time</th>
                <th>Current Location</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {journeys.map((journey) => {
                const isProgress =
                  journey.status === "In Progress";

                const isCompleted =
                  journey.status === "Completed";

                return (
                  <tr key={journey.id}>
                    <td>
                      <div className="journey-table-name">
                        <div className="journey-table-icon">
                          <Activity size={17} />
                        </div>

                        <div>
                          <strong>
                            Journey #{100 + journey.id}
                          </strong>

                          <span>{journey.route}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="table-bus">
                        <BusFront size={15} />
                        {journey.bus}
                      </div>
                    </td>

                    <td>
                      <div className="table-person-small">
                        <UserRound size={15} />
                        {journey.driver}
                      </div>
                    </td>

                    <td>
                      <div className="journey-student-count">
                        <Users size={14} />

                        <span>
                          {journey.boarded}/{journey.students}
                        </span>
                      </div>
                    </td>

                    <td>
                      <div className="route-table-value">
                        <Clock3 size={14} />
                        {journey.start}
                      </div>
                    </td>

                    <td>
                      <div className="table-location">
                        <MapPin size={15} />
                        {journey.currentLocation}
                      </div>
                    </td>

                    <td>
                      <span
                        className={`journey-status-table ${
                          isProgress
                            ? "journey-status-table-active"
                            : isCompleted
                            ? "journey-status-table-completed"
                            : "journey-status-table-scheduled"
                        }`}
                      >
                        {isProgress ? (
                          <PlayCircle size={14} />
                        ) : isCompleted ? (
                          <CheckCircle2 size={14} />
                        ) : (
                          <PauseCircle size={14} />
                        )}

                        {journey.status}
                      </span>
                    </td>

                    <td>
                      <div className="table-actions">
                        <button
                          type="button"
                          title="View journey"
                        >
                          <Navigation size={16} />
                        </button>

                        <button
                          type="button"
                          title="More options"
                        >
                          <MoreHorizontal size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Journey Notice */}
      <div className="journey-system-notice">
        <div className="journey-notice-icon">
          <Activity size={19} />
        </div>

        <div>
          <strong>Journey monitoring is active</strong>

          <p>
            Live journey data will update automatically when the
            transportation system is connected to the backend.
          </p>
        </div>

        <XCircle size={18} className="journey-notice-close" />
      </div>
    </div>
  );
};

export default ManageJourneys;