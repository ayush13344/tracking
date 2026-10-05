import api from "./api";

const notificationService = {
  // Get notifications
  getNotifications: async (params = {}) => {
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
      `/notifications${
        queryString ? `?${queryString}` : ""
      }`
    );
  },

  // Get unread notification count
  getUnreadCount: async () => {
    return api.get("/notifications/unread-count");
  },

  // Mark notification as read
  markAsRead: async (notificationId) => {
    return api.patch(
      `/notifications/${notificationId}/read`
    );
  },

  // Mark all notifications as read
  markAllAsRead: async () => {
    return api.patch(
      "/notifications/mark-all-read"
    );
  },

  // Delete notification
  deleteNotification: async (notificationId) => {
    return api.delete(
      `/notifications/${notificationId}`
    );
  },

  // Delete all notifications
  deleteAllNotifications: async () => {
    return api.delete("/notifications");
  },

  // Create notification
  createNotification: async (notificationData) => {
    return api.post(
      "/notifications",
      notificationData
    );
  },

  // Update notification preferences
  updatePreferences: async (preferences) => {
    return api.put(
      "/notifications/preferences",
      preferences
    );
  },

  // Get notification preferences
  getPreferences: async () => {
    return api.get(
      "/notifications/preferences"
    );
  },
};

export default notificationService;