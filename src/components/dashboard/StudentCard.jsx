import { Bus, MapPin, UserRound } from "lucide-react";

const students = [
  {
    name: "Aarav Sharma",
    className: "Class 8 - A",
    pickupPoint: "Green Park",
    busNumber: "BUS-102",
    status: "On Route",
  },
  {
    name: "Ananya Verma",
    className: "Class 7 - B",
    pickupPoint: "City Center",
    busNumber: "BUS-105",
    status: "Boarded",
  },
  {
    name: "Vivaan Gupta",
    className: "Class 9 - A",
    pickupPoint: "Thatipur",
    busNumber: "BUS-101",
    status: "On Route",
  },
  {
    name: "Diya Jain",
    className: "Class 6 - C",
    pickupPoint: "Lashkar",
    busNumber: "BUS-103",
    status: "Boarded",
  },
  {
    name: "Aditya Singh",
    className: "Class 10 - B",
    pickupPoint: "Morar",
    busNumber: "BUS-104",
    status: "Waiting",
  },
  {
    name: "Myra Khan",
    className: "Class 5 - A",
    pickupPoint: "University Road",
    busNumber: "BUS-106",
    status: "On Route",
  },
];

const StudentCard = ({
  name,
  className,
  pickupPoint,
  busNumber,
  status,
}) => {
  return (
    <div className="student-card">
      <div className="student-card-header">
        <div className="student-avatar">
          <UserRound size={24} />
        </div>

        <div className="student-card-title">
          <h3>{name}</h3>
          <p>{className}</p>
        </div>

        <span className="student-status">{status}</span>
      </div>

      <div className="student-card-details">
        <div className="student-detail">
          <MapPin size={17} />
          <div>
            <span>Pickup Point</span>
            <strong>{pickupPoint}</strong>
          </div>
        </div>

        <div className="student-detail">
          <Bus size={17} />
          <div>
            <span>Bus</span>
            <strong>{busNumber}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export { students };
export default StudentCard;