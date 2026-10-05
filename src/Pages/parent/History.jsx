import { useMemo, useState } from "react";
import {
  ArrowDownToLine,
  BusFront,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  MapPin,
  Search,
  ShieldCheck,
  UserRound,
  Users,
  XCircle,
} from "lucide-react";

const journeyHistory = [
  {
    id: 1,
    date: "October 5, 2026",
    day: "Monday",
    bus: "BUS-102",
    route: "Route A",
    driver: "Rahul Sharma",
    pickup: "Green Park",
    pickupTime: "07:52 AM",
    schoolArrival: "08:45 AM",
    dropTime: "03:30 PM",
    schoolDeparture: "03:05 PM",
    duration: "53 min",
    students: 32,
    status: "Completed",
    boarding: "Boarded",
    note: "Journey completed normally.",
  },
  {
    id: 2,
    date: "October 3, 2026",
    day: "Saturday",
    bus: "BUS-102",
    route: "Route A",
    driver: "Rahul Sharma",
    pickup: "Green Park",
    pickupTime: "07:54 AM",
    schoolArrival: "08:47 AM",
    dropTime: "03:34 PM",
    schoolDeparture: "03:06 PM",
    duration: "53 min",
    students: 31,
    status: "Completed",
    boarding: "Boarded",
    note: "Minor traffic delay near City Center.",
  },
  {
    id: 3,
    date: "October 2, 2026",
    day: "Friday",
    bus: "BUS-102",
    route: "Route A",
    driver: "Rahul Sharma",
    pickup: "Green Park",
    pickupTime: "07:51 AM",
    schoolArrival: "08:44 AM",
    dropTime: "03:28 PM",
    schoolDeparture: "03:03 PM",
    duration: "53 min",
    students: 32,
    status: "Completed",
    boarding: "Boarded",
    note: "Journey completed normally.",
  },
  {
    id: 4,
    date: "October 1, 2026",
    day: "Thursday",
    bus: "BUS-102",
    route: "Route A",
    driver: "Rahul Sharma",
    pickup: "Green Park",
    pickupTime: "07:55 AM",
    schoolArrival: "08:49 AM",
    dropTime: "03:35 PM",
    schoolDeparture: "03:07 PM",
    duration: "54 min",
    students: 32,
    status: "Completed",
    boarding: "Boarded",
    note: "Journey completed normally.",
  },
  {
    id: 5,
    date: "September 30, 2026",
    day: "Wednesday",
    bus: "BUS-102",
    route: "Route A",
    driver: "Rahul Sharma",
    pickup: "Green Park",
    pickupTime: "07:53 AM",
    schoolArrival: "08:46 AM",
    dropTime: "03:31 PM",
    schoolDeparture: "03:05 PM",
    duration: "53 min",
    students: 31,
    status: "Completed",
    boarding: "Boarded",
    note: "Journey completed normally.",
  },
  {
    id: 6,
    date: "September 29, 2026",
    day: "Tuesday",
    bus: "BUS-102",
    route: "Route A",
    driver: "Rahul Sharma",
    pickup: "Green Park",
    pickupTime: "08:02 AM",
    schoolArrival: "08:55 AM",
    dropTime: "03:39 PM",
    schoolDeparture: "03:08 PM",
    duration: "53 min",
    students: 30,
    status: "Delayed",
    boarding: "Boarded",
    note: "Journey delayed due to heavy traffic.",
  },
  {
    id: 7,
    date: "September 28, 2026",
    day: "Monday",
    bus: "BUS-102",
    route: "Route A",
    driver: "Rahul Sharma",
    pickup: "Green Park",
    pickupTime: "07:52 AM",
    schoolArrival: "08:44 AM",
    dropTime: "03:29 PM",
    schoolDeparture: "03:04 PM",
    duration: "52 min",
    students: 32,
    status: "Completed",
    boarding: "Boarded",
    note: "Journey completed normally.",
  },
  {
    id: 8,
    date: "September 26, 2026",
    day: "Saturday",
    bus: "BUS-102",
    route: "Route A",
    driver: "Rahul Sharma",
    pickup: "Green Park",
    pickupTime: "07:50 AM",
    schoolArrival: "08:42 AM",
    dropTime: "03:27 PM",
    schoolDeparture: "03:02 PM",
    duration: "52 min",
    students: 32,
    status: "Completed",
    boarding: "Boarded",
    note: "Journey completed normally.",
  },
];

