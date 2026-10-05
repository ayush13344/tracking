import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Edit3,
  MoreHorizontal,
  Plus,
  Search,
  Sparkles,
  Trash2,
} from "lucide-react";

import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import Input from "../../components/ui/Input";

const holidays = [
  {
    id: 1,
    name: "Diwali Holiday",
    date: "October 20, 2026",
    day: "Tuesday",
    type: "Festival",
    affectedRoutes: "All Routes",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "Govardhan Puja",
    date: "October 21, 2026",
    day: "Wednesday",
    type: "Festival",
    affectedRoutes: "All Routes",
    status: "Upcoming",
  },
  {
    id: 3,
    name: "Children's Day",
    date: "November 14, 2026",
    day: "Saturday",
    type: "School Event",
    affectedRoutes: "All Routes",
    status: "Upcoming",
  },
  {
    id: 4,
    name: "Christmas Holiday",
    date: "December 25, 2026",
    day: "Friday",
    type: "Festival",
    affectedRoutes: "All Routes",
    status: "Upcoming",
  },
  {
    id: 5,
    name: "Republic Day",
    date: "January 26, 2027",
    day: "Tuesday",
    type: "National Holiday",
    affectedRoutes: "All Routes",
    status: "Upcoming",
  },
  {
    id: 6,
    name: "Holi Holiday",
    date: "March 4, 2027",
    day: "Thursday",
    type: "Festival",
    affectedRoutes: "All Routes",
    status: "Upcoming",
  },
];

const ManageHolidays = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    type: "",
    description: "",
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

    console.log("New Holiday:", formData);

    setFormData({
      name: "",
      date: "",
      type: "",
      description: "",
    });

    setIsModalOpen(false);
  };

  return (
    <div className="manage-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Management</span>

          <h1>Holidays</h1>

          <p>
            Manage school holidays and keep transportation schedules
            up to date.
          </p>
        </div>

        <div className="page-header-actions">
          <Button
            variant="secondary"
            icon={CalendarDays}
          >
            Academic Calendar
          </Button>

          <Button
            variant="primary"
            icon={Plus}
            onClick={() => setIsModalOpen(true)}
          >
            Add Holiday
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="management-stats">
        <div className="management-stat-card management-stat-purple">
          <div className="management-stat-icon">
            <CalendarDays size={21} />
          </div>

          <div>
            <span>Total Holidays</span>
            <strong>18</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-blue">
          <div className="management-stat-icon">
            <CalendarDays size={21} />
          </div>

          <div>
            <span>Upcoming</span>
            <strong>12</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-mint">
          <div className="management-stat-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Completed</span>
            <strong>6</strong>
          </div>
        </div>

        <div className="management-stat-card management-stat-orange">
          <div className="management-stat-icon">
            <Sparkles size={21} />
          </div>

          <div>
            <span>Next Holiday</span>
            <strong>15 Days</strong>
          </div>
        </div>
      </div>

      {/* Upcoming Holiday Highlight */}
      <section className="holiday-highlight">
        <div className="holiday-highlight-icon">
          <CalendarDays size={28} />
        </div>

        <div className="holiday-highlight-content">
          <span>Next Upcoming Holiday</span>
          <h2>Diwali Holiday</h2>

          <p>
            Tuesday, October 20, 2026 · Transportation services
            will remain suspended.
          </p>
        </div>

        <div className="holiday-highlight-date">
          <strong>20</strong>
          <span>OCT</span>
        </div>
      </section>

      {/* Holiday List */}
      <section className="management-table-panel">
        <div className="management-table-toolbar">
          <div>
            <span>Academic Calendar</span>
            <h2>Holiday Schedule</h2>
          </div>

          <div className="management-search">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search holidays..."
            />
          </div>
        </div>

        <div className="management-table-container">
          <table className="management-table holiday-table">
            <thead>
              <tr>
                <th>Holiday</th>
                <th>Date</th>
                <th>Day</th>
                <th>Type</th>
                <th>Transportation</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {holidays.map((holiday) => (
                <tr key={holiday.id}>
                  <td>
                    <div className="holiday-table-name">
                      <div className="holiday-table-icon">
                        <CalendarDays size={18} />
                      </div>

                      <div>
                        <strong>{holiday.name}</strong>
                        <span>
                          Holiday ID: HOL-{1000 + holiday.id}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <strong className="holiday-date">
                      {holiday.date}
                    </strong>
                  </td>

                  <td>{holiday.day}</td>

                  <td>
                    <span className="holiday-type-badge">
                      {holiday.type}
                    </span>
                  </td>

                  <td>
                    <span className="transport-suspended">
                      Transportation Suspended
                    </span>
                  </td>

                  <td>
                    <span className="table-status table-status-active">
                      {holiday.status}
                    </span>
                  </td>

                  <td>
                    <div className="table-actions">
                      <button
                        type="button"
                        title="Edit holiday"
                      >
                        <Edit3 size={16} />
                      </button>

                      <button
                        type="button"
                        title="More options"
                      >
                        <MoreHorizontal size={17} />
                      </button>

                      <button
                        type="button"
                        title="Delete holiday"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Add Holiday Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Holiday"
        subtitle="Add a holiday to the school transportation calendar."
        size="medium"
      >
        <form
          className="holiday-form"
          onSubmit={handleSubmit}
        >
          <Input
            label="Holiday Name"
            name="name"
            placeholder="Example: Diwali Holiday"
            icon={CalendarDays}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <div className="form-field">
            <label htmlFor="holiday-date">Holiday Date</label>

            <input
              id="holiday-date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="holiday-type">Holiday Type</label>

            <select
              id="holiday-type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              <option value="Festival">Festival</option>
              <option value="National Holiday">
                National Holiday
              </option>
              <option value="School Event">
                School Event
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="holiday-description">
              Description
            </label>

            <textarea
              id="holiday-description"
              name="description"
              placeholder="Add a short description..."
              rows="4"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="holiday-notice">
            <CalendarDays size={17} />

            <span>
              Transportation services will automatically be
              marked as suspended for this holiday.
            </span>
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
              Add Holiday
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ManageHolidays;