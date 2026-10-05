import { BusFront } from "lucide-react";

const PublicLayout = ({ children }) => {
  return (
    <div className="public-layout">
      <header className="public-navbar">
        <div className="public-logo">
          <div className="public-logo-icon">
            <BusFront size={21} />
          </div>

          <div>
            <strong>EduTrack</strong>
            <span>Smart Transport</span>
          </div>
        </div>

        <div className="public-navbar-right">
          <span>School Transportation Management</span>
        </div>
      </header>

      <main className="public-content">{children}</main>

      <footer className="public-footer">
        <span>© 2026 EduTrack</span>
        <span>Smart • Safe • Connected</span>
      </footer>
    </div>
  );
};

export default PublicLayout;