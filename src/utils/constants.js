export const APP_NAME = "EduTrack";
export const APP_TAGLINE = "Smart Transport";

export const USER_ROLES = {
  ADMIN: "Admin",
  PARENT: "Parent",
  DRIVER: "Driver",
};

export const JOURNEY_STATUS = {
  PENDING: "Pending",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
};

export const STUDENT_STATUS = {
  ACTIVE: "Active",
  PENDING: "Pending",
  BOARDED: "Boarded",
  WAITING: "Waiting",
  ABSENT: "Absent",
};

export const BUS_STATUS = {
  ON_ROUTE: "On Route",
  IDLE: "Idle",
  MAINTENANCE: "Maintenance",
  OFFLINE: "Offline",
};

export const NOTIFICATION_TYPES = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  DANGER: "danger",
  BUS: "bus",
};

export const INCIDENT_TYPES = {
  MEDICAL: "medical",
  VEHICLE: "vehicle",
  ROAD: "road",
  FIRE: "fire",
  STUDENT: "student",
  OTHER: "other",
};

export const STORAGE_KEYS = {
  USER: "edutrack_user",
  TOKEN: "edutrack_token",
};

export const DEFAULT_BUS = {
  number: "BUS-102",
  driver: "Rahul Sharma",
  route: "Route A",
};

export const DEFAULT_CHILD = {
  id: "STU-1001",
  name: "Aarav Sharma",
  className: "8-A",
  busNumber: "BUS-102",
  pickupPoint: "Green Park",
};

export const SCHOOL_INFO = {
  name: "EduTrack Public School",
  address: "Gwalior, Madhya Pradesh",
};

export const ITEMS_PER_PAGE = 10;