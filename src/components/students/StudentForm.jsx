import { BusFront, Mail, MapPin, Phone, UserRound } from "lucide-react";

const StudentForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const studentData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      className: formData.get("className"),
      pickupPoint: formData.get("pickupPoint"),
      busNumber: formData.get("busNumber"),
      parentName: formData.get("parentName"),
    };

    if (onSubmit) {
      onSubmit(studentData);
    } else {
      console.log("Student Data:", studentData);
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div className="form-section-heading">
        <div className="form-section-icon">
          <UserRound size={20} />
        </div>

        <div>
          <h3>Student Information</h3>
          <p>Add the student's basic details</p>
        </div>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="student-name">Student Name</label>

          <div className="form-input-wrapper">
            <UserRound size={17} />
            <input
              id="student-name"
              name="name"
              type="text"
              placeholder="Enter student name"
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="student-email">Email Address</label>

          <div className="form-input-wrapper">
            <Mail size={17} />
            <input
              id="student-email"
              name="email"
              type="email"
              placeholder="student@example.com"
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="student-phone">Phone Number</label>

          <div className="form-input-wrapper">
            <Phone size={17} />
            <input
              id="student-phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="student-class">Class</label>

          <select id="student-class" name="className" required defaultValue="">
            <option value="" disabled>
              Select class
            </option>
            <option value="5-A">Class 5 - A</option>
            <option value="5-B">Class 5 - B</option>
            <option value="6-A">Class 6 - A</option>
            <option value="6-B">Class 6 - B</option>
            <option value="7-A">Class 7 - A</option>
            <option value="7-B">Class 7 - B</option>
            <option value="8-A">Class 8 - A</option>
            <option value="8-B">Class 8 - B</option>
            <option value="9-A">Class 9 - A</option>
            <option value="9-B">Class 9 - B</option>
            <option value="10-A">Class 10 - A</option>
            <option value="10-B">Class 10 - B</option>
          </select>
        </div>
      </div>

      <div className="form-section-heading form-section-spacing">
        <div className="form-section-icon form-section-blue">
          <BusFront size={20} />
        </div>

        <div>
          <h3>Transportation Details</h3>
          <p>Assign the student to a bus and pickup point</p>
        </div>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="pickup-point">Pickup Point</label>

          <div className="form-input-wrapper">
            <MapPin size={17} />
            <input
              id="pickup-point"
              name="pickupPoint"
              type="text"
              placeholder="Enter pickup point"
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="bus-number">Bus Number</label>

          <select id="bus-number" name="busNumber" defaultValue="">
            <option value="" disabled>
              Select bus
            </option>
            <option value="BUS-101">BUS-101</option>
            <option value="BUS-102">BUS-102</option>
            <option value="BUS-103">BUS-103</option>
            <option value="BUS-104">BUS-104</option>
            <option value="BUS-105">BUS-105</option>
            <option value="BUS-106">BUS-106</option>
          </select>
        </div>

        <div className="form-field full-width">
          <label htmlFor="parent-name">Parent / Guardian Name</label>

          <div className="form-input-wrapper">
            <UserRound size={17} />
            <input
              id="parent-name"
              name="parentName"
              type="text"
              placeholder="Enter parent or guardian name"
              required
            />
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button type="button" className="form-cancel-button">
          Cancel
        </button>

        <button type="submit" className="form-submit-button">
          <UserRound size={17} />
          Add Student
        </button>
      </div>
    </form>
  );
};

export default StudentForm;