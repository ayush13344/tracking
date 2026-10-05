import { useState } from "react";
import {
  Bell,
  BusFront,
  CheckCircle2,
  Edit3,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Save,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [profile, setProfile] = useState({
    name: "Rakesh Sharma",
    email: "rakesh.sharma@example.com",
    phone: "+91 98765 43210",
    address: "Green Park, Gwalior",
    relationship: "Father",
  });

  const [preferences, setPreferences] = useState({
    journeyUpdates: true,
    boardingAlerts: true,
    schoolUpdates: true,
    safetyAlerts: true,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setEditing(false);
    console.log("Profile saved:", profile);
  };

  const togglePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="parent-page profile-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Parent Portal</span>

          <h1>My Profile</h1>

          <p>
            Manage your account details, preferences and
            transportation information.
          </p>
        </div>

        <div className="page-header-actions">
          {!editing ? (
            <button
              type="button"
              className="profile-edit-button"
              onClick={() => setEditing(true)}
            >
              <Edit3 size={17} />
              Edit Profile
            </button>
          ) : (
            <>
              <button
                type="button"
                className="profile-cancel-button"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="profile-save-button"
                onClick={handleSave}
              >
                <Save size={17} />
                Save Changes
              </button>
            </>
          )}
        </div>
      </div>

      {/* Profile Hero */}
      <section className="profile-hero">
        <div className="profile-hero-left">
          <div className="profile-avatar-large">
            <UserRound size={39} />
          </div>

          <div className="profile-hero-info">
            <div className="profile-name-row">
              <h2>{profile.name}</h2>

              <span className="profile-verified-badge">
                <CheckCircle2 size={14} />
                Verified
              </span>
            </div>

            <p>Parent / Guardian · {profile.relationship}</p>

            <div className="profile-hero-meta">
              <span>
                <Mail size={14} />
                {profile.email}
              </span>

              <span>
                <Phone size={14} />
                {profile.phone}
              </span>
            </div>
          </div>
        </div>

        <div className="profile-member-card">
          <ShieldCheck size={21} />

          <div>
            <span>Account Status</span>
            <strong>Active</strong>
          </div>
        </div>
      </section>

      {/* Main Profile Grid */}
      <section className="profile-main-grid">
        {/* Personal Information */}
        <div className="dashboard-panel profile-information-panel">
          <div className="panel-header">
            <div>
              <span>Account Details</span>
              <h2>Personal Information</h2>
            </div>

            <UserRound size={21} />
          </div>

          <div className="profile-form">
            <div className="profile-form-field">
              <label htmlFor="profile-name">
                Full Name
              </label>

              <div className="profile-input-wrapper">
                <UserRound size={17} />

                <input
                  id="profile-name"
                  name="name"
                  type="text"
                  value={profile.name}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>
            </div>

            <div className="profile-form-field">
              <label htmlFor="profile-email">
                Email Address
              </label>

              <div className="profile-input-wrapper">
                <Mail size={17} />

                <input
                  id="profile-email"
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>
            </div>

            <div className="profile-form-field">
              <label htmlFor="profile-phone">
                Phone Number
              </label>

              <div className="profile-input-wrapper">
                <Phone size={17} />

                <input
                  id="profile-phone"
                  name="phone"
                  type="tel"
                  value={profile.phone}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>
            </div>

            <div className="profile-form-field">
              <label htmlFor="profile-relationship">
                Relationship
              </label>

              <select
                id="profile-relationship"
                name="relationship"
                value={profile.relationship}
                onChange={handleChange}
                disabled={!editing}
              >
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Guardian">Guardian</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="profile-form-field profile-full-width">
              <label htmlFor="profile-address">
                Address
              </label>

              <div className="profile-input-wrapper">
                <MapPin size={17} />

                <input
                  id="profile-address"
                  name="address"
                  type="text"
                  value={profile.address}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Child Information */}
        <div className="dashboard-panel profile-child-panel">
          <div className="panel-header">
            <div>
              <span>Linked Student</span>
              <h2>Child Information</h2>
            </div>

            <Users size={21} />
          </div>

          <div className="profile-child-card">
            <div className="profile-child-avatar">
              <UserRound size={27} />
            </div>

            <div className="profile-child-info">
              <h3>Aarav Sharma</h3>

              <span>Class 8 - A · STU-1001</span>

              <div>
                <CheckCircle2 size={14} />
                Active Student
              </div>
            </div>
          </div>

          <div className="profile-child-details">
            <div>
              <span>School</span>
              <strong>EduTrack Public School</strong>
            </div>

            <div>
              <span>Pickup Point</span>
              <strong>Green Park</strong>
            </div>

            <div>
              <span>Assigned Bus</span>
              <strong>BUS-102</strong>
            </div>

            <div>
              <span>Route</span>
              <strong>Route A</strong>
            </div>
          </div>

          <div className="profile-child-status">
            <BusFront size={17} />

            <div>
              <strong>Transportation Active</strong>
              <span>
                Your child is currently assigned to BUS-102.
              </span>
            </div>

            <CheckCircle2 size={18} />
          </div>
        </div>
      </section>

      {/* Preferences + Security */}
      <section className="profile-settings-grid">
        {/* Notification Preferences */}
        <div className="dashboard-panel profile-preferences-panel">
          <div className="panel-header">
            <div>
              <span>Preferences</span>
              <h2>Notifications</h2>
            </div>

            <Bell size={21} />
          </div>

          <p className="profile-settings-description">
            Choose which transportation and school updates you
            would like to receive.
          </p>

          <div className="profile-preference-list">
            <div className="profile-preference">
              <div className="profile-preference-icon preference-purple">
                <BusFront size={18} />
              </div>

              <div>
                <strong>Journey Updates</strong>
                <span>
                  Get updates when the bus starts or completes a
                  journey.
                </span>
              </div>

              <button
                type="button"
                className={`profile-toggle ${
                  preferences.journeyUpdates
                    ? "profile-toggle-active"
                    : ""
                }`}
                onClick={() =>
                  togglePreference("journeyUpdates")
                }
                aria-label="Toggle journey updates"
              >
                <span></span>
              </button>
            </div>

            <div className="profile-preference">
              <div className="profile-preference-icon preference-blue">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <strong>Boarding Alerts</strong>
                <span>
                  Receive notifications when your child boards
                  the bus.
                </span>
              </div>

              <button
                type="button"
                className={`profile-toggle ${
                  preferences.boardingAlerts
                    ? "profile-toggle-active"
                    : ""
                }`}
                onClick={() =>
                  togglePreference("boardingAlerts")
                }
                aria-label="Toggle boarding alerts"
              >
                <span></span>
              </button>
            </div>

            <div className="profile-preference">
              <div className="profile-preference-icon preference-orange">
                <Bell size={18} />
              </div>

              <div>
                <strong>School Updates</strong>
                <span>
                  Stay informed about holidays and school events.
                </span>
              </div>

              <button
                type="button"
                className={`profile-toggle ${
                  preferences.schoolUpdates
                    ? "profile-toggle-active"
                    : ""
                }`}
                onClick={() =>
                  togglePreference("schoolUpdates")
                }
                aria-label="Toggle school updates"
              >
                <span></span>
              </button>
            </div>

            <div className="profile-preference">
              <div className="profile-preference-icon preference-red">
                <ShieldCheck size={18} />
              </div>

              <div>
                <strong>Safety Alerts</strong>
                <span>
                  Receive important transportation safety alerts.
                </span>
              </div>

              <button
                type="button"
                className={`profile-toggle ${
                  preferences.safetyAlerts
                    ? "profile-toggle-active"
                    : ""
                }`}
                onClick={() =>
                  togglePreference("safetyAlerts")
                }
                aria-label="Toggle safety alerts"
              >
                <span></span>
              </button>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="dashboard-panel profile-security-panel">
          <div className="panel-header">
            <div>
              <span>Account Security</span>
              <h2>Password</h2>
            </div>

            <LockKeyhole size={21} />
          </div>

          <p className="profile-settings-description">
            Keep your EduTrack account secure with a strong
            password.
          </p>

          <div className="profile-password-field">
            <label htmlFor="profile-password">
              Current Password
            </label>

            <div className="profile-input-wrapper">
              <LockKeyhole size={17} />

              <input
                id="profile-password"
                type={
                  showPassword ? "text" : "password"
                }
                value="EduTrack@2026"
                readOnly
              />

              <button
                type="button"
                className="profile-password-toggle"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff size={17} />
                ) : (
                  <Eye size={17} />
                )}
              </button>
            </div>
          </div>

          <button
            type="button"
            className="profile-change-password-button"
            onClick={() =>
              console.log("Change password clicked")
            }
          >
            <LockKeyhole size={17} />
            Change Password
          </button>

          <div className="profile-security-note">
            <ShieldCheck size={18} />

            <div>
              <strong>Account protected</strong>

              <span>
                Your profile is secured with EduTrack account
                protection.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Account Footer */}
      <div className="parent-safety-notice profile-account-notice">
        <div className="parent-safety-icon">
          <ShieldCheck size={20} />
        </div>

        <div>
          <strong>Your account is secure</strong>

          <p>
            Profile information and transportation details are
            managed securely within EduTrack.
          </p>
        </div>

        <CheckCircle2 size={19} />
      </div>
    </div>
  );
};

export default Profile;