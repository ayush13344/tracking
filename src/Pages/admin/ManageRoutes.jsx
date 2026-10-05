import { useState } from "react";
import {
  BusFront,
  CheckCircle2,
  Clock3,
  Edit3,
  MapPin,
  MoreHorizontal,
  Navigation,
  Plus,
  Route as RouteIcon,
  Search,
  Users,
} from "lucide-react";

import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import Input from "../../components/ui/Input";

const routes = [
  {
    id: 1,
    name: "Route A",
    startPoint: "Central Bus Depot",
    endPoint: "EduTrack Public School",
    stops: 8,
    distance: "12.4 km",
    duration: "38 min",
    bus: "BUS-102",
    driver: "Rahul Sharma",
    students: 32,
    status: "Active",
  },
  {
    id: 2,
    name: "Route B",
    startPoint: "Green Park",
    endPoint: "EduTrack Public School",
    stops: 7,
    distance: "10.8 km",
    duration: "34 min",
    bus: "BUS-105",
    driver: "Amit Verma",
    students: 31,
    status: "Active",
  },
  {
    id: 3,
    name: "Route C",
    startPoint: "Thatipur",
    endPoint: "EduTrack Public School",
    stops: 9,
    distance: "14.2 km",
    duration: "42 min",
    bus: "BUS-101",
    driver: "Suresh Gupta",
    students: 34,
    status: "Active",
  },
  {
    id: 4,
    name: "Route D",
    startPoint: "Lashkar",
    endPoint: "EduTrack Public School",
    stops: 6,
    distance: "9.6 km",
    duration: "29 min",
    bus: "BUS-103",
    driver: "Vikram Singh",
    students: 29,
    status: "Active",
  },
  {
    id: 5,
    name: "Route E",
    startPoint: "Morar",
    endPoint: "EduTrack Public School",
    stops: 10,
    distance: "16.5 km",
    duration: "48 min",
    bus: "BUS-104",
    driver: "Manoj Yadav",
    students: 36,
    status: "Active",
  },
  {
    id: 6,
    name: "Route F",
    startPoint: "University Road",
    endPoint: "EduTrack Public School",
    stops: 7,
    distance: "11.3 km",
    duration: "35 min",
    bus: "BUS-106",
    driver: "Arun Khan",
    students: 28,
    status: "Inactive",
  },
];

