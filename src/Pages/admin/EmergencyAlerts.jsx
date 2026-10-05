import { useState } from "react";
import {
  AlertOctagon,
  AlertTriangle,
  BusFront,
  CheckCircle2,
  Clock3,
  Eye,
  MapPin,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  ShieldAlert,
  UserRound,
  Users,
  XCircle,
} from "lucide-react";

import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import Input from "../../components/ui/Input";

const alerts = [
  {
    id: 1,
    title: "Bus Delay Reported",
    message:
      "BUS-102 is delayed due to heavy traffic near City Center.",
    severity: "Medium",
    bus: "BUS-102",
    route: "Route A",
    location: "City Center",
    reportedBy: "Rahul Sharma",
    time: "8 min ago",
    status: "Active",
  },
  {
    id: 2,
    title: "Route Obstruction",
    message:
      "Temporary road blockage reported on Route C.",
    severity: "High",
    bus: "BUS-101",
    route: "Route C",
    location: "Thatipur",
    reportedBy: "Suresh Gupta",
    time: "22 min ago",
    status: "Active",
  },
  {
    id: 3,
    title: "Student Medical Assistance",
    message:
      "A student requested medical assistance during the journey.",
    severity: "Critical",
    bus: "BUS-105",
    route: "Route B",
    location: "Green Park",
    reportedBy: "Amit Verma",
    time: "45 min ago",
    status: "Resolved",
  },
  {
    id: 4,
    title: "Bus Mechanical Warning",
    message:
      "Vehicle warning detected. Bus moved safely to the depot.",
    severity: "High",
    bus: "BUS-107",
    route: "Not Assigned",
    location: "Central Depot",
    reportedBy: "Fleet Manager",
    time: "1 hour ago",
    status: "Resolved",
  },
];

