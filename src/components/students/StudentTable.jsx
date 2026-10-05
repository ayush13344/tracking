import {
  BusFront,
  Edit3,
  MapPin,
  MoreHorizontal,
  Search,
  Trash2,
  UserRound,
} from "lucide-react";

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    className: "8-A",
    parent: "Rakesh Sharma",
    pickup: "Green Park",
    bus: "BUS-102",
    status: "Active",
  },
  {
    id: 2,
    name: "Ananya Verma",
    className: "7-B",
    parent: "Neha Verma",
    pickup: "City Center",
    bus: "BUS-105",
    status: "Active",
  },
  {
    id: 3,
    name: "Vivaan Gupta",
    className: "9-A",
    parent: "Amit Gupta",
    pickup: "Thatipur",
    bus: "BUS-101",
    status: "Active",
  },
  {
    id: 4,
    name: "Diya Jain",
    className: "6-C",
    parent: "Pooja Jain",
    pickup: "Lashkar",
    bus: "BUS-103",
    status: "Active",
  },
  {
    id: 5,
    name: "Aditya Singh",
    className: "10-B",
    parent: "Rajesh Singh",
    pickup: "Morar",
    bus: "BUS-104",
    status: "Pending",
  },
  {
    id: 6,
    name: "Myra Khan",
    className: "5-A",
    parent: "Sana Khan",
    pickup: "University Road",
    bus: "BUS-106",
    status: "Active",
  },
];

const StudentTable = () => {
  return (
    <div className="student-table-wrapper">
      <div className="student-table-toolbar">
        <div className="student-table-heading">
          <div>
            <span>Student Management</span>
            <h2>All Students</h2>
          </div>

          <span className="student-count">
            {students.length} Students
          </span>
        </div>

        <div className="student-search">
          <Search size={17} />
          <input type="text" placeholder="Search students..." />
        </div>
      </div>

      <div className="student-table-container">
        <table className="student-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Class</th>
              <th>Parent</th>
              <th>Pickup Point</th>
              <th>Bus</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>
                  <div className="table-student">
                    <div className="table-student-avatar">
                      <UserRound size={19} />
                    </div>

                    <div>
                      <strong>{student.name}</strong>
                      <span>Student ID: STU-{1000 + student.id}</span>
                    </div>
                  </div>
                </td>

                <td>
                  <span className="class-badge">
                    {student.className}
                  </span>
                </td>

                <td>{student.parent}</td>

                <td>
                  <div className="table-location">
                    <MapPin size={15} />
                    {student.pickup}
                  </div>
                </td>

                <td>
                  <div className="table-bus">
                    <BusFront size={15} />
                    {student.bus}
                  </div>
                </td>

                <td>
                  <span
                    className={`table-status ${
                      student.status === "Active"
                        ? "table-status-active"
                        : "table-status-pending"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>

                <td>
                  <div className="table-actions">
                    <button type="button" title="Edit student">
                      <Edit3 size={16} />
                    </button>

                    <button type="button" title="More options">
                      <MoreHorizontal size={17} />
                    </button>

                    <button type="button" title="Delete student">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;