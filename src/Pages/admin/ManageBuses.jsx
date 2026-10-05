import { useState } from "react";
import {
  BusFront,
  CheckCircle2,
  Download,
  Edit3,
  MapPin,
  MoreHorizontal,
  Navigation,
  Plus,
  Search,
  Settings,
  Users,
  Wrench,
  XCircle,
} from "lucide-react";

import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import Input from "../../components/ui/Input";

const buses = [
  {
    id: 1,
    number: "BUS-101",
    registration: "MP07 AB 1201",
    driver: "Suresh Gupta",
    route: "Route C",
    capacity: 40,
    students: 34,
    location: "Thatipur",
    status: "On Route",
    maintenance: "Good",
  },
  {
    id: 2,
    number: "BUS-102",
    registration: "MP07 AB 1202",
    driver: "Rahul Sharma",
    route: "Route A",
    capacity: 40,
    students: 32,
    location: "City Center",
    status: "On Route",
    maintenance: "Good",
  },
  {
    id: 3,
    number: "BUS-103",
    registration: "MP07 AB 1203",
    driver: "Vikram Singh",
    route: "Route D",
    capacity: 35,
    students: 29,
    location: "Lashkar",
    status: "On Route",
    maintenance: "Due Soon",
  },
  {
    id: 4,
    number: "BUS-104",
    registration: "MP07 AB 1204",
    driver: "Manoj Yadav",
    route: "Route E",
    capacity: 40,
    students: 36,
    location: "Morar",
    status: "Parked",
    maintenance: "Good",
  },
  {
    id: 5,
    number: "BUS-105",
    registration: "MP07 AB 1205",
    driver: "Amit Verma",
    route: "Route B",
    capacity: 35,
    students: 31,
    location: "Green Park",
    status: "On Route",
    maintenance: "Good",
  },
  {
    id: 6,
    number: "BUS-106",
    registration: "MP07 AB 1206",
    driver: "Arun Khan",
    route: "Route F",
    capacity: 40,
    students: 28,
    location: "University Road",
    status: "Parked",
    maintenance: "Good",
  },
  {
    id: 7,
    number: "BUS-107",
    registration: "MP07 AB 1207",
    driver: "Unassigned",
    route: "Not Assigned",
    capacity: 35,
    students: 0,
    location: "Depot",
    status: "Maintenance",
    maintenance: "Under Service",
  },
];