const ManageRoutes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    startPoint: "",
    endPoint: "",
    stops: "",
    distance: "",
    duration: "",
    bus: "",
    driver: "",
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

    console.log("New Route:", formData);

    setFormData({
      name: "",
      startPoint: "",
      endPoint: "",
      stops: "",
      distance: "",
      duration: "",
      bus: "",
      driver: "",
    });

    setIsModalOpen(false);
  };

  return (
    <div className="manage-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Transportation</span>

          <h1>Routes</h1>

          <p>
            Create and manage school transportation routes,
            stops and assignments.
          </p>
        </div>

        <div className="page-header-actions">
          <Button
            variant="secondary"
            icon={Navigation}
          >
            Route Map
          </Button>

          <Button
            variant="primary"
            icon={Plus}
            onClick={() => setIsModalOpen(true)}
          >
            Add Route
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="management-stats">
        <div className="management-stat-card management-stat-purple">
          <div className="management-stat-icon">
            <RouteIcon size={21} />
          </div>

          <div>
            <span>Total Routes</span>
            <strong>24</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-blue">
          <div className="management-stat-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Active Routes</span>
            <strong>22</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-mint">
          <div className="management-stat-icon">
            <MapPin size={21} />
          </div>

          <div>
            <span>Total Stops</span>
            <strong>186</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-orange">
          <div className="management-stat-icon">
            <Users size={21} />
          </div>

          <div>
            <span>Students Covered</span>
            <strong>248</strong>
          </div>
        </div>
      </div>

      {/* Route Cards */}
      <section className="route-cards-grid">
        {routes.slice(0, 3).map((route) => (
          <div className="route-summary-card" key={route.id}>
            <div className="route-summary-header">
              <div className="route-summary-icon">
                <RouteIcon size={21} />
              </div>

              <div>
                <span>{route.name}</span>
                <h3>{route.distance}</h3>
              </div>

              <span className="route-active-badge">
                <span></span>
                Active
              </span>
            </div>

            <div className="route-summary-points">
              <div>
                <span className="route-point-marker start"></span>

                <div>
                  <small>Start</small>
                  <strong>{route.startPoint}</strong>
                </div>
              </div>

              <div className="route-summary-line"></div>

              <div>
                <span className="route-point-marker end"></span>

                <div>
                  <small>Destination</small>
                  <strong>{route.endPoint}</strong>
                </div>
              </div>
            </div>

            <div className="route-summary-footer">
              <span>
                <MapPin size={14} />
                {route.stops} Stops
              </span>

              <span>
                <Clock3 size={14} />
                {route.duration}
              </span>

              <span>
                <Users size={14} />
                {route.students}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Routes Table */}
      <section className="management-table-panel">
        <div className="management-table-toolbar">
          <div>
            <span>Route Management</span>
            <h2>All Routes</h2>
          </div>

          <div className="management-search">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search routes..."
            />
          </div>
        </div>

        <div className="management-table-container">
          <table className="management-table route-table">
            <thead>
              <tr>
                <th>Route</th>
                <th>Stops</th>
                <th>Distance</th>
                <th>Duration</th>
                <th>Bus</th>
                <th>Driver</th>
                <th>Students</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {routes.map((route) => (
                <tr key={route.id}>
                  <td>
                    <div className="route-table-name">
                      <div className="route-table-icon">
                        <RouteIcon size={17} />
                      </div>

                      <div>
                        <strong>{route.name}</strong>
                        <span>
                          {route.startPoint} → {route.endPoint}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="route-table-value">
                      <MapPin size={14} />
                      {route.stops}
                    </div>
                  </td>

                  <td>{route.distance}</td>

                  <td>
                    <div className="route-table-value">
                      <Clock3 size={14} />
                      {route.duration}
                    </div>
                  </td>

                  <td>
                    <div className="table-bus">
                      <BusFront size={15} />
                      {route.bus}
                    </div>
                  </td>

                  <td>{route.driver}</td>

                  <td>
                    <div className="route-table-value">
                      <Users size={14} />
                      {route.students}
                    </div>
                  </td>

                  <td>
                    <span
                      className={`table-status ${
                        route.status === "Active"
                          ? "table-status-active"
                          : "table-status-inactive"
                      }`}
                    >
                      {route.status}
                    </span>
                  </td>

                  <td>
                    <div className="table-actions">
                      <button
                        type="button"
                        title="Edit route"
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

      {/* Add Route Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Route"
        subtitle="Create a route and assign its bus and driver."
        size="large"
      >
        <form
          className="route-form"
          onSubmit={handleSubmit}
        >
          <Input
            label="Route Name"
            name="name"
            placeholder="Example: Route G"
            icon={RouteIcon}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Input
            label="Starting Point"
            name="startPoint"
            placeholder="Enter starting point"
            icon={MapPin}
            value={formData.startPoint}
            onChange={handleChange}
            required
          />

          <Input
            label="Destination"
            name="endPoint"
            placeholder="Enter destination"
            icon={MapPin}
            value={formData.endPoint}
            onChange={handleChange}
            required
          />

          <Input
            label="Number of Stops"
            name="stops"
            type="number"
            placeholder="Example: 8"
            icon={MapPin}
            value={formData.stops}
            onChange={handleChange}
            required
          />

          <Input
            label="Distance"
            name="distance"
            placeholder="Example: 12.5 km"
            icon={Navigation}
            value={formData.distance}
            onChange={handleChange}
            required
          />

          <Input
            label="Estimated Duration"
            name="duration"
            placeholder="Example: 40 min"
            icon={Clock3}
            value={formData.duration}
            onChange={handleChange}
            required
          />

          <div className="form-field">
            <label htmlFor="route-bus">Assign Bus</label>

            <select
              id="route-bus"
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
            <label htmlFor="route-driver">Assign Driver</label>

            <select
              id="route-driver"
              name="driver"
              value={formData.driver}
              onChange={handleChange}
              required
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
              Add Route
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ManageRoutes;