import api from "./api";

const journeyService = {
  // Get all journeys
  getJourneys: async (params = {}) => {
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
      `/journeys${queryString ? `?${queryString}` : ""}`
    );
  },

  // Get a single journey
  getJourneyById: async (journeyId) => {
    return api.get(`/journeys/${journeyId}`);
  },

  // Get today's journey
  getTodayJourney: async () => {
    return api.get("/journeys/today");
  },

  // Start a journey
  startJourney: async (journeyData) => {
    return api.post("/journeys/start", journeyData);
  },

  // Complete a journey
  completeJourney: async (journeyId) => {
    return api.patch(
      `/journeys/${journeyId}/complete`
    );
  },

  // Update current bus location
  updateBusLocation: async (
    journeyId,
    locationData
  ) => {
    return api.patch(
      `/journeys/${journeyId}/location`,
      locationData
    );
  },

  // Get current bus location
  getBusLocation: async (busNumber) => {
    return api.get(
      `/journeys/bus/${encodeURIComponent(
        busNumber
      )}/location`
    );
  },

  // Get journey route stops
  getJourneyStops: async (journeyId) => {
    return api.get(
      `/journeys/${journeyId}/stops`
    );
  },

  // Update stop status
  updateStopStatus: async (
    journeyId,
    stopId,
    status
  ) => {
    return api.patch(
      `/journeys/${journeyId}/stops/${stopId}`,
      { status }
    );
  },

  // Mark student as boarded
  markStudentBoarded: async (
    journeyId,
    studentId
  ) => {
    return api.patch(
      `/journeys/${journeyId}/students/${studentId}/board`,
      {
        status: "Boarded",
      }
    );
  },

  // Mark student as absent
  markStudentAbsent: async (
    journeyId,
    studentId
  ) => {
    return api.patch(
      `/journeys/${journeyId}/students/${studentId}/absent`,
      {
        status: "Absent",
      }
    );
  },

  // Get journey history
  getJourneyHistory: async (params = {}) => {
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
      `/journeys/history${
        queryString ? `?${queryString}` : ""
      }`
    );
  },

  // Get student's journey history
  getStudentJourneyHistory: async (
    studentId,
    params = {}
  ) => {
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
      `/journeys/student/${studentId}/history${
        queryString ? `?${queryString}` : ""
      }`
    );
  },

  // Get driver's assigned journeys
  getDriverJourneys: async (driverId) => {
    return api.get(
      `/journeys/driver/${driverId}`
    );
  },
};

export default journeyService;