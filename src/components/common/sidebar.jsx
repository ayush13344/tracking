import {
  AlertTriangle,
  BellRing,
  Bus,
  CalendarDays,
  ChevronLeft,
  LayoutDashboard,
  LogOut,
  Map,
  Route as RouteIcon,
  UserRound,
  Users,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const Sidebar = ({ collapsed = false, onToggle }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const role = user?.role || "Admin";

  const adminMenu = [
    {
      section: "Overview",
      items: [
        {
          label: "Dashboard",
          icon: LayoutDashboard,
          path: "/admin",
        },
        {
          label: "Students",
          icon: Users,
          path: "/admin/students",
        },
        {
          label: "Parents",
          icon: UserRound,
          path: "/admin/parents",
        },
      ],
    },
    {
      section: "Transportation",
      items: [
        {
          label: "Drivers",
          icon: UserRound,
          path: "/admin/drivers",
        },
        {
          label: "Buses",
          icon: Bus,
          path: "/admin/buses",
        },
        {
          label: "Routes",
          icon: RouteIcon,
          path: "/admin/routes",
        },
        {
          label: "Journeys",
          icon: Map,
          path: "/admin/journeys",
        },
      ],
    },
    {
      section: "Management",
      items: [
        {
          label: "Holidays",
          icon: CalendarDays,
          path: "/admin/holidays",
        },
        {
          label: "Notifications",
          icon: BellRing,
          path: "/admin/notifications",
        },
        {
          label: "Emergency Alerts",
          icon: AlertTriangle,
          path: "/admin/emergency-alerts",
        },
      ],
    },
  ];

  const parentMenu = [
    {
      section: "Overview",
      items: [
        {
          label: "Dashboard",
          icon: LayoutDashboard,
          path: "/parent",
        },
        {
          label: "Child Details",
          icon: UserRound,
          path: "/parent/child",
        },
      ],
    },
    {
      section: "Journey",
      items: [
        {
          label: "Today's Journey",
          icon: Map,
          path: "/parent/today-journey",
        },
        {
          label: "Live Bus",
          icon: Bus,
          path: "/parent/live-bus",
        },
        {
          label: "Journey History",
          icon: RouteIcon,
          path: "/parent/history",
        },
      ],
    },
    {
      section: "Management",
      items: [
        {
          label: "Notifications",
          icon: BellRing,
          path: "/parent/notifications",
        },
        {
          label: "Calendar",
          icon: CalendarDays,
          path: "/parent/calendar",
        },
        {
          label: "Profile",
          icon: UserRound,
          path: "/parent/profile",
        },
      ],
    },
  ];

  const driverMenu = [
    {
      section: "Overview",
      items: [
        {
          label: "Dashboard",
          icon: LayoutDashboard,
          path: "/driver",
        },
        {
          label: "Assigned Bus",
          icon: Bus,
          path: "/driver/bus",
        },
        {
          label: "Assigned Students",
          icon: Users,
          path: "/driver/students",
        },
      ],
    },
    {
      section: "Journey",
      items: [
        {
          label: "QR Scanner",
          icon: UserRound,
          path: "/driver/qr-scanner",
        },
        {
          label: "Boarding",
          icon: Users,
          path: "/driver/boarding",
        },
        {
          label: "My Route",
          icon: RouteIcon,
          path: "/driver/route",
        },
      ],
    },
    {
      section: "Safety",
      items: [
        {
          label: "Emergency",
          icon: AlertTriangle,
          path: "/driver/emergency",
        },
      ],
    },
  ];

  const menuItems =
    role === "Parent"
      ? parentMenu
      : role === "Driver"
      ? driverMenu
      : adminMenu;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside
      className={`sidebar ${
        collapsed ? "sidebar-collapsed" : ""
      }`}
    >
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">E</div>

        {!collapsed && (
          <div className="logo-text">
            <h2>EduTrack</h2>
            <span>Smart Transport</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {menuItems.map((section) => (
          <div
            className="menu-section"
            key={section.section}
          >
            {!collapsed && (
              <p className="menu-section-title">
                {section.section}
              </p>
            )}

            {section.items.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  end={item.path === `/${role.toLowerCase()}`}
                  className={({ isActive }) =>
                    `sidebar-item ${
                      isActive ? "active" : ""
                    }`
                  }
                  title={collapsed ? item.label : ""}
                >
                  <Icon
                    size={19}
                    strokeWidth={2}
                  />

                  {!collapsed && (
                    <span>{item.label}</span>
                  )}
                </NavLink>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="sidebar-bottom">
        <button
          type="button"
          className="sidebar-item logout-item"
          title={collapsed ? "Logout" : ""}
          onClick={handleLogout}
        >
          <LogOut size={19} />

          {!collapsed && <span>Logout</span>}
        </button>

        {onToggle && (
          <button
            type="button"
            className="sidebar-collapse-button"
            onClick={onToggle}
            aria-label="Toggle sidebar"
          >
            <ChevronLeft
              size={18}
              className={
                collapsed ? "rotate-icon" : ""
              }
            />
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;