import { BusFront, ShieldCheck, Sparkles } from "lucide-react";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-brand-panel">
        <div className="auth-brand">
          <div className="auth-logo">
            <BusFront size={28} />
          </div>

          <div>
            <h1>EduTrack</h1>
            <span>Smart Transport</span>
          </div>
        </div>

        <div className="auth-brand-content">
          <span className="auth-eyebrow">
            <Sparkles size={15} />
            School Transportation
          </span>

          <h2>
            Safer journeys.
            <br />
            Smarter management.
          </h2>

          <p>
            Manage students, buses, routes and daily journeys from one
            simple transportation dashboard.
          </p>
        </div>

        <div className="auth-feature-list">
          <div className="auth-feature">
            <div className="auth-feature-icon">
              <ShieldCheck size={19} />
            </div>

            <div>
              <strong>Safe & Reliable</strong>
              <span>Keep every student journey organized.</span>
            </div>
          </div>

          <div className="auth-feature">
            <div className="auth-feature-icon">
              <BusFront size={19} />
            </div>

            <div>
              <strong>Live Transportation</strong>
              <span>Monitor buses and routes easily.</span>
            </div>
          </div>
        </div>

        <div className="auth-decoration auth-decoration-one"></div>
        <div className="auth-decoration auth-decoration-two"></div>
      </div>

      <div className="auth-form-panel">{children}</div>
    </div>
  );
};

export default AuthLayout;