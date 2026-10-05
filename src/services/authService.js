import api from "./api";

const authService = {
  login: async (credentials) => {
    return api.post("/auth/login", credentials);
  },

  register: async (userData) => {
    return api.post("/auth/register", userData);
  },

  getCurrentUser: async () => {
    return api.get("/auth/me");
  },

  logout: async () => {
    return api.post("/auth/logout");
  },

  forgotPassword: async (email) => {
    return api.post("/auth/forgot-password", {
      email,
    });
  },

  resetPassword: async (token, password) => {
    return api.post("/auth/reset-password", {
      token,
      password,
    });
  },

  updateProfile: async (profileData) => {
    return api.put("/auth/profile", profileData);
  },

  changePassword: async (currentPassword, newPassword) => {
    return api.put("/auth/change-password", {
      currentPassword,
      newPassword,
    });
  },
};

export default authService;