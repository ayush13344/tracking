import { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../layout/AuthLayout";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const [role, setRole] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const getDashboardPath = (userRole) => {
    if (userRole === "Admin") return "/admin";
    if (userRole === "Parent") return "/parent";
    if (userRole === "Driver") return "/driver";

    return "/admin";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    const result = login({
      email,
      password,
      role,
    });

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate(getDashboardPath(result.user.role), {
      replace: true,
    });
  };

  const handleDemoLogin = () => {
    setError("");

    const demoCredentials = {
      Admin: {
        email: "admin@edutrack.com",
        password: "admin123",
      },
      Parent: {
        email: "parent@edutrack.com",
        password: "parent123",
      },
      Driver: {
        email: "driver@edutrack.com",
        password: "driver123",
      },
    };

    const credentials = demoCredentials[role];

    setEmail(credentials.email);
    setPassword(credentials.password);

    const result = login({
      email: credentials.email,
      password: credentials.password,
      role,
    });

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate(getDashboardPath(result.user.role), {
      replace: true,
    });
  };

  return (
    <AuthLayout>
      <div className="login-page">
        <div className="login-card">
          <div className="login-header">
            <div className="login-icon">
              <ShieldCheck size={28} />
            </div>

            <h1>Welcome back!</h1>

            <p>
              Sign in to your EduTrack account to continue.
            </p>
          </div>

          <div className="role-selector">
            {["Admin", "Parent", "Driver"].map((item) => (
              <button
                key={item}
                type="button"
                className={`role-option ${
                  role === item ? "active" : ""
                }`}
                onClick={() => {
                  setRole(item);
                  setError("");
                }}
              >
                <UserRound size={17} />
                {item}
              </button>
            ))}
          </div>

          <form
            className="login-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <div className="input-with-icon">
                <Mail size={18} />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>

              <div className="input-with-icon">
                <LockKeyhole size={18} />

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (prev) => !prev
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="login-submit-button"
              disabled={loading}
            >
              {loading
                ? "Signing in..."
                : "Sign In"}
            </button>
          </form>

          <div className="demo-login">
            <div className="demo-login-header">
              <span>Demo Access</span>
              <small>Frontend demo</small>
            </div>

            <p>
              Click below to continue directly with the
              selected role.
            </p>

            <button
              type="button"
              className="demo-login-button"
              onClick={handleDemoLogin}
              disabled={loading}
            >
              Continue as {role}
            </button>
          </div>

          <div className="login-footer">
            <span>EduTrack</span>
            <span>•</span>
            <span>
              Smart Transport Management
            </span>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;