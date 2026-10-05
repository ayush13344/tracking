import {
  Activity,
  BusFront,
  CalendarDays,
  Plus,
  Route,
  Users,
} from "lucide-react";

import StatCard from "../../components/dashboard/StatCard";
import StudentCard, {
  students,
} from "../../components/dashboard/StudentCard";
import BusStatusCard from "../../components/dashboard/BusStatusCard";
import JourneyTimeline from "../../components/journey/JourneyTimeline";
import JourneyStatus from "../../components/journey/JourneyStatus";
import NotificationCard from "../../components/notifications/NotificationCard";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Students",
      value: "248",
      subtitle: "12 new this month",
      icon: Users,
      iconClass: "purple",
      trend: "8.4%",
    },
    {
      title: "Active Buses",
      value: "18",
      subtitle: "2 buses under maintenance",
      icon: BusFront,
      iconClass: "blue",
      trend: "5.2%",
    },
    {
      title: "Active Routes",
      value: "24",
      subtitle: "All routes operational",
      icon: Route,
      iconClass: "mint",
      trend: "3.1%",
    },
    {
      title: "Today's Journeys",
      value: "36",
      subtitle: "32 completed successfully",
      icon: Activity,
      iconClass: "orange",
      trend: "12.6%",
    },
  ];

  const notifications = [
    {
      title: "Bus has started its journey",
      message:
        "BUS-102 has left the depot and is now travelling on Route A.",
      time: "5 min ago",
      type: "bus",
      read: false,
    },
    {
      title: "Journey completed",
      message:
        "BUS-104 successfully completed the morning school journey.",
      time: "18 min ago",
      type: "success",
      read: false,
    },
    {
      title: "Bus maintenance reminder",
      message:
        "BUS-107 is scheduled for maintenance tomorrow.",
      time: "1 hour ago",
      type: "warning",
      read: true,
    },
  ];

  return (
    <div className="admin-dashboard">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Overview</span>
          <h1>Good morning, Admin! 👋</h1>
          <p>
            Here's what's happening with your school transportation
            today.
          </p>
        </div>

        <div className="page-header-actions">
          <button type="button" className="dashboard-secondary-button">
            <CalendarDays size={17} />
            Today
          </button>

          <button type="button" className="dashboard-primary-button">
            <Plus size={17} />
            Add Student
          </button>
        </div>
      </div>

      {/* Statistics */}
      <section className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      {/* Journey Overview */}
      <section className="dashboard-section">
        <div className="section-heading">
          <div>
            <span>Live Overview</span>
            <h2>Today's Transportation</h2>
          </div>

          <span className="live-indicator">
            <span></span>
            Live
          </span>
        </div>

        <JourneyStatus
          status="In Progress"
          busNumber="BUS-102"
          route="Route A"
          currentLocation="City Center"
          studentsBoarded={28}
          totalStudents={32}
          startedAt="07:35 AM"
          lastUpdated="08:24 AM"
        />
      </section>

      {/* Bus + Journey */}
      <section className="dashboard-two-column">
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <span>Live Tracking</span>
              <h2>Bus Status</h2>
            </div>

            <button type="button" className="panel-link">
              View All
            </button>
          </div>

          <BusStatusCard
            busNumber="BUS-102"
            driver="Rahul Sharma"
            route="City Center → School"
            students={32}
            currentStop="City Center"
            nextStop="University Road"
            status="On Route"
            time="08:42 AM"
          />
        </div>

        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <span>Journey Activity</span>
              <h2>Today's Journey</h2>
            </div>

            <button type="button" className="panel-link">
              View Details
            </button>
          </div>

          <JourneyTimeline />
        </div>
      </section>

      {/* Students + Notifications */}
      <section className="dashboard-two-column">
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <span>Student Management</span>
              <h2>Recent Students</h2>
            </div>

            <button type="button" className="panel-link">
              View All
            </button>
          </div>

          <div className="student-card-list">
            {students.slice(0, 4).map((student) => (
              <StudentCard
                key={student.name}
                {...student}
              />
            ))}
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <span>Updates</span>
              <h2>Recent Notifications</h2>
            </div>

            <button type="button" className="panel-link">
              View All
            </button>
          </div>

          <div className="notification-list">
            {notifications.map((notification, index) => (
              <NotificationCard
                key={`${notification.title}-${index}`}
                {...notification}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;