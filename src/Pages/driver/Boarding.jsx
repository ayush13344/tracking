import { useMemo, useState } from "react";
import {
  AlertCircle,
  BusFront,
  CheckCircle2,
  Clock3,
  MapPin,
  Search,
  ShieldCheck,
  UserRound,
  Users,
  XCircle,
} from "lucide-react";

const initialStudents = [
  {
    id: "STU-1001",
    name: "Aarav Sharma",
    className: "8-A",
    pickup: "Green Park",
    pickupTime: "07:52 AM",
    seat: "A-01",
    status: "Boarded",
  },
  {
    id: "STU-1002",
    name: "Ananya Verma",
    className: "7-B",
    pickup: "City Center",
    pickupTime: "08:15 AM",
    seat: "A-02",
    status: "Boarded",
  },
  {
    id: "STU-1003",
    name: "Vivaan Gupta",
    className: "9-A",
    pickup: "Thatipur",
    pickupTime: "08:20 AM",
    seat: "A-03",
    status: "Boarded",
  },
  {
    id: "STU-1004",
    name: "Diya Jain",
    className: "6-C",
    pickup: "Lashkar",
    pickupTime: "08:24 AM",
    seat: "A-04",
    status: "Boarded",
  },
  {
    id: "STU-1005",
    name: "Aditya Singh",
    className: "10-B",
    pickup: "Morar",
    pickupTime: "08:28 AM",
    seat: "A-05",
    status: "Waiting",
  },
  {
    id: "STU-1006",
    name: "Myra Khan",
    className: "5-A",
    pickup: "University Road",
    pickupTime: "08:32 AM",
    seat: "A-06",
    status: "Waiting",
  },
  {
    id: "STU-1007",
    name: "Kabir Mehta",
    className: "8-B",
    pickup: "University Road",
    pickupTime: "08:32 AM",
    seat: "A-07",
    status: "Waiting",
  },
  {
    id: "STU-1008",
    name: "Sara Khan",
    className: "7-A",
    pickup: "City Center",
    pickupTime: "08:15 AM",
    seat: "A-08",
    status: "Boarded",
  },
  {
    id: "STU-1009",
    name: "Arjun Patel",
    className: "9-B",
    pickup: "Green Park",
    pickupTime: "07:52 AM",
    seat: "A-09",
    status: "Boarded",
  },
  {
    id: "STU-1010",
    name: "Ishita Roy",
    className: "6-A",
    pickup: "Thatipur",
    pickupTime: "08:20 AM",
    seat: "A-10",
    status: "Absent",
  },
];

const stops = [
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
    status: "Completed",
  },
  {
    name: "Thatipur",
    time: "08:20 AM",
    students: 6,
    status: "Completed",
  },
  {
    name: "Lashkar",
    time: "08:24 AM",
    students: 5,
    status: "Current",
  },
  {
    name: "University Road",
    time: "08:32 AM",
    students: 6,
    status: "Upcoming",
  },
  {
    name: "EduTrack Public School",
    time: "08:45 AM",
    students: 0,
    status: "Upcoming",
  },
];