const EmergencyAlerts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    severity: "",
    bus: "",
    location: "",
    message: "",
  });

  const activeAlerts = alerts.filter(
    (alert) => alert.status === "Active"
  );

  const criticalAlerts = alerts.filter(
    (alert) => alert.severity === "Critical"
  );

  const resolvedAlerts = alerts.filter(
    (alert) => alert.status === "Resolved"
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("New Emergency Alert:", formData);

    setFormData({
      title: "",
      severity: "",
      bus: "",
      location: "",
      message: "",
    });

    setIsModalOpen(false);
  };

  return (
    <div className="manage-page emergency-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Safety Center</span>

          <h1>Emergency Alerts</h1>

          <p>
            Monitor, manage and respond to transportation safety
            alerts and emergency situations.
          </p>
        </div>

        <div className="page-header-actions">
          <Button
            variant="secondary"
            icon={Phone}
          >
            Emergency Contacts
          </Button>

          <Button
            variant="primary"
            icon={Plus}
            onClick={() => setIsModalOpen(true)}
          >
            Create Alert
          </Button>
        </div>
      </div>

      {/* Emergency Warning Banner */}
      <section className="emergency-warning-banner">
        <div className="emergency-warning-icon">
          <ShieldAlert size={27} />
        </div>

        <div className="emergency-warning-content">
          <span>Safety Monitoring</span>

          <h2>
            {activeAlerts.length} active alert
            {activeAlerts.length !== 1 ? "s" : ""}
          </h2>

          <p>
            Review active transportation alerts and take
            appropriate action immediately.
          </p>
        </div>

        <div className="emergency-warning-action">
          <button type="button">
            View Active Alerts
          </button>
        </div>
      </section>

      {/* Statistics */}
      <div className="management-stats">
        <div className="management-stat-card management-stat-red">
          <div className="management-stat-icon">
            <AlertTriangle size={21} />
          </div>

          <div>
            <span>Active Alerts</span>
            <strong>{activeAlerts.length}</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-orange">
          <div className="management-stat-icon">
            <AlertOctagon size={21} />
          </div>

          <div>
            <span>Critical Alerts</span>
            <strong>{criticalAlerts.length}</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-blue">
          <div className="management-stat-icon">
            <Clock3 size={21} />
          </div>

          <div>
            <span>Alerts Today</span>
            <strong>{alerts.length}</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-mint">
          <div className="management-stat-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Resolved</span>
            <strong>{resolvedAlerts.length}</strong>
          </div>
        </div>
      </div>

      {/* Active Alerts */}
      <section className="emergency-alerts-grid">
        {activeAlerts.map((alert) => (
          <div
            className={`emergency-alert-card ${
              alert.severity === "Critical"
                ? "alert-critical"
                : alert.severity === "High"
                ? "alert-high"
                : "alert-medium"
            }`}
            key={alert.id}
          >
            <div className="emergency-alert-top">
              <div className="emergency-alert-icon">
                {alert.severity === "Critical" ? (
                  <AlertOctagon size={21} />
                ) : (
                  <AlertTriangle size={21} />
                )}
              </div>

              <span
                className={`severity-badge severity-${alert.severity.toLowerCase()}`}
              >
                {alert.severity}
              </span>

              <span className="active-alert-dot">
                <span></span>
                Active
              </span>
            </div>

            <h3>{alert.title}</h3>

            <p>{alert.message}</p>

            <div className="emergency-alert-details">
              <div>
                <BusFront size={15} />
                <span>{alert.bus}</span>
              </div>

              <div>
                <MapPin size={15} />
                <span>{alert.location}</span>
              </div>

              <div>
                <Clock3 size={15} />
                <span>{alert.time}</span>
              </div>
            </div>

            <div className="emergency-alert-actions">
              <button
                type="button"
                className="alert-view-button"
              >
                <Eye size={16} />
                View Details
              </button>

              <button
                type="button"
                className="alert-resolve-button"
              >
                <CheckCircle2 size={16} />
                Resolve
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Alert Table */}
      <section className="management-table-panel">
        <div className="management-table-toolbar">
          <div>
            <span>Safety Center</span>
            <h2>Alert History</h2>
          </div>

          <div className="management-search">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search alerts..."
            />
          </div>
        </div>

        <div className="management-table-container">
          <table className="management-table emergency-table">
            <thead>
              <tr>
                <th>Alert</th>
                <th>Severity</th>
                <th>Bus</th>
                <th>Route</th>
                <th>Location</th>
                <th>Reported By</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {alerts.map((alert) => (
                <tr key={alert.id}>
                  <td>
                    <div className="emergency-table-alert">
                      <div
                        className={`emergency-table-icon ${
                          alert.severity === "Critical"
                            ? "table-alert-critical"
                            : alert.severity === "High"
                            ? "table-alert-high"
                            : "table-alert-medium"
                        }`}
                      >
                        <AlertTriangle size={17} />
                      </div>

                      <div>
                        <strong>{alert.title}</strong>

                        <span>
                          Alert ID: ALT-{1000 + alert.id}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span
                      className={`severity-badge severity-${alert.severity.toLowerCase()}`}
                    >
                      {alert.severity}
                    </span>
                  </td>

                  <td>
                    <div className="table-bus">
                      <BusFront size={15} />
                      {alert.bus}
                    </div>
                  </td>

                  <td>
                    <span className="route-name">
                      {alert.route}
                    </span>
                  </td>

                  <td>
                    <div className="table-location">
                      <MapPin size={15} />
                      {alert.location}
                    </div>
                  </td>

                  <td>
                    <div className="table-person-small">
                      <UserRound size={15} />
                      {alert.reportedBy}
                    </div>
                  </td>

                  <td>
                    <div className="route-table-value">
                      <Clock3 size={14} />
                      {alert.time}
                    </div>
                  </td>

                  <td>
                    <span
                      className={`alert-status ${
                        alert.status === "Active"
                          ? "alert-status-active"
                          : "alert-status-resolved"
                      }`}
                    >
                      {alert.status === "Active" ? (
                        <AlertTriangle size={13} />
                      ) : (
                        <CheckCircle2 size={13} />
                      )}

                      {alert.status}
                    </span>
                  </td>

                  <td>
                    <div className="table-actions">
                      <button
                        type="button"
                        title="View alert"
                      >
                        <Eye size={16} />
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

      {/* Emergency Contacts */}
      <section className="emergency-contacts-panel">
        <div className="panel-header">
          <div>
            <span>Quick Response</span>
            <h2>Emergency Contacts</h2>
          </div>

          <Phone size={20} />
        </div>

        <div className="emergency-contact-grid">
          <div className="emergency-contact-card">
            <div className="emergency-contact-icon">
              <ShieldAlert size={20} />
            </div>

            <div>
              <span>School Emergency Desk</span>
              <strong>+91 1800 123 4567</strong>
            </div>

            <button type="button">
              <Phone size={16} />
            </button>
          </div>

          <div className="emergency-contact-card">
            <div className="emergency-contact-icon">
              <BusFront size={20} />
            </div>

            <div>
              <span>Transport Manager</span>
              <strong>+91 98765 00001</strong>
            </div>

            <button type="button">
              <Phone size={16} />
            </button>
          </div>

          <div className="emergency-contact-card">
            <div className="emergency-contact-icon">
              <Users size={20} />
            </div>

            <div>
              <span>School Administration</span>
              <strong>+91 98765 00002</strong>
            </div>

            <button type="button">
              <Phone size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Create Alert Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create Emergency Alert"
        subtitle="Create an alert to notify the transportation team."
        size="large"
      >
        <form
          className="emergency-form"
          onSubmit={handleSubmit}
        >
          <Input
            label="Alert Title"
            name="title"
            placeholder="Example: Bus Delay Reported"
            icon={AlertTriangle}
            value={formData.title}
            onChange={handleChange}
            required
          />

          <div className="form-field">
            <label htmlFor="alert-severity">
              Severity
            </label>

            <select
              id="alert-severity"
              name="severity"
              value={formData.severity}
              onChange={handleChange}
              required
            >
              <option value="">Select severity</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="alert-bus">
              Affected Bus
            </label>

            <select
              id="alert-bus"
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
              <option value="BUS-107">BUS-107</option>
            </select>
          </div>

          <Input
            label="Location"
            name="location"
            placeholder="Enter current location"
            icon={MapPin}
            value={formData.location}
            onChange={handleChange}
            required
          />

          <div className="form-field full-width">
            <label htmlFor="alert-message">
              Alert Message
            </label>

            <textarea
              id="alert-message"
              name="message"
              placeholder="Describe the emergency or issue..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="emergency-form-warning">
            <AlertTriangle size={18} />

            <div>
              <strong>Important</strong>

              <span>
                Critical alerts should only be created for
                situations requiring immediate attention.
              </span>
            </div>
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
              icon={AlertTriangle}
            >
              Create Alert
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EmergencyAlerts;