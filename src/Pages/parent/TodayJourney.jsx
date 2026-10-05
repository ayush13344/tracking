import {
  ArrowRight,
  BusFront,
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
import Button from "../../components/ui/Button";

const TodayJourney = () => {
  const stops = [
    {
      name: "Central Bus Depot",
      time: "07:35 AM",
      status: "completed",
      type: "Start",
    },
    {
      name: "Green Park",
      time: "07:52 AM",
      status: "completed",
      type: "Your Pickup",
    },
    {
      name: "City Center",
      time: "08:15 AM",
      status: "current",
      type: "Current Stop",
    },
    {
      name: "University Road",
      time: "08:32 AM",
      status: "upcoming",
      type: "Upcoming",
    },
    {
      name: "EduTrack Public School",
      time: "08:45 AM",
      status: "upcoming",
      type: "Destination",
    },
  ];

  return (
    <div className="parent-page today-journey-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Parent Portal</span>

          <h1>Today's Journey</h1>

          <p>
            Follow your child's school transportation journey from
            pickup to arrival.
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
            Track Live
          </Button>
        </div>
      </div>

      {/* Journey Status */}
      <section className="dashboard-section">
        <div className="section-heading">
          <div>
            <span>Live Transportation</span>
            <h2>Aarav's Journey</h2>
          </div>

          <span className="live-indicator">
            <span></span>
            Journey Active
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

      {/* Journey Overview Cards */}
      <div className="today-journey-overview">
        <div className="today-overview-card overview-card-purple">
          <div className="today-overview-icon">
            <BusFront size={22} />
          </div>

          <div>
            <span>Bus</span>
            <strong>BUS-102</strong>
            <small>Route A</small>
          </div>
        </div>

        <div className="today-overview-card overview-card-blue">
          <div className="today-overview-icon">
            <MapPin size={22} />
          </div>

          <div>
            <span>Pickup</span>
            <strong>Green Park</strong>
            <small>07:52 AM</small>
          </div>
        </div>

        <div className="today-overview-card overview-card-mint">
          <div className="today-overview-icon">
            <Navigation size={22} />
          </div>

          <div>
            <span>Current Stop</span>
            <strong>City Center</strong>
            <small>08:15 AM</small>
          </div>
        </div>

        <div className="today-overview-card overview-card-orange">
          <div className="today-overview-icon">
            <Clock3 size={22} />
          </div>

          <div>
            <span>School ETA</span>
            <strong>08:45 AM</strong>
            <small>On schedule</small>
          </div>
        </div>
      </div>

      {/* Route Stops + Driver */}
      <section className="dashboard-two-column">
        {/* Stops */}
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <span>Route Progress</span>
              <h2>Journey Stops</h2>
            </div>

            <span className="route-progress-text">
              2 / 5
            </span>
          </div>

          <div className="journey-stops-list">
            {stops.map((stop, index) => (
              <div
                className={`journey-stop-item journey-stop-${stop.status}`}
                key={stop.name}
              >
                <div className="journey-stop-marker">
                  {stop.status === "completed" ? (
                    <CheckCircle2 size={18} />
                  ) : stop.status === "current" ? (
                    <Navigation size={18} />
                  ) : (
                    <span></span>
                  )}
                </div>

                {index !== stops.length - 1 && (
                  <div className="journey-stop-line"></div>
                )}

                <div className="journey-stop-content">
                  <div>
                    <span>{stop.type}</span>
                    <strong>{stop.name}</strong>
                  </div>

                  <time>{stop.time}</time>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Driver */}
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <span>Transportation Team</span>
              <h2>Driver Details</h2>
            </div>

            <div className="driver-safe-icon">
              <ShieldCheck size={21} />
            </div>
          </div>

          <div className="today-driver-profile">
            <div className="today-driver-avatar">
              <UserRound size={28} />
            </div>

            <div>
              <h3>Rahul Sharma</h3>
              <span>Assigned Driver</span>

              <div className="driver-rating">
                <ShieldCheck size={14} />
                Verified Driver
              </div>
            </div>
          </div>

          <div className="today-driver-details">
            <div>
              <BusFront size={17} />
              <span>Assigned Bus</span>
              <strong>BUS-102</strong>
            </div>

            <div>
              <Navigation size={17} />
              <span>Route</span>
              <strong>Route A</strong>
            </div>

            <div>
              <Users size={17} />
              <span>Students</span>
              <strong>32 Students</strong>
            </div>

            <div>
              <Phone size={17} />
              <span>Contact</span>
              <strong>Available</strong>
            </div>
          </div>

          <div className="driver-contact-actions">
            <button type="button">
              <Phone size={17} />
              Contact Driver
            </button>

            <button type="button">
              <Navigation size={17} />
              Track Bus
            </button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="dashboard-panel today-timeline-panel">
        <div className="panel-header">
          <div>
            <span>Journey Activity</span>
            <h2>Today's Timeline</h2>
          </div>

          <span className="journey-date-label">
            Today · Morning Journey
          </span>
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
              title: "Aarav Boarded",
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
      </section>

      {/* Boarding Information */}
      <section className="today-boarding-card">
        <div className="today-boarding-left">
          <div className="today-boarding-icon">
            <CheckCircle2 size={25} />
          </div>

          <div>
            <span>Boarding Confirmed</span>

            <h2>
              Aarav successfully boarded the bus.
            </h2>

            <p>
              Boarding was recorded at Green Park at 07:52 AM.
            </p>
          </div>
        </div>

        <div className="today-boarding-time">
          <strong>07:52</strong>
          <span>AM</span>
        </div>
      </section>

      {/* Estimated Arrival */}
      <section className="today-arrival-card">
        <div className="today-arrival-icon">
          <BusFront size={24} />
        </div>

        <div className="today-arrival-content">
          <span>Estimated School Arrival</span>

          <h2>08:45 AM</h2>

          <p>
            Your child is currently on schedule.
          </p>
        </div>

        <div className="today-arrival-route">
          <span>City Center</span>

          <ArrowRight size={20} />

          <strong>School</strong>
        </div>

        <div className="today-arrival-status">
          <CheckCircle2 size={17} />
          On Schedule
        </div>
      </section>

      {/* Safety Notice */}
      <div className="parent-safety-notice">
        <div className="parent-safety-icon">
          <ShieldCheck size={20} />
        </div>

        <div>
          <strong>Journey monitoring is active</strong>

          <p>
            You will receive an update when your child arrives at
            school.
          </p>
        </div>

        <CheckCircle2 size={19} />
      </div>
    </div>
  );
};

export default TodayJourney;