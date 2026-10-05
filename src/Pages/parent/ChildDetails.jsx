import {
  Award,
  Bell,
  BookOpen,
  BusFront,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Edit3,
  GraduationCap,
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";

import Button from "../../components/ui/Button";

const ChildDetails = () => {
  const attendance = [
    {
      month: "September",
      present: 21,
      total: 22,
      percentage: "95%",
    },
    {
      month: "August",
      present: 20,
      total: 21,
      percentage: "95%",
    },
    {
      month: "July",
      present: 19,
      total: 22,
      percentage: "86%",
    },
  ];

  return (
    <div className="parent-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Parent Portal</span>

          <h1>Child Details</h1>

          <p>
            View your child's profile, transportation and school
            information.
          </p>
        </div>

        <div className="page-header-actions">
          <Button
            variant="secondary"
            icon={Bell}
          >
            Notifications
          </Button>

          <Button
            variant="primary"
            icon={Edit3}
          >
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Profile Hero */}
      <section className="child-profile-hero">
        <div className="child-profile-main">
          <div className="child-large-avatar">
            <UserRound size={38} />
          </div>

          <div className="child-profile-info">
            <span>Student Profile</span>

            <h2>Aarav Sharma</h2>

            <p>
              Class 8 - A · Student ID: STU-1001
            </p>

            <div className="child-profile-status">
              <CheckCircle2 size={15} />
              Active Student
            </div>
          </div>
        </div>

        <div className="child-profile-actions">
          <button type="button">
            <Phone size={17} />
            Contact School
          </button>

          <button type="button">
            <Navigation size={17} />
            Track Bus
          </button>
        </div>
      </section>

      {/* Basic Information */}
      <section className="child-details-grid">
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <span>Student Information</span>
              <h2>Basic Details</h2>
            </div>

            <div className="child-section-icon child-purple">
              <UserRound size={20} />
            </div>
          </div>

          <div className="child-info-grid">
            <div className="child-info-item">
              <span>Full Name</span>
              <strong>Aarav Sharma</strong>
            </div>

            <div className="child-info-item">
              <span>Student ID</span>
              <strong>STU-1001</strong>
            </div>

            <div className="child-info-item">
              <span>Class</span>
              <strong>8 - A</strong>
            </div>

            <div className="child-info-item">
              <span>Academic Year</span>
              <strong>2026 - 2027</strong>
            </div>

            <div className="child-info-item">
              <span>School</span>
              <strong>EduTrack Public School</strong>
            </div>

            <div className="child-info-item">
              <span>Admission Year</span>
              <strong>2021</strong>
            </div>
          </div>
        </div>

        {/* Guardian Information */}
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <span>Family Information</span>
              <h2>Parent / Guardian</h2>
            </div>

            <div className="child-section-icon child-blue">
              <Users size={20} />
            </div>
          </div>

          <div className="guardian-profile">
            <div className="guardian-avatar">
              <UserRound size={23} />
            </div>

            <div>
              <strong>Rakesh Sharma</strong>
              <span>Father / Guardian</span>
            </div>
          </div>

          <div className="guardian-contact-list">
            <div>
              <MailIcon />
              <span>rakesh.sharma@example.com</span>
            </div>

            <div>
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </div>

            <div>
              <MapPin size={16} />
              <span>Gwalior, Madhya Pradesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Details */}
      <section className="dashboard-panel child-transport-panel">
        <div className="panel-header">
          <div>
            <span>Transportation</span>
            <h2>Assigned Transport</h2>
          </div>

          <span className="live-indicator">
            <span></span>
            Active
          </span>
        </div>

        <div className="child-transport-grid">
          <div className="transport-main-card">
            <div className="transport-bus-icon">
              <BusFront size={27} />
            </div>

            <div>
              <span>Assigned Bus</span>
              <h3>BUS-102</h3>
              <p>MP07 AB 1202</p>
            </div>

            <span className="transport-active-badge">
              <CheckCircle2 size={14} />
              Active
            </span>
          </div>

          <div className="transport-detail">
            <MapPin size={19} />

            <div>
              <span>Pickup Point</span>
              <strong>Green Park</strong>
            </div>
          </div>

          <div className="transport-detail">
            <Navigation size={19} />

            <div>
              <span>Route</span>
              <strong>Route A</strong>
            </div>
          </div>

          <div className="transport-detail">
            <UserRound size={19} />

            <div>
              <span>Driver</span>
              <strong>Rahul Sharma</strong>
            </div>
          </div>

          <div className="transport-detail">
            <Clock3 size={19} />

            <div>
              <span>Pickup Time</span>
              <strong>07:50 AM</strong>
            </div>
          </div>
        </div>

        <div className="transport-footer">
          <div>
            <ShieldCheck size={18} />

            <span>
              Transportation assignment is active and verified.
            </span>
          </div>

          <button type="button">
            <Navigation size={16} />
            Track Bus
          </button>
        </div>
      </section>

      {/* School Information + Attendance */}
      <section className="dashboard-two-column">
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <span>Academic Information</span>
              <h2>School Details</h2>
            </div>

            <div className="child-section-icon child-mint">
              <GraduationCap size={20} />
            </div>
          </div>

          <div className="school-detail-list">
            <div>
              <BookOpen size={17} />
              <div>
                <span>Class</span>
                <strong>8 - A</strong>
              </div>
            </div>

            <div>
              <GraduationCap size={17} />
              <div>
                <span>Class Teacher</span>
                <strong>Mrs. Priya Mehta</strong>
              </div>
            </div>

            <div>
              <CalendarDays size={17} />
              <div>
                <span>School Timing</span>
                <strong>08:45 AM - 03:30 PM</strong>
              </div>
            </div>

            <div>
              <MapPin size={17} />
              <div>
                <span>School Location</span>
                <strong>City Center, Gwalior</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <span>Attendance Overview</span>
              <h2>Recent Attendance</h2>
            </div>

            <div className="attendance-percentage">
              92%
            </div>
          </div>

          <div className="attendance-summary">
            <div className="attendance-summary-card">
              <CheckCircle2 size={19} />
              <div>
                <strong>60</strong>
                <span>Present</span>
              </div>
            </div>

            <div className="attendance-summary-card attendance-absent">
              <CalendarDays size={19} />
              <div>
                <strong>5</strong>
                <span>Absent</span>
              </div>
            </div>

            <div className="attendance-summary-card attendance-total">
              <BookOpen size={19} />
              <div>
                <strong>65</strong>
                <span>Total Days</span>
              </div>
            </div>
          </div>

          <div className="attendance-list">
            {attendance.map((item) => (
              <div
                className="attendance-row"
                key={item.month}
              >
                <div>
                  <strong>{item.month}</strong>
                  <span>
                    {item.present} of {item.total} days
                  </span>
                </div>

                <div className="attendance-progress">
                  <div
                    style={{
                      width: item.percentage,
                    }}
                  ></div>
                </div>

                <strong>{item.percentage}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement / Safety Card */}
      <section className="child-bottom-highlight">
        <div className="child-highlight-icon">
          <Award size={25} />
        </div>

        <div>
          <span>Student Safety</span>

          <h2>
            Aarav's transportation profile is up to date.
          </h2>

          <p>
            Bus assignment, pickup point and emergency contact
            information are currently available to the school
            transportation team.
          </p>
        </div>

        <div className="child-highlight-check">
          <ShieldCheck size={22} />
          <span>Verified</span>
        </div>
      </section>
    </div>
  );
};

const MailIcon = () => {
  return (
    <span className="custom-mail-icon">
      @
    </span>
  );
};

export default ChildDetails;