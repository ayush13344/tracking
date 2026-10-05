import { useState } from "react";
import {
  Download,
  Plus,
  UserPlus,
  Users,
} from "lucide-react";

import StudentTable from "../../components/students/StudentTable";
import StudentForm from "../../components/students/StudentForm";
import Modal from "../../components/ui/Modal";
import Button from "../../components/ui/Button";

const ManageStudents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddStudent = (studentData) => {
    console.log("New Student:", studentData);

    setIsModalOpen(false);
  };

  return (
    <div className="manage-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Management</span>

          <h1>Students</h1>

          <p>
            Manage student profiles, transportation assignments,
            and pickup details.
          </p>
        </div>

        <div className="page-header-actions">
          <Button
            variant="secondary"
            icon={Download}
          >
            Export
          </Button>

          <Button
            variant="primary"
            icon={UserPlus}
            onClick={() => setIsModalOpen(true)}
          >
            Add Student
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="management-stats">
        <div className="management-stat-card management-stat-purple">
          <div className="management-stat-icon">
            <Users size={21} />
          </div>

          <div>
            <span>Total Students</span>
            <strong>248</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-blue">
          <div className="management-stat-icon">
            <Users size={21} />
          </div>

          <div>
            <span>Active Students</span>
            <strong>241</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-orange">
          <div className="management-stat-icon">
            <UserPlus size={21} />
          </div>

          <div>
            <span>New This Month</span>
            <strong>12</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-mint">
          <div className="management-stat-icon">
            <Users size={21} />
          </div>

          <div>
            <span>Pending Assignment</span>
            <strong>7</strong>
          </div>
        </div>
      </div>

      {/* Student Table */}
      <section className="management-table-panel">
        <StudentTable />
      </section>

      {/* Add Student Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Student"
        subtitle="Enter the student's information and transportation details."
        size="large"
      >
        <StudentForm onSubmit={handleAddStudent} />
      </Modal>
    </div>
  );
};

export default ManageStudents;