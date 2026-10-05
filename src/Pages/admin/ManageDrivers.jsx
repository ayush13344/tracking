import { useState } from "react";
import {
  BusFront,
  CheckCircle2,
  Download,
  Edit3,
  Mail,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  UserRound,
  Users,
  XCircle,
} from "lucide-react";

import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import Input from "../../components/ui/Input";

const drivers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 12340",
    bus: "BUS-102",
    route: "Route A",
    experience: "6 Years",
    license: "Valid",
    status: "Active",
  },
  {
    id: 2,
    name: "Amit Verma",
    email: "amit.verma@example.com",
    phone: "+91 98234 56120",
    bus: "BUS-105",
    route: "Route B",
    experience: "8 Years",
    license: "Valid",
    status: "Active",
  },
  {
    id: 3,
    name: "Suresh Gupta",
    email: "suresh.gupta@example.com",
    phone: "+91 97654 21890",
    bus: "BUS-101",
    route: "Route C",
    experience: "5 Years",
    license: "Valid",
    status: "Active",
  },
  {
    id: 4,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    phone: "+91 98123 45670",
    bus: "BUS-103",
    route: "Route D",
    experience: "7 Years",
    license: "Expiring Soon",
    status: "Active",
  },
  {
    id: 5,
    name: "Manoj Yadav",
    email: "manoj.yadav@example.com",
    phone: "+91 97531 86420",
    bus: "BUS-104",
    route: "Route E",
    experience: "4 Years",
    license: "Valid",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Arun Khan",
    email: "arun.khan@example.com",
    phone: "+91 98987 12345",
    bus: "BUS-106",
    route: "Route F",
    experience: "9 Years",
    license: "Valid",
    status: "Active",
  },
];

const ManageDrivers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bus: "",
    route: "",
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

    console.log("New Driver:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      bus: "",
      route: "",
    });

    setIsModalOpen(false);
  };

  return (
    <div className="manage-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Transportation</span>

          <h1>Drivers</h1>

          <p>
            Manage drivers, assigned buses, routes and license
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
            Add Driver
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
            <span>Total Drivers</span>
            <strong>24</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-mint">
          <div className="management-stat-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Active Drivers</span>
            <strong>22</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-orange">
          <div className="management-stat-icon">
            <ShieldCheck size={21} />
          </div>

          <div>
            <span>Valid Licenses</span>
            <strong>21</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-pink">
          <div className="management-stat-icon">
            <XCircle size={21} />
          </div>

          <div>
            <span>Inactive</span>
            <strong>2</strong>
          </div>
        </div>
      </div>

      {/* Driver Table */}
      <section className="management-table-panel">
        <div className="management-table-toolbar">
          <div>
            <span>Driver Management</span>
            <h2>All Drivers</h2>
          </div>

          <div className="management-search">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search drivers..."
            />
          </div>
        </div>

        <div className="management-table-container">
          <table className="management-table driver-table">
            <thead>
              <tr>
                <th>Driver</th>
                <th>Contact</th>
                <th>Assigned Bus</th>
                <th>Route</th>
                <th>Experience</th>
                <th>License</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {drivers.map((driver) => (
                <tr key={driver.id}>
                  <td>
                    <div className="table-person">
                      <div className="table-person-avatar driver-avatar">
                        <UserRound size={18} />
                      </div>

                      <div>
                        <strong>{driver.name}</strong>
                        <span>
                          Driver ID: DRV-{1000 + driver.id}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="contact-details">
                      <span>
                        <Mail size={14} />
                        {driver.email}
                      </span>

                      <span>
                        <Phone size={14} />
                        {driver.phone}
                      </span>
                    </div>
                  </td>

                  <td>
                    <div className="table-bus">
                      <BusFront size={15} />
                      {driver.bus}
                    </div>
                  </td>

                  <td>
                    <span className="route-name">
                      {driver.route}
                    </span>
                  </td>

                  <td>{driver.experience}</td>

                  <td>
                    <span
                      className={`license-status ${
                        driver.license === "Valid"
                          ? "license-valid"
                          : "license-warning"
                      }`}
                    >
                      {driver.license === "Valid" ? (
                        <CheckCircle2 size={14} />
                      ) : (
                        <ShieldCheck size={14} />
                      )}

                      {driver.license}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`table-status ${
                        driver.status === "Active"
                          ? "table-status-active"
                          : "table-status-inactive"
                      }`}
                    >
                      {driver.status}
                    </span>
                  </td>

                  <td>
                    <div className="table-actions">
                      <button
                        type="button"
                        title="Edit driver"
                      >
                        <Edit3 size={16} />
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

      {/* Add Driver Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Driver"
        subtitle="Enter driver information and transportation assignment."
        size="medium"
      >
        <form
          className="driver-form"
          onSubmit={handleSubmit}
        >
          <Input
            label="Driver Name"
            name="name"
            placeholder="Enter driver name"
            icon={UserRound}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="driver@example.com"
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

          <div className="form-field">
            <label htmlFor="driver-bus">Assigned Bus</label>

            <select
              id="driver-bus"
              name="bus"
              value={formData.bus}
              onChange={handleChange}
              required
            >
              <option value="">Select bus</option>
              <option value="BUS-101">BUS-101</option>
              <option value="BUS-102">BUS-102</option>
              <option value="BUS-103">BUS-103</option>
              <option value="BUS-104">BUS-104</option>
              <option value="BUS-105">BUS-105</option>
              <option value="BUS-106">BUS-106</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="driver-route">Assigned Route</label>

            <select
              id="driver-route"
              name="route"
              value={formData.route}
              onChange={handleChange}
              required
            >
              <option value="">Select route</option>
              <option value="Route A">Route A</option>
              <option value="Route B">Route B</option>
              <option value="Route C">Route C</option>
              <option value="Route D">Route D</option>
              <option value="Route E">Route E</option>
              <option value="Route F">Route F</option>
            </select>
          </div>

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
              Add Driver
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ManageDrivers;