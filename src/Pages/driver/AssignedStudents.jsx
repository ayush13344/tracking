import { useMemo, useState } from "react";
import {
  BusFront,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
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
    parent: "Rakesh Sharma",
    phone: "+91 98765 43210",
    seat: "A-01",
    status: "Boarded",
  },
  {
    id: "STU-1002",
    name: "Ananya Verma",
    className: "7-B",
    pickup: "City Center",
    pickupTime: "08:15 AM",
    parent: "Neha Verma",
    phone: "+91 98765 43211",
    seat: "A-02",
    status: "Boarded",
  },
  {
    id: "STU-1003",
    name: "Vivaan Gupta",
    className: "9-A",
    pickup: "Thatipur",
    pickupTime: "08:20 AM",
    parent: "Amit Gupta",
    phone: "+91 98765 43212",
    seat: "A-03",
    status: "Boarded",
  },
  {
    id: "STU-1004",
    name: "Diya Jain",
    className: "6-C",
    pickup: "Lashkar",
    pickupTime: "08:24 AM",
    parent: "Pooja Jain",
    phone: "+91 98765 43213",
    seat: "A-04",
    status: "Boarded",
  },
  {
    id: "STU-1005",
    name: "Aditya Singh",
    className: "10-B",
    pickup: "Morar",
    pickupTime: "08:28 AM",
    parent: "Rajesh Singh",
    phone: "+91 98765 43214",
    seat: "A-05",
    status: "Waiting",
  },
  {
    id: "STU-1006",
    name: "Myra Khan",
    className: "5-A",
    pickup: "University Road",
    pickupTime: "08:32 AM",
    parent: "Sana Khan",
    phone: "+91 98765 43215",
    seat: "A-06",
    status: "Waiting",
  },
  {
    id: "STU-1007",
    name: "Kabir Mehta",
    className: "8-B",
    pickup: "Morar",
    pickupTime: "08:35 AM",
    parent: "Suresh Mehta",
    phone: "+91 98765 43216",
    seat: "A-07",
    status: "Waiting",
  },
  {
    id: "STU-1008",
    name: "Sara Khan",
    className: "7-A",
    pickup: "City Center",
    pickupTime: "08:15 AM",
    parent: "Imran Khan",
    phone: "+91 98765 43217",
    seat: "A-08",
    status: "Boarded",
  },
  {
    id: "STU-1009",
    name: "Arjun Patel",
    className: "9-B",
    pickup: "Green Park",
    pickupTime: "07:52 AM",
    parent: "Manish Patel",
    phone: "+91 98765 43218",
    seat: "A-09",
    status: "Boarded",
  },
  {
    id: "STU-1010",
    name: "Ishita Roy",
    className: "6-A",
    pickup: "Thatipur",
    pickupTime: "08:20 AM",
    parent: "Priya Roy",
    phone: "+91 98765 43219",
    seat: "A-10",
    status: "Absent",
  },
];

