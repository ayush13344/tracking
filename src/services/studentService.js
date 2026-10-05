import api from "./api";

const studentService = {
  // Get all students
  getStudents: async (params = {}) => {
    const query = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (
        value !== undefined &&
        value !== null &&
        value !== ""
      ) {
        query.append(key, value);
      }
    });

    const queryString = query.toString();

    return api.get(
      `/students${queryString ? `?${queryString}` : ""}`
    );
  },

  // Get a single student
  getStudentById: async (studentId) => {
    return api.get(`/students/${studentId}`);
  },

  // Create a new student
  createStudent: async (studentData) => {
    return api.post("/students", studentData);
  },

  // Update student
  updateStudent: async (studentId, studentData) => {
    return api.put(
      `/students/${studentId}`,
      studentData
    );
  },

  // Delete student
  deleteStudent: async (studentId) => {
    return api.delete(`/students/${studentId}`);
  },

  // Search students
  searchStudents: async (searchTerm) => {
    return api.get(
      `/students/search?q=${encodeURIComponent(searchTerm)}`
    );
  },

  // Get students assigned to a particular bus
  getStudentsByBus: async (busNumber) => {
    return api.get(
      `/students/bus/${encodeURIComponent(busNumber)}`
    );
  },

  // Get students assigned to a particular route
  getStudentsByRoute: async (routeId) => {
    return api.get(
      `/students/route/${routeId}`
    );
  },

  // Update student transportation details
  updateTransportDetails: async (
    studentId,
    transportData
  ) => {
    return api.put(
      `/students/${studentId}/transport`,
      transportData
    );
  },

  // Update student status
  updateStudentStatus: async (
    studentId,
    status
  ) => {
    return api.patch(
      `/students/${studentId}/status`,
      { status }
    );
  },
};

export default studentService;
