import {
  Bell,
  ChevronDown,
  LogOut,
  Search,
  UserCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const userName = user?.name || "Admin";
  const userRole = user?.role || "Administrator";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleNotifications = () => {
    if (userRole === "Admin") {
      navigate("/admin/emergency-alerts");
      return;
    }

    if (userRole === "Parent") {
      navigate("/parent/notifications");
      return;
    }

    if (userRole === "Driver") {
      navigate("/driver/emergency");
    }
  };

  const handleProfile = () => {
    if (userRole === "Parent") {
      navigate("/parent/profile");
      return;
    }

    if (userRole === "Driver") {
      navigate("/driver");
      return;
    }

    navigate("/admin");
  };

  return (
    <header className="navbar">
      {/* Search */}
      <div className="navbar-left">
        <div className="navbar-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search students, buses, routes..."
          />
        </div>
      </div>

      {/* Right */}
      <div className="navbar-right">
        {/* Notifications */}
        <button
          type="button"
          className="icon-button"
          aria-label="Notifications"
          onClick={handleNotifications}
        >
          <Bell size={20} />

          <span className="notification-dot"></span>
        </button>

        {/* Profile */}
        <button
          type="button"
          className="navbar-profile"
          onClick={handleProfile}
        >
          <div className="navbar-profile-icon">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={userName}
              />
            ) : (
              <UserCircle size={34} />
            )}
          </div>

          <div className="navbar-profile-info">
            <strong>{userName}</strong>
            <span>{userRole}</span>
          </div>

          <ChevronDown
            size={16}
            className="navbar-profile-arrow"
          />
        </button>

        {/* Logout */}
        <button
          type="button"
          className="navbar-logout-button"
          onClick={handleLogout}
          title="Logout"
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;