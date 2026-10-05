import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const AUTH_STORAGE_KEY = "edutrack_user";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem(AUTH_STORAGE_KEY);

      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Failed to load saved user:", error);
      return null;
    }
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        AUTH_STORAGE_KEY,
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [user]);

  const login = ({ email, password, role }) => {
    setLoading(true);

    const normalizedRole =
      role?.charAt(0).toUpperCase() +
      role?.slice(1).toLowerCase();

    const demoUser = {
      id:
        normalizedRole === "Admin"
          ? "ADM-001"
          : normalizedRole === "Parent"
          ? "PAR-001"
          : "DRV-102",

      name:
        normalizedRole === "Admin"
          ? "Admin"
          : normalizedRole === "Parent"
          ? "Rakesh Sharma"
          : "Rahul Sharma",

      email,

      role: normalizedRole,

      avatar: null,

      ...(normalizedRole === "Parent" && {
        child: {
          id: "STU-1001",
          name: "Aarav Sharma",
          className: "8-A",
          busNumber: "BUS-102",
        },
      }),

      ...(normalizedRole === "Driver" && {
        driver: {
          employeeId: "DRV-102",
          busNumber: "BUS-102",
          route: "Route A",
        },
      }),
    };

    /*
      Frontend demo authentication.

      Password is intentionally not stored.
      Backend authentication can replace this function later.
    */
    if (!email || !password) {
      setLoading(false);

      return {
        success: false,
        message: "Email and password are required.",
      };
    }

    setUser(demoUser);
    setLoading(false);

    return {
      success: true,
      user: demoUser,
    };
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updatedData) => {
    setUser((currentUser) => {
      if (!currentUser) {
        return null;
      }

      return {
        ...currentUser,
        ...updatedData,
      };
    });
  };

  const isAuthenticated = Boolean(user);

  const hasRole = (role) => {
    if (!user) {
      return false;
    }

    if (Array.isArray(role)) {
      return role.includes(user.role);
    }

    return user.role === role;
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    logout,
    updateUser,
    hasRole,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used inside AuthProvider"
    );
  }

  return context;
};

export default AuthContext;