const AssignedStudents = () => {
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
        student.parent,
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
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, status }
          : student
      )
    );
  };

  return (
    <div className="driver-page assigned-students-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Driver Portal</span>

          <h1>Assigned Students</h1>

          <p>
            View and manage students assigned to BUS-102 on
            today's route.
          </p>
        </div>

        <div className="page-header-actions">
          <div className="driver-student-header-status">
            <Users size={17} />
            <span>32 Students Assigned</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <section className="driver-student-summary-grid">
        <div className="driver-student-summary-card summary-total">
          <div className="driver-student-summary-icon">
            <Users size={21} />
          </div>

          <div>
            <span>Total Students</span>
            <strong>32</strong>
            <small>Assigned today</small>
          </div>
        </div>

        <div className="driver-student-summary-card summary-boarded">
          <div className="driver-student-summary-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Boarded</span>
            <strong>{boardedCount}</strong>
            <small>
              {Math.round((boardedCount / 32) * 100)}% completed
            </small>
          </div>
        </div>

        <div className="driver-student-summary-card summary-waiting">
          <div className="driver-student-summary-icon">
            <Clock3 size={21} />
          </div>

          <div>
            <span>Waiting</span>
            <strong>{waitingCount}</strong>
            <small>Awaiting pickup</small>
          </div>
        </div>

        <div className="driver-student-summary-card summary-absent">
          <div className="driver-student-summary-icon">
            <XCircle size={21} />
          </div>

          <div>
            <span>Absent</span>
            <strong>{absentCount}</strong>
            <small>Marked absent</small>
          </div>
        </div>
      </section>

      {/* Boarding Progress */}
      <section className="dashboard-panel driver-boarding-progress-panel">
        <div className="panel-header">
          <div>
            <span>Boarding Progress</span>
            <h2>Today's Student Boarding</h2>
          </div>

          <div className="driver-progress-value">
            {boardedCount} / 32
          </div>
        </div>

        <div className="driver-progress-track">
          <div
            className="driver-progress-fill"
            style={{
              width: `${(boardedCount / 32) * 100}%`,
            }}
          ></div>
        </div>

        <div className="driver-progress-footer">
          <span>
            <CheckCircle2 size={15} />
            {boardedCount} students boarded
          </span>

          <span>
            <Clock3 size={15} />
            {waitingCount} students waiting
          </span>

          <span>
            {Math.round((boardedCount / 32) * 100)}% complete
          </span>
        </div>
      </section>

      {/* Students Panel */}
      <section className="driver-students-panel">
        <div className="driver-students-header">
          <div>
            <span>Student Management</span>
            <h2>Today's Assigned Students</h2>
          </div>

          <div className="driver-students-header-bus">
            <BusFront size={17} />
            BUS-102
          </div>
        </div>

        {/* Toolbar */}
        <div className="driver-students-toolbar">
          <div className="driver-student-search">
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

          <div className="driver-student-filters">
            {["All", "Boarded", "Waiting", "Absent"].map(
              (filter) => (
                <button
                  type="button"
                  key={filter}
                  className={`driver-student-filter ${
                    activeFilter === filter
                      ? "driver-student-filter-active"
                      : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === "Boarded" && (
                    <CheckCircle2 size={15} />
                  )}

                  {filter === "Waiting" && (
                    <Clock3 size={15} />
                  )}

                  {filter === "Absent" && (
                    <XCircle size={15} />
                  )}

                  {filter === "All" && (
                    <Users size={15} />
                  )}

                  {filter}
                </button>
              )
            )}
          </div>
        </div>

        {/* Student List */}
        <div className="driver-students-list">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <div
                className="driver-student-row"
                key={student.id}
              >
                {/* Student */}
                <div className="driver-student-profile">
                  <div className="driver-student-avatar">
                    <UserRound size={20} />
                  </div>

                  <div>
                    <strong>{student.name}</strong>

                    <span>
                      {student.id} · Class {student.className}
                    </span>
                  </div>
                </div>

                {/* Pickup */}
                <div className="driver-student-pickup">
                  <span>Pickup Point</span>

                  <div>
                    <MapPin size={15} />
                    <strong>{student.pickup}</strong>
                  </div>

                  <small>
                    <Clock3 size={13} />
                    {student.pickupTime}
                  </small>
                </div>

                {/* Parent */}
                <div className="driver-student-parent">
                  <span>Parent / Guardian</span>

                  <strong>{student.parent}</strong>

                  <button
                    type="button"
                    onClick={() =>
                      console.log(
                        `Calling ${student.parent}`
                      )
                    }
                  >
                    <Phone size={14} />
                    Contact
                  </button>
                </div>

                {/* Seat */}
                <div className="driver-student-seat">
                  <span>Seat</span>
                  <strong>{student.seat}</strong>
                </div>

                {/* Status */}
                <div className="driver-student-status-column">
                  <span>Status</span>

                  <span
                    className={`driver-student-status status-${student.status.toLowerCase()}`}
                  >
                    {student.status === "Boarded" && (
                      <CheckCircle2 size={15} />
                    )}

                    {student.status === "Waiting" && (
                      <Clock3 size={15} />
                    )}

                    {student.status === "Absent" && (
                      <XCircle size={15} />
                    )}

                    {student.status}
                  </span>

                  {student.status === "Waiting" && (
                    <button
                      type="button"
                      className="mark-boarded-button"
                      onClick={() =>
                        updateStatus(
                          student.id,
                          "Boarded"
                        )
                      }
                    >
                      Mark Boarded
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="driver-students-empty">
              <div className="driver-students-empty-icon">
                <Search size={27} />
              </div>

              <h3>No students found</h3>

              <p>
                Try changing your search or selected filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Route Reminder */}
      <section className="driver-route-reminder">
        <div className="driver-route-reminder-icon">
          <MapPin size={21} />
        </div>

        <div>
          <span>Next Pickup</span>

          <h3>University Road</h3>

          <p>
            Expected at 08:32 AM · 2 students waiting
          </p>
        </div>

        <div className="driver-route-reminder-time">
          <Clock3 size={17} />
          08:32 AM
        </div>
      </section>

      {/* Safety Notice */}
      <div className="driver-safety-notice">
        <div className="driver-safety-icon">
          <ShieldCheck size={21} />
        </div>

        <div>
          <strong>Verify every student's boarding status</strong>

          <p>
            Confirm that each student is safely boarded before
            continuing to the next pickup point.
          </p>
        </div>

        <CheckCircle2 size={19} />
      </div>
    </div>
  );
};

export default AssignedStudents;