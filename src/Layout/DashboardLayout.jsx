import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

const DashboardLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed((prev) => !prev)}
      />

      <div
        className={`dashboard-main ${
          sidebarCollapsed ? "dashboard-main-expanded" : ""
        }`}
      >
        <Navbar />

        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;