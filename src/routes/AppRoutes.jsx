import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import ProtectedRoute from "../components/common/ProtectedRoute";
import DashboardLayout from "../layout/DashboardLayout";

// Admin
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageStudents from "../pages/admin/ManageStudents";
import ManageParents from "../pages/admin/ManageParents";
import ManageDrivers from "../pages/admin/ManageDrivers";
import ManageBuses from "../pages/admin/ManageBuses";
import ManageRoutes from "../pages/admin/ManageRoutes";
import ManageHolidays from "../pages/admin/ManageHolidays";
import ManageJourneys from "../pages/admin/ManageJourneys";
import EmergencyAlerts from "../pages/admin/EmergencyAlerts";

// Parent
import ParentDashboard from "../pages/parent/ParentDashboard";
import ChildDetails from "../pages/parent/ChildDetails";
import TodayJourney from "../pages/parent/TodayJourney";
import LiveBus from "../pages/parent/LiveBus";
import Notifications from "../pages/parent/Notifications";
import Calendar from "../pages/parent/Calendar";
import History from "../pages/parent/History";
import Profile from "../pages/parent/Profile";

// Driver
import DriverDashboard from "../pages/driver/DriverDashboard";
import AssignedBus from "../pages/driver/AssignedBus";
import AssignedStudents from "../pages/driver/AssignedStudents";
import QRScanner from "../pages/driver/QRScanner";
import Boarding from "../pages/driver/Boarding";
import DriverRoute from "../pages/driver/Route";
import Emergency from "../pages/driver/Emergency";

const ProtectedPage = ({ children, roles }) => {
return ( <ProtectedRoute allowedRoles={roles}> <DashboardLayout>
{children} </DashboardLayout> </ProtectedRoute>
);
};

const AppRoutes = () => {
return ( <Routes>
{/* Login */}
<Route
path="/login"
element={<Login />}
/>

  {/* ================= ADMIN ================= */}

  <Route
    path="/admin"
    element={
      <ProtectedPage roles={["Admin"]}>
        <AdminDashboard />
      </ProtectedPage>
    }
  />

  <Route
    path="/admin/students"
    element={
      <ProtectedPage roles={["Admin"]}>
        <ManageStudents />
      </ProtectedPage>
    }
  />

  <Route
    path="/admin/parents"
    element={
      <ProtectedPage roles={["Admin"]}>
        <ManageParents />
      </ProtectedPage>
    }
  />

  <Route
    path="/admin/drivers"
    element={
      <ProtectedPage roles={["Admin"]}>
        <ManageDrivers />
      </ProtectedPage>
    }
  />

  <Route
    path="/admin/buses"
    element={
      <ProtectedPage roles={["Admin"]}>
        <ManageBuses />
      </ProtectedPage>
    }
  />

  <Route
    path="/admin/routes"
    element={
      <ProtectedPage roles={["Admin"]}>
        <ManageRoutes />
      </ProtectedPage>
    }
  />

  <Route
    path="/admin/holidays"
    element={
      <ProtectedPage roles={["Admin"]}>
        <ManageHolidays />
      </ProtectedPage>
    }
  />

  <Route
    path="/admin/journeys"
    element={
      <ProtectedPage roles={["Admin"]}>
        <ManageJourneys />
      </ProtectedPage>
    }
  />

  <Route
    path="/admin/emergency-alerts"
    element={
      <ProtectedPage roles={["Admin"]}>
        <EmergencyAlerts />
      </ProtectedPage>
    }
  />

  {/* ================= PARENT ================= */}

  <Route
    path="/parent"
    element={
      <ProtectedPage roles={["Parent"]}>
        <ParentDashboard />
      </ProtectedPage>
    }
  />

  <Route
    path="/parent/child"
    element={
      <ProtectedPage roles={["Parent"]}>
        <ChildDetails />
      </ProtectedPage>
    }
  />

  <Route
    path="/parent/today-journey"
    element={
      <ProtectedPage roles={["Parent"]}>
        <TodayJourney />
      </ProtectedPage>
    }
  />

  <Route
    path="/parent/live-bus"
    element={
      <ProtectedPage roles={["Parent"]}>
        <LiveBus />
      </ProtectedPage>
    }
  />

  <Route
    path="/parent/notifications"
    element={
      <ProtectedPage roles={["Parent"]}>
        <Notifications />
      </ProtectedPage>
    }
  />

  <Route
    path="/parent/calendar"
    element={
      <ProtectedPage roles={["Parent"]}>
        <Calendar />
      </ProtectedPage>
    }
  />

  <Route
    path="/parent/history"
    element={
      <ProtectedPage roles={["Parent"]}>
        <History />
      </ProtectedPage>
    }
  />

  <Route
    path="/parent/profile"
    element={
      <ProtectedPage roles={["Parent"]}>
        <Profile />
      </ProtectedPage>
    }
  />

  {/* ================= DRIVER ================= */}

  <Route
    path="/driver"
    element={
      <ProtectedPage roles={["Driver"]}>
        <DriverDashboard />
      </ProtectedPage>
    }
  />

  <Route
    path="/driver/bus"
    element={
      <ProtectedPage roles={["Driver"]}>
        <AssignedBus />
      </ProtectedPage>
    }
  />

  <Route
    path="/driver/students"
    element={
      <ProtectedPage roles={["Driver"]}>
        <AssignedStudents />
      </ProtectedPage>
    }
  />

  <Route
    path="/driver/qr-scanner"
    element={
      <ProtectedPage roles={["Driver"]}>
        <QRScanner />
      </ProtectedPage>
    }
  />

  <Route
    path="/driver/boarding"
    element={
      <ProtectedPage roles={["Driver"]}>
        <Boarding />
      </ProtectedPage>
    }
  />

  <Route
    path="/driver/route"
    element={
      <ProtectedPage roles={["Driver"]}>
        <DriverRoute />
      </ProtectedPage>
    }
  />

  <Route
    path="/driver/emergency"
    element={
      <ProtectedPage roles={["Driver"]}>
        <Emergency />
      </ProtectedPage>
    }
  />

  {/* ================= DEFAULT ================= */}

  <Route
    path="/"
    element={<Navigate to="/login" replace />}
  />

  <Route
    path="*"
    element={<Navigate to="/login" replace />}
  />
</Routes>
);
};

export default AppRoutes;