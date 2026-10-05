import { useState } from "react";
import {
  Download,
  Mail,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  UserRound,
  Users,
} from "lucide-react";

import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import Input from "../../components/ui/Input";

const parents = [
  {
    id: 1,
    name: "Rakesh Sharma",
    email: "rakesh.sharma@example.com",
    phone: "+91 98765 43210",
    children: 1,
    childName: "Aarav Sharma",
    status: "Active",
  },
  {
    id: 2,
    name: "Neha Verma",
    email: "neha.verma@example.com",
    phone: "+91 98234 56120",
    children: 1,
    childName: "Ananya Verma",
    status: "Active",
  },
  {
    id: 3,
    name: "Amit Gupta",
    email: "amit.gupta@example.com",
    phone: "+91 97654 21890",
    children: 2,
    childName: "Vivaan Gupta",
    status: "Active",
  },
  {
    id: 4,
    name: "Pooja Jain",
    email: "pooja.jain@example.com",
    phone: "+91 98123 45670",
    children: 1,
    childName: "Diya Jain",
    status: "Active",
  },
  {
    id: 5,
    name: "Rajesh Singh",
    email: "rajesh.singh@example.com",
    phone: "+91 97531 86420",
    children: 1,
    childName: "Aditya Singh",
    status: "Pending",
  },
  {
    id: 6,
    name: "Sana Khan",
    email: "sana.khan@example.com",
    phone: "+91 98987 12345",
    children: 1,
    childName: "Myra Khan",
    status: "Active",
  },
];

const ManageParents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("New Parent:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      childName: "",
    });

    setIsModalOpen(false);
  };

  return (
    <div className="manage-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Management</span>

          <h1>Parents</h1>

          <p>
            Manage parent accounts and their connected student
            information.
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
            icon={Plus}
            onClick={() => setIsModalOpen(true)}
          >
            Add Parent
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="management-stats">
        <div className="management-stat-card management-stat-purple">
          <div className="management-stat-icon">
            <Users size={21} />
          </div>

          <div>
            <span>Total Parents</span>
            <strong>224</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-blue">
          <div className="management-stat-icon">
            <UserRound size={21} />
          </div>

          <div>
            <span>Active Accounts</span>
            <strong>218</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-mint">
          <div className="management-stat-icon">
            <Users size={21} />
          </div>

          <div>
            <span>Connected Students</span>
            <strong>248</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-orange">
          <div className="management-stat-icon">
            <UserRound size={21} />
          </div>

          <div>
            <span>Pending Accounts</span>
            <strong>6</strong>
          </div>
        </div>
      </div>

      {/* Parent Table */}
      <section className="management-table-panel">
        <div className="management-table-toolbar">
          <div>
            <span>Parent Management</span>
            <h2>All Parents</h2>
          </div>

          <div className="management-search">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search parents..."
            />
          </div>
        </div>

        <div className="management-table-container">
          <table className="management-table">
            <thead>
              <tr>
                <th>Parent</th>
                <th>Contact</th>
                <th>Child</th>
                <th>Children</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {parents.map((parent) => (
                <tr key={parent.id}>
                  <td>
                    <div className="table-person">
                      <div className="table-person-avatar">
                        <UserRound size={18} />
                      </div>

                      <div>
                        <strong>{parent.name}</strong>
                        <span>
                          Parent ID: PAR-{1000 + parent.id}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="contact-details">
                      <span>
                        <Mail size={14} />
                        {parent.email}
                      </span>

                      <span>
                        <Phone size={14} />
                        {parent.phone}
                      </span>
                    </div>
                  </td>

                  <td>
                    <span className="child-name">
                      {parent.childName}
                    </span>
                  </td>

                  <td>
                    <span className="children-count">
                      {parent.children}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`table-status ${
                        parent.status === "Active"
                          ? "table-status-active"
                          : "table-status-pending"
                      }`}
                    >
                      {parent.status}
                    </span>
                  </td>

                  <td>
                    <div className="table-actions">
                      <button
                        type="button"
                        title="Email parent"
                      >
                        <Mail size={16} />
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
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Add Parent Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Parent"
        subtitle="Create a parent account and connect it with a student."
        size="medium"
      >
        <form
          className="parent-form"
          onSubmit={handleSubmit}
        >
          <Input
            label="Parent Name"
            name="name"
            placeholder="Enter parent name"
            icon={UserRound}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="parent@example.com"
            icon={Mail}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            icon={Phone}
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <Input
            label="Child Name"
            name="childName"
            placeholder="Enter connected student's name"
            icon={UserRound}
            value={formData.childName}
            onChange={handleChange}
            required
          />

          <div className="form-actions">
            <Button
              variant="secondary"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="primary"
              icon={Plus}
            >
              Add Parent
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ManageParents;