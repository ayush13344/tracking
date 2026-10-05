import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Bell,
  BusFront,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Info,
  MailOpen,
  MoreHorizontal,
  ShieldAlert,
  Trash2,
  XCircle,
} from "lucide-react";

import Button from "../../components/ui/Button";
import NotificationCard from "../../components/notifications/NotificationCard";

const initialNotifications = [
  {
    id: 1,
    title: "Your child has boarded the bus",
    message:
      "Aarav Sharma successfully boarded BUS-102 at Green Park.",
    time: "18 min ago",
    type: "success",
    read: false,
    category: "Journey",
  },
  {
    id: 2,
    title: "Bus has started its journey",
    message:
      "BUS-102 has started from the depot and is currently travelling on Route A.",
    time: "24 min ago",
    type: "bus",
    read: false,
    category: "Journey",
  },
  {
    id: 3,
    title: "Estimated arrival update",
    message:
      "BUS-102 is expected to reach EduTrack Public School at 08:45 AM.",
    time: "30 min ago",
    type: "info",
    read: false,
    category: "Journey",
  },
  {
    id: 4,
    title: "Route update",
    message:
      "BUS-102 is currently near City Center and moving towards University Road.",
    time: "42 min ago",
    type: "info",
    read: true,
    category: "Journey",
  },
  {
    id: 5,
    title: "Upcoming school holiday",
    message:
      "Diwali holiday is scheduled for October 20, 2026. Transportation services will remain suspended.",
    time: "Yesterday",
    type: "info",
    read: true,
    category: "School",
  },
  {
    id: 6,
    title: "Transportation safety update",
    message:
      "Your child's assigned driver and bus information have been verified.",
    time: "Yesterday",
    type: "success",
    read: true,
    category: "Safety",
  },
  {
    id: 7,
    title: "Bus delay notification",
    message:
      "A minor delay may occur due to traffic near City Center.",
    time: "2 days ago",
    type: "warning",
    read: true,
    category: "Alert",
  },
  {
    id: 8,
    title: "Journey completed",
    message:
      "BUS-102 successfully completed the afternoon journey.",
    time: "2 days ago",
    type: "success",
    read: true,
    category: "Journey",
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(
    initialNotifications
  );

  const [activeFilter, setActiveFilter] = useState("All");

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const filteredNotifications = useMemo(() => {
    if (activeFilter === "Unread") {
      return notifications.filter(
        (notification) => !notification.read
      );
    }

    if (activeFilter === "Journey") {
      return notifications.filter(
        (notification) => notification.category === "Journey"
      );
    }

    if (activeFilter === "School") {
      return notifications.filter(
        (notification) => notification.category === "School"
      );
    }

    if (activeFilter === "Safety") {
      return notifications.filter(
        (notification) => notification.category === "Safety"
      );
    }

    if (activeFilter === "Alert") {
      return notifications.filter(
        (notification) => notification.category === "Alert"
      );
    }

    return notifications;
  }, [notifications, activeFilter]);

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="parent-page notifications-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Parent Portal</span>

          <h1>Notifications</h1>

          <p>
            Stay updated with your child's journey, school events
            and transportation alerts.
          </p>
        </div>

        <div className="page-header-actions">
          <Button
            variant="secondary"
            icon={MailOpen}
            onClick={markAllAsRead}
          >
            Mark All Read
          </Button>
        </div>
      </div>

      {/* Notification Summary */}
      <section className="notification-summary-grid">
        <div className="notification-summary-card notification-summary-purple">
          <div className="notification-summary-icon">
            <Bell size={22} />
          </div>

          <div>
            <span>Total Notifications</span>
            <strong>{notifications.length}</strong>
            <small>All updates</small>
          </div>
        </div>

        <div className="notification-summary-card notification-summary-blue">
          <div className="notification-summary-icon">
            <MailOpen size={22} />
          </div>

          <div>
            <span>Unread</span>
            <strong>{unreadCount}</strong>
            <small>Need your attention</small>
          </div>
        </div>

        <div className="notification-summary-card notification-summary-mint">
          <div className="notification-summary-icon">
            <BusFront size={22} />
          </div>

          <div>
            <span>Journey Updates</span>
            <strong>
              {
                notifications.filter(
                  (item) => item.category === "Journey"
                ).length
              }
            </strong>
            <small>Transportation</small>
          </div>
        </div>

        <div className="notification-summary-card notification-summary-orange">
          <div className="notification-summary-icon">
            <ShieldAlert size={22} />
          </div>

          <div>
            <span>Safety Alerts</span>
            <strong>
              {
                notifications.filter(
                  (item) => item.category === "Safety" ||
                    item.category === "Alert"
                ).length
              }
            </strong>
            <small>Safety information</small>
          </div>
        </div>
      </section>

      {/* Notification Controls */}
      <section className="notifications-panel">
        <div className="notifications-toolbar">
          <div>
            <span>Updates Center</span>
            <h2>All Notifications</h2>
          </div>

          <div className="notifications-toolbar-actions">
            <span className="notification-count-badge">
              {unreadCount} unread
            </span>

            <button
              type="button"
              className="notification-more-button"
              title="More options"
            >
              <MoreHorizontal size={19} />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="notification-filters">
          {[
            {
              label: "All",
              icon: Bell,
            },
            {
              label: "Unread",
              icon: MailOpen,
            },
            {
              label: "Journey",
              icon: BusFront,
            },
            {
              label: "School",
              icon: CalendarDays,
            },
            {
              label: "Safety",
              icon: ShieldAlert,
            },
            {
              label: "Alert",
              icon: AlertTriangle,
            },
          ].map((filter) => {
            const Icon = filter.icon;

            return (
              <button
                type="button"
                key={filter.label}
                className={`notification-filter ${
                  activeFilter === filter.label
                    ? "notification-filter-active"
                    : ""
                }`}
                onClick={() => setActiveFilter(filter.label)}
              >
                <Icon size={16} />
                {filter.label}

                {filter.label === "Unread" &&
                  unreadCount > 0 && (
                    <span>{unreadCount}</span>
                  )}
              </button>
            );
          })}
        </div>

        {/* Notification List */}
        <div className="parent-notification-list">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <div
                className={`parent-notification-row ${
                  notification.read
                    ? "parent-notification-read"
                    : "parent-notification-unread"
                }`}
                key={notification.id}
              >
                <NotificationCard
                  title={notification.title}
                  message={notification.message}
                  time={notification.time}
                  type={notification.type}
                  read={notification.read}
                />

                <div className="parent-notification-actions">
                  {!notification.read && (
                    <button
                      type="button"
                      title="Mark as read"
                      onClick={() =>
                        markAsRead(notification.id)
                      }
                    >
                      <MailOpen size={16} />
                    </button>
                  )}

                  <button
                    type="button"
                    title="Delete notification"
                    onClick={() =>
                      deleteNotification(notification.id)
                    }
                  >
                    <Trash2 size={16} />
                  </button>

                  <button
                    type="button"
                    title="More options"
                  >
                    <MoreHorizontal size={17} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="notifications-empty-state">
              <div className="notifications-empty-icon">
                <Bell size={27} />
              </div>

              <h3>No notifications found</h3>

              <p>
                There are no notifications in the selected
                category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Notification Preferences */}
      <section className="notification-preferences">
        <div className="notification-preferences-icon">
          <ShieldAlert size={21} />
        </div>

        <div className="notification-preferences-content">
          <span>Notification Preferences</span>

          <h2>Stay informed about your child's journey</h2>

          <p>
            You will receive important updates about boarding,
            bus movement, school arrival, holidays and safety
            alerts.
          </p>
        </div>

        <div className="notification-preferences-status">
          <CheckCircle2 size={17} />
          Notifications Enabled
        </div>
      </section>

      {/* Safety Footer */}
      <div className="parent-safety-notice">
        <div className="parent-safety-icon">
          <ShieldAlert size={20} />
        </div>

        <div>
          <strong>Important safety notifications</strong>

          <p>
            Critical transportation alerts will be highlighted
            so they can be reviewed quickly.
          </p>
        </div>

        <CheckCircle2 size={19} />
      </div>
    </div>
  );
};

export default Notifications;