const History = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJourneys = useMemo(() => {
    return journeyHistory.filter((journey) => {
      const matchesFilter =
        activeFilter === "All" ||
        journey.status === activeFilter;

      const searchableText = [
        journey.date,
        journey.day,
        journey.bus,
        journey.route,
        journey.driver,
        journey.pickup,
        journey.status,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(
        searchTerm.toLowerCase()
      );

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  const completedCount = journeyHistory.filter(
    (journey) => journey.status === "Completed"
  ).length;

  const delayedCount = journeyHistory.filter(
    (journey) => journey.status === "Delayed"
  ).length;

  const totalStudents = journeyHistory.reduce(
    (total, journey) => total + journey.students,
    0
  );

  const handleDownload = () => {
    console.log("Downloading journey history...");
  };

  return (
    <div className="parent-page history-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Parent Portal</span>

          <h1>Journey History</h1>

          <p>
            Review your child's previous transportation journeys
            and boarding records.
          </p>
        </div>

        <div className="page-header-actions">
          <button
            type="button"
            className="history-download-button"
            onClick={handleDownload}
          >
            <Download size={17} />
            Download Report
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <section className="history-summary-grid">
        <div className="history-summary-card history-purple">
          <div className="history-summary-icon">
            <CalendarDays size={21} />
          </div>

          <div>
            <span>Total Journeys</span>
            <strong>{journeyHistory.length}</strong>
            <small>Recent records</small>
          </div>
        </div>

        <div className="history-summary-card history-mint">
          <div className="history-summary-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Completed</span>
            <strong>{completedCount}</strong>
            <small>Successful journeys</small>
          </div>
        </div>

        <div className="history-summary-card history-orange">
          <div className="history-summary-icon">
            <Clock3 size={21} />
          </div>

          <div>
            <span>Delayed</span>
            <strong>{delayedCount}</strong>
            <small>Traffic / route delays</small>
          </div>
        </div>

        <div className="history-summary-card history-blue">
          <div className="history-summary-icon">
            <Users size={21} />
          </div>

          <div>
            <span>Students Tracked</span>
            <strong>{totalStudents}</strong>
            <small>Total boarding records</small>
          </div>
        </div>
      </section>

      {/* History Panel */}
      <section className="history-panel">
        <div className="history-panel-header">
          <div>
            <span>Transportation Records</span>
            <h2>Past Journeys</h2>
          </div>

          <div className="history-header-status">
            <span></span>
            Records Updated
          </div>
        </div>

        {/* Toolbar */}
        <div className="history-toolbar">
          <div className="history-search">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search bus, route, driver..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />
          </div>

          <div className="history-filters">
            {["All", "Completed", "Delayed"].map(
              (filter) => (
                <button
                  type="button"
                  key={filter}
                  className={`history-filter ${
                    activeFilter === filter
                      ? "history-filter-active"
                      : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === "Completed" && (
                    <CheckCircle2 size={15} />
                  )}

                  {filter === "Delayed" && (
                    <Clock3 size={15} />
                  )}

                  {filter === "All" && (
                    <CalendarDays size={15} />
                  )}

                  {filter}
                </button>
              )
            )}
          </div>
        </div>

        {/* Journey Cards */}
        <div className="history-list">
          {filteredJourneys.length > 0 ? (
            filteredJourneys.map((journey) => (
              <div
                className="history-journey-card"
                key={journey.id}
              >
                {/* Date */}
                <div className="history-date-column">
                  <div className="history-date-icon">
                    <CalendarDays size={19} />
                  </div>

                  <div>
                    <strong>{journey.date}</strong>
                    <span>{journey.day}</span>
                  </div>
                </div>

                {/* Journey Details */}
                <div className="history-route-column">
                  <div className="history-route-title">
                    <div className="history-bus-icon">
                      <BusFront size={19} />
                    </div>

                    <div>
                      <strong>{journey.bus}</strong>
                      <span>{journey.route}</span>
                    </div>
                  </div>

                  <div className="history-route-line">
                    <div className="history-route-point">
                      <span></span>

                      <div>
                        <small>Pickup</small>
                        <strong>{journey.pickup}</strong>
                        <em>{journey.pickupTime}</em>
                      </div>
                    </div>

                    <div className="history-route-connector"></div>

                    <div className="history-route-point">
                      <span></span>

                      <div>
                        <small>School Arrival</small>
                        <strong>EduTrack School</strong>
                        <em>{journey.schoolArrival}</em>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Driver */}
                <div className="history-driver-column">
                  <span>Driver</span>

                  <div>
                    <div className="history-driver-avatar">
                      <UserRound size={17} />
                    </div>

                    <strong>{journey.driver}</strong>
                  </div>

                  <small>
                    <ShieldCheck size={13} />
                    Verified
                  </small>
                </div>

                {/* Status */}
                <div className="history-status-column">
                  <span>Status</span>

                  <div
                    className={`history-status ${
                      journey.status === "Completed"
                        ? "history-status-completed"
                        : "history-status-delayed"
                    }`}
                  >
                    {journey.status === "Completed" ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <Clock3 size={16} />
                    )}

                    {journey.status}
                  </div>

                  <small>
                    Duration: {journey.duration}
                  </small>
                </div>
              </div>
            ))
          ) : (
            <div className="history-empty-state">
              <div className="history-empty-icon">
                <Search size={27} />
              </div>

              <h3>No journeys found</h3>

              <p>
                Try changing your search or selected filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Selected Journey Summary */}
      <section className="history-detail-grid">
        <div className="dashboard-panel history-detail-panel">
          <div className="panel-header">
            <div>
              <span>Latest Journey</span>
              <h2>October 5, 2026</h2>
            </div>

            <CheckCircle2 size={21} />
          </div>

          <div className="history-detail-content">
            <div className="history-detail-item">
              <div className="history-detail-icon">
                <BusFront size={18} />
              </div>

              <div>
                <span>Bus Number</span>
                <strong>BUS-102</strong>
              </div>
            </div>

            <div className="history-detail-item">
              <div className="history-detail-icon history-blue-icon">
                <MapPin size={18} />
              </div>

              <div>
                <span>Pickup Point</span>
                <strong>Green Park</strong>
              </div>
            </div>

            <div className="history-detail-item">
              <div className="history-detail-icon history-mint-icon">
                <Clock3 size={18} />
              </div>

              <div>
                <span>Journey Duration</span>
                <strong>53 minutes</strong>
              </div>
            </div>

            <div className="history-detail-item">
              <div className="history-detail-icon history-orange-icon">
                <Users size={18} />
              </div>

              <div>
                <span>Students on Bus</span>
                <strong>32 Students</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-panel boarding-detail-panel">
          <div className="panel-header">
            <div>
              <span>Boarding Record</span>
              <h2>Aarav Sharma</h2>
            </div>

            <BusFront size={21} />
          </div>

          <div className="boarding-record">
            <div className="boarding-record-step boarding-completed">
              <div className="boarding-step-icon">
                <CheckCircle2 size={19} />
              </div>

              <div>
                <span>Boarded Bus</span>
                <strong>07:52 AM</strong>
                <small>Green Park Pickup Point</small>
              </div>
            </div>

            <div className="boarding-record-line"></div>

            <div className="boarding-record-step boarding-completed">
              <div className="boarding-step-icon">
                <CheckCircle2 size={19} />
              </div>

              <div>
                <span>Reached School</span>
                <strong>08:45 AM</strong>
                <small>EduTrack Public School</small>
              </div>
            </div>

            <div className="boarding-record-line"></div>

            <div className="boarding-record-step boarding-upcoming">
              <div className="boarding-step-icon">
                <BusFront size={19} />
              </div>

              <div>
                <span>Afternoon Drop</span>
                <strong>03:30 PM</strong>
                <small>Green Park</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <div className="parent-safety-notice">
        <div className="parent-safety-icon">
          <ShieldCheck size={20} />
        </div>

        <div>
          <strong>Journey records are securely maintained</strong>

          <p>
            Boarding and transportation records help parents
            review their child's daily travel history.
          </p>
        </div>

        <CheckCircle2 size={19} />
      </div>
    </div>
  );
};

export default History;