const Boarding = () => {
  const [students, setStudents] = useState(initialStudents);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const boardedCount = students.filter(
    (student) => student.status === "Boarded"
  ).length;

  const waitingCount = students.filter(
    (student) => student.status === "Waiting"
  ).length;

  const absentCount = students.filter(
    (student) => student.status === "Absent"
  ).length;

  const progress = Math.round((boardedCount / 32) * 100);

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesFilter =
        activeFilter === "All" ||
        student.status === activeFilter;

      const searchableText = [
        student.name,
        student.id,
        student.className,
        student.pickup,
        student.seat,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(
        searchTerm.toLowerCase()
      );

      return matchesFilter && matchesSearch;
    });
  }, [students, activeFilter, searchTerm]);

  const updateStatus = (id, status) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? {
              ...student,
              status,
            }
          : student
      )
    );
  };

  const markAllWaitingAsBoarded = () => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.status === "Waiting"
          ? {
              ...student,
              status: "Boarded",
            }
          : student
      )
    );
  };

  return (
    <div className="driver-page boarding-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Driver Portal</span>

          <h1>Boarding Management</h1>

          <p>
            Record student boarding status and make sure every
            student is safely accounted for.
          </p>
        </div>

        <div className="page-header-actions">
          <div className="boarding-bus-indicator">
            <BusFront size={17} />
            <span>BUS-102 · Route A</span>
          </div>
        </div>
      </div>

      {/* Live Boarding Banner */}
      <section className="boarding-live-banner">
        <div className="boarding-live-left">
          <div className="boarding-live-icon">
            <CheckCircle2 size={25} />
          </div>

          <div>
            <span>Today's Boarding Status</span>

            <h2>
              {boardedCount} of 32 students boarded
            </h2>

            <p>
              Current stop: Lashkar · Boarding is in progress
            </p>
          </div>
        </div>

        <div className="boarding-live-right">
          <div className="boarding-live-badge">
            <span></span>
            Live
          </div>

          <span>Updated just now</span>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="boarding-summary-grid">
        <div className="boarding-summary-card boarding-summary-total">
          <div className="boarding-summary-icon">
            <Users size={21} />
          </div>

          <div>
            <span>Total Assigned</span>
            <strong>32</strong>
            <small>Students today</small>
          </div>
        </div>

        <div className="boarding-summary-card boarding-summary-boarded">
          <div className="boarding-summary-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Boarded</span>
            <strong>{boardedCount}</strong>
            <small>{progress}% complete</small>
          </div>
        </div>

        <div className="boarding-summary-card boarding-summary-waiting">
          <div className="boarding-summary-icon">
            <Clock3 size={21} />
          </div>

          <div>
            <span>Waiting</span>
            <strong>{waitingCount}</strong>
            <small>Need verification</small>
          </div>
        </div>

        <div className="boarding-summary-card boarding-summary-absent">
          <div className="boarding-summary-icon">
            <XCircle size={21} />
          </div>

          <div>
            <span>Absent</span>
            <strong>{absentCount}</strong>
            <small>Not travelling</small>
          </div>
        </div>
      </section>

      {/* Progress */}
      <section className="dashboard-panel boarding-progress-panel">
        <div className="panel-header">
          <div>
            <span>Boarding Progress</span>
            <h2>Student Verification Progress</h2>
          </div>

          <strong className="boarding-progress-percentage">
            {progress}%
          </strong>
        </div>

        <div className="boarding-progress-track">
          <div
            className="boarding-progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <div className="boarding-progress-footer">
          <span>
            <CheckCircle2 size={15} />
            {boardedCount} boarded
          </span>

          <span>
            <Clock3 size={15} />
            {waitingCount} waiting
          </span>

          <span>
            <XCircle size={15} />
            {absentCount} absent
          </span>
        </div>
      </section>

      {/* Main Grid */}
      <section className="boarding-main-grid">
        {/* Student Boarding List */}
        <div className="dashboard-panel boarding-students-panel">
          <div className="panel-header">
            <div>
              <span>Student Records</span>
              <h2>Boarding List</h2>
            </div>

            <button
              type="button"
              className="boarding-mark-all-button"
              onClick={markAllWaitingAsBoarded}
            >
              <CheckCircle2 size={16} />
              Mark Waiting as Boarded
            </button>
          </div>

          {/* Toolbar */}
          <div className="boarding-toolbar">
            <div className="boarding-search">
              <Search size={17} />

              <input
                type="text"
                placeholder="Search student, class, pickup..."
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
              />
            </div>

            <div className="boarding-filters">
              {["All", "Boarded", "Waiting", "Absent"].map(
                (filter) => (
                  <button
                    type="button"
                    key={filter}
                    className={`boarding-filter ${
                      activeFilter === filter
                        ? "boarding-filter-active"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveFilter(filter)
                    }
                  >
                    {filter === "All" && (
                      <Users size={14} />
                    )}

                    {filter === "Boarded" && (
                      <CheckCircle2 size={14} />
                    )}

                    {filter === "Waiting" && (
                      <Clock3 size={14} />
                    )}

                    {filter === "Absent" && (
                      <XCircle size={14} />
                    )}

                    {filter}
                  </button>
                )
              )}
            </div>
          </div>

          {/* List */}
          <div className="boarding-student-list">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <div
                  className="boarding-student-row"
                  key={student.id}
                >
                  <div className="boarding-student-profile">
                    <div className="boarding-student-avatar">
                      <UserRound size={19} />
                    </div>

                    <div>
                      <strong>{student.name}</strong>

                      <span>
                        {student.id} · Class{" "}
                        {student.className}
                      </span>
                    </div>
                  </div>

                  <div className="boarding-student-location">
                    <span>Pickup</span>

                    <div>
                      <MapPin size={14} />
                      <strong>{student.pickup}</strong>
                    </div>

                    <small>
                      <Clock3 size={12} />
                      {student.pickupTime}
                    </small>
                  </div>

                  <div className="boarding-student-seat">
                    <span>Seat</span>
                    <strong>{student.seat}</strong>
                  </div>

                  <div className="boarding-student-status">
                    <span>Status</span>

                    <div
                      className={`boarding-status-pill boarding-status-${student.status.toLowerCase()}`}
                    >
                      {student.status === "Boarded" && (
                        <CheckCircle2 size={14} />
                      )}

                      {student.status === "Waiting" && (
                        <Clock3 size={14} />
                      )}

                      {student.status === "Absent" && (
                        <XCircle size={14} />
                      )}

                      {student.status}
                    </div>
                  </div>

                  <div className="boarding-student-actions">
                    {student.status !== "Boarded" && (
                      <button
                        type="button"
                        className="boarding-action-board"
                        onClick={() =>
                          updateStatus(
                            student.id,
                            "Boarded"
                          )
                        }
                        title="Mark boarded"
                      >
                        <CheckCircle2 size={16} />
                      </button>
                    )}

                    {student.status !== "Absent" && (
                      <button
                        type="button"
                        className="boarding-action-absent"
                        onClick={() =>
                          updateStatus(
                            student.id,
                            "Absent"
                          )
                        }
                        title="Mark absent"
                      >
                        <XCircle size={16} />
                      </button>
                    )}

                    {student.status === "Absent" && (
                      <button
                        type="button"
                        className="boarding-action-waiting"
                        onClick={() =>
                          updateStatus(
                            student.id,
                            "Waiting"
                          )
                        }
                        title="Mark waiting"
                      >
                        <Clock3 size={16} />
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="boarding-empty-state">
                <div className="boarding-empty-icon">
                  <Search size={27} />
                </div>

                <h3>No students found</h3>

                <p>
                  Try another search term or filter.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Stops */}
        <div className="dashboard-panel boarding-stops-panel">
          <div className="panel-header">
            <div>
              <span>Today's Route</span>
              <h2>Boarding by Stop</h2>
            </div>

            <MapPin size={21} />
          </div>

          <div className="boarding-stop-list">
            {stops.map((stop, index) => (
              <div
                className={`boarding-stop ${
                  stop.status === "Current"
                    ? "boarding-stop-current"
                    : stop.status === "Completed"
                    ? "boarding-stop-completed"
                    : "boarding-stop-upcoming"
                }`}
                key={stop.name}
              >
                <div className="boarding-stop-marker">
                  {stop.status === "Completed" ? (
                    <CheckCircle2 size={17} />
                  ) : stop.status === "Current" ? (
                    <MapPin size={17} />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>

                <div className="boarding-stop-info">
                  <strong>{stop.name}</strong>

                  <span>
                    <Clock3 size={12} />
                    {stop.time}
                  </span>
                </div>

                <div className="boarding-stop-count">
                  {stop.students > 0 ? (
                    <>
                      <Users size={14} />
                      <strong>{stop.students}</strong>
                    </>
                  ) : (
                    <span>Depot</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="boarding-current-stop">
            <div>
              <span>Current Stop</span>
              <strong>Lashkar</strong>
              <small>5 students scheduled</small>
            </div>

            <div className="boarding-current-stop-icon">
              <MapPin size={19} />
            </div>
          </div>
        </div>
      </section>

      {/* Verification Reminder */}
      <section className="boarding-verification-card">
        <div className="boarding-verification-icon">
          <ShieldCheck size={24} />
        </div>

        <div className="boarding-verification-content">
          <span>Boarding Verification</span>

          <h3>Before leaving each stop</h3>

          <div className="boarding-check-list">
            <div>
              <CheckCircle2 size={15} />
              <span>Confirm student identity</span>
            </div>

            <div>
              <CheckCircle2 size={15} />
              <span>Mark correct boarding status</span>
            </div>

            <div>
              <CheckCircle2 size={15} />
              <span>Make sure students are seated safely</span>
            </div>
          </div>
        </div>

        <div className="boarding-verification-badge">
          <ShieldCheck size={16} />
          Safety First
        </div>
      </section>

      {/* Footer Notice */}
      <div className="driver-safety-notice">
        <div className="driver-safety-icon">
          <AlertCircle size={21} />
        </div>

        <div>
          <strong>
            Do not leave a pickup point until boarding is
            verified
          </strong>

          <p>
            If a student is absent or there is any issue,
            update the status before continuing the route.
          </p>
        </div>

        <CheckCircle2 size={19} />
      </div>
    </div>
  );
};

export default Boarding;