const ManageBuses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    number: "",
    registration: "",
    driver: "",
    route: "",
    capacity: "",
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

    console.log("New Bus:", formData);

    setFormData({
      number: "",
      registration: "",
      driver: "",
      route: "",
      capacity: "",
    });

    setIsModalOpen(false);
  };

  return (
    <div className="manage-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Transportation</span>

          <h1>Buses</h1>

          <p>
            Manage school buses, assignments, capacity and
            maintenance status.
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
            Add Bus
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="management-stats">
        <div className="management-stat-card management-stat-purple">
          <div className="management-stat-icon">
            <BusFront size={21} />
          </div>

          <div>
            <span>Total Buses</span>
            <strong>24</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-blue">
          <div className="management-stat-icon">
            <Navigation size={21} />
          </div>

          <div>
            <span>On Route</span>
            <strong>18</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-mint">
          <div className="management-stat-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Available</span>
            <strong>4</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-orange">
          <div className="management-stat-icon">
            <Wrench size={21} />
          </div>

          <div>
            <span>Maintenance</span>
            <strong>2</strong>
          </div>
        </div>
      </div>

      {/* Bus Overview Cards */}
      <section className="bus-overview-grid">
        <div className="bus-overview-card bus-overview-purple">
          <div className="bus-overview-top">
            <div className="bus-overview-icon">
              <BusFront size={22} />
            </div>

            <span className="overview-status overview-active">
              Active
            </span>
          </div>

          <h3>18 Buses</h3>

          <p>Currently operating on school routes</p>

          <div className="overview-progress">
            <div
              className="overview-progress-fill"
              style={{ width: "75%" }}
            ></div>
          </div>

          <span>75% of fleet</span>
        </div>

        <div className="bus-overview-card bus-overview-blue">
          <div className="bus-overview-top">
            <div className="bus-overview-icon">
              <Users size={22} />
            </div>

            <span className="overview-status overview-blue-status">
              Capacity
            </span>
          </div>

          <h3>82%</h3>

          <p>Average student occupancy</p>

          <div className="overview-progress">
            <div
              className="overview-progress-fill"
              style={{ width: "82%" }}
            ></div>
          </div>

          <span>Healthy utilization</span>
        </div>

        <div className="bus-overview-card bus-overview-orange">
          <div className="bus-overview-top">
            <div className="bus-overview-icon">
              <Wrench size={22} />
            </div>

            <span className="overview-status overview-warning">
              Attention
            </span>
          </div>

          <h3>2 Buses</h3>

          <p>Need maintenance or servicing</p>

          <div className="maintenance-info">
            <Settings size={16} />
            <span>Next service: Tomorrow</span>
          </div>
        </div>
      </section>

      {/* Bus Table */}
      <section className="management-table-panel">
        <div className="management-table-toolbar">
          <div>
            <span>Fleet Management</span>
            <h2>All Buses</h2>
          </div>

          <div className="management-search">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search buses..."
            />
          </div>
        </div>

        <div className="management-table-container">
          <table className="management-table bus-table">
            <thead>
              <tr>
                <th>Bus</th>
                <th>Driver</th>
                <th>Route</th>
                <th>Capacity</th>
                <th>Current Location</th>
                <th>Status</th>
                <th>Maintenance</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {buses.map((bus) => (
                <tr key={bus.id}>
                  <td>
                    <div className="table-bus-info">
                      <div className="table-bus-avatar">
                        <BusFront size={19} />
                      </div>

                      <div>
                        <strong>{bus.number}</strong>
                        <span>{bus.registration}</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className="bus-driver-name">
                      {bus.driver}
                    </span>
                  </td>

                  <td>
                    <span className="route-name">
                      {bus.route}
                    </span>
                  </td>

                  <td>
                    <div className="capacity-info">
                      <span>
                        {bus.students}/{bus.capacity}
                      </span>

                      <div className="capacity-bar">
                        <div
                          className="capacity-fill"
                          style={{
                            width: `${Math.min(
                              (bus.students / bus.capacity) *
                                100,
                              100
                            )}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="table-location">
                      <MapPin size={15} />
                      {bus.location}
                    </div>
                  </td>

                  <td>
                    <span
                      className={`bus-table-status ${
                        bus.status === "On Route"
                          ? "bus-status-onroute"
                          : bus.status === "Parked"
                          ? "bus-status-parked"
                          : "bus-status-maintenance"
                      }`}
                    >
                      {bus.status === "On Route" ? (
                        <Navigation size={13} />
                      ) : bus.status === "Parked" ? (
                        <CheckCircle2 size={13} />
                      ) : (
                        <Wrench size={13} />
                      )}

                      {bus.status}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`maintenance-status ${
                        bus.maintenance === "Good"
                          ? "maintenance-good"
                          : bus.maintenance === "Due Soon"
                          ? "maintenance-warning"
                          : "maintenance-danger"
                      }`}
                    >
                      {bus.maintenance === "Good" ? (
                        <CheckCircle2 size={14} />
                      ) : (
                        <Wrench size={14} />
                      )}

                      {bus.maintenance}
                    </span>
                  </td>

                  <td>
                    <div className="table-actions">
                      <button
                        type="button"
                        title="Edit bus"
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

      {/* Add Bus Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Bus"
        subtitle="Enter the bus details and assign it to a driver and route."
        size="medium"
      >
        <form
          className="bus-form"
          onSubmit={handleSubmit}
        >
          <Input
            label="Bus Number"
            name="number"
            placeholder="Example: BUS-108"
            icon={BusFront}
            value={formData.number}
            onChange={handleChange}
            required
          />

          <Input
            label="Registration Number"
            name="registration"
            placeholder="Example: MP07 AB 1208"
            icon={BusFront}
            value={formData.registration}
            onChange={handleChange}
            required
          />

          <div className="form-field">
            <label htmlFor="bus-driver">Assign Driver</label>

            <select
              id="bus-driver"
              name="driver"
              value={formData.driver}
              onChange={handleChange}
            >
              <option value="">Select driver</option>
              <option value="Rahul Sharma">Rahul Sharma</option>
              <option value="Amit Verma">Amit Verma</option>
              <option value="Suresh Gupta">Suresh Gupta</option>
              <option value="Vikram Singh">Vikram Singh</option>
              <option value="Manoj Yadav">Manoj Yadav</option>
              <option value="Arun Khan">Arun Khan</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="bus-route">Assign Route</label>

            <select
              id="bus-route"
              name="route"
              value={formData.route}
              onChange={handleChange}
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

          <Input
            label="Student Capacity"
            name="capacity"
            type="number"
            placeholder="Example: 40"
            icon={Users}
            value={formData.capacity}
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
              Add Bus
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ManageBuses;