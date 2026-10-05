import { useState } from "react";
import {
  AlertTriangle,
  Ambulance,
  ArrowRight,
  BusFront,
  CheckCircle2,
  Clock3,
  FileText,
  Flame,
  MapPin,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Siren,
  UserRound,
  Users,
  XCircle,
} from "lucide-react";

const Emergency = () => {
  const [selectedType, setSelectedType] = useState("");
  const [showConfirmation, setShowConfirmation] =
    useState(false);

  const emergencyContacts = [
    {
      title: "Transport Administrator",
      name: "Mr. Amit Verma",
      phone: "+91 98765 10001",
      icon: UserRound,
      type: "admin",
    },
    {
      title: "School Emergency Desk",
      name: "EduTrack Public School",
      phone: "+91 98765 10002",
      icon: Phone,
      type: "school",
    },
    {
      title: "Emergency Services",
      name: "Emergency Helpline",
      phone: "112",
      icon: Ambulance,
      type: "emergency",
    },
  ];

  const incidentTypes = [
    {
      id: "medical",
      label: "Medical Emergency",
      description: "Student or staff medical issue",
      icon: Ambulance,
    },
    {
      id: "vehicle",
      label: "Vehicle Issue",
      description: "Bus breakdown or mechanical issue",
      icon: BusFront,
    },
    {
      id: "road",
      label: "Road / Traffic Issue",
      description: "Accident, traffic or road blockage",
      icon: MapPin,
    },
    {
      id: "fire",
      label: "Fire / Safety Threat",
      description: "Fire or immediate safety concern",
      icon: Flame,
    },
    {
      id: "student",
      label: "Student Safety Issue",
      description: "Student-related safety concern",
      icon: ShieldAlert,
    },
    {
      id: "other",
      label: "Other Emergency",
      description: "Any other urgent situation",
      icon: AlertTriangle,
    },
  ];

  const handleEmergencyAlert = () => {
    setShowConfirmation(true);
    console.log("Emergency alert triggered");
  };

  const handleIncidentSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const incidentData = {
      type: selectedType,
      location: formData.get("location"),
      description: formData.get("description"),
    };

    console.log("Incident Report:", incidentData);

    event.currentTarget.reset();
    setSelectedType("");
    alert("Incident report submitted successfully.");
  };

  return (
    <div className="driver-page driver-emergency-page">
      {/* Page Header */}
      <div className="page-header emergency-page-header">
        <div>
          <span className="page-eyebrow">Driver Portal</span>

          <h1>Emergency & Safety</h1>

          <p>
            Get immediate assistance and report transportation
            emergencies safely.
          </p>
        </div>

        <div className="page-header-actions">
          <div className="emergency-page-status">
            <ShieldCheck size={17} />
            Safety Center
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <section className="emergency-alert-banner">
        <div className="emergency-alert-content">
          <div className="emergency-alert-icon">
            <Siren size={31} />
          </div>

          <div>
            <span>Immediate Assistance</span>

            <h2>Need Emergency Help?</h2>

            <p>
              If there is an immediate threat to student or
              driver safety, use the emergency alert below and
              move to a safe location when possible.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="emergency-alert-button"
          onClick={handleEmergencyAlert}
        >
          <Siren size={20} />
          Send Emergency Alert
        </button>
      </section>

      {/* Confirmation */}
      {showConfirmation && (
        <div className="emergency-confirmation">
          <div className="emergency-confirmation-icon">
            <CheckCircle2 size={22} />
          </div>

          <div>
            <strong>Emergency alert sent</strong>

            <p>
              The transport administrator has been notified
              with your current journey information.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowConfirmation(false)}
          >
            <XCircle size={18} />
          </button>
        </div>
      )}

      {/* Current Journey Safety */}
      <section className="emergency-current-grid">
        <div className="dashboard-panel emergency-journey-panel">
          <div className="panel-header">
            <div>
              <span>Current Journey</span>
              <h2>Journey Safety Information</h2>
            </div>

            <BusFront size={21} />
          </div>

          <div className="emergency-journey-status">
            <div className="emergency-journey-icon">
              <BusFront size={25} />
            </div>

            <div>
              <span>Active Vehicle</span>
              <h3>BUS-102</h3>
              <p>Route A · Morning Journey</p>
            </div>

            <div className="emergency-active-badge">
              <span></span>
              Active
            </div>
          </div>

          <div className="emergency-journey-details">
            <div>
              <MapPin size={17} />

              <div>
                <span>Current Location</span>
                <strong>Lashkar</strong>
              </div>
            </div>

            <div>
              <Users size={17} />

              <div>
                <span>Students Onboard</span>
                <strong>28 Students</strong>
              </div>
            </div>

            <div>
              <UserRound size={17} />

              <div>
                <span>Driver</span>
                <strong>Rahul Sharma</strong>
              </div>
            </div>

            <div>
              <Clock3 size={17} />

              <div>
                <span>Journey Started</span>
                <strong>07:35 AM</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Emergency Actions */}
        <div className="dashboard-panel emergency-quick-panel">
          <div className="panel-header">
            <div>
              <span>Quick Contact</span>
              <h2>Emergency Numbers</h2>
            </div>

            <Phone size={21} />
          </div>

          <div className="emergency-quick-list">
            <a
              href="tel:112"
              className="emergency-quick-item emergency-quick-critical"
            >
              <div className="emergency-quick-icon">
                <Siren size={19} />
              </div>

              <div>
                <span>Emergency Services</span>
                <strong>112</strong>
              </div>

              <ArrowRight size={17} />
            </a>

            <a
              href="tel:+919876510001"
              className="emergency-quick-item"
            >
              <div className="emergency-quick-icon emergency-icon-purple">
                <UserRound size={19} />
              </div>

              <div>
                <span>Transport Admin</span>
                <strong>+91 98765 10001</strong>
              </div>

              <ArrowRight size={17} />
            </a>

            <a
              href="tel:+919876510002"
              className="emergency-quick-item"
            >
              <div className="emergency-quick-icon emergency-icon-blue">
                <Phone size={19} />
              </div>

              <div>
                <span>School Emergency Desk</span>
                <strong>+91 98765 10002</strong>
              </div>

              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Incident Report */}
      <section className="dashboard-panel emergency-report-panel">
        <div className="panel-header">
          <div>
            <span>Incident Reporting</span>
            <h2>Report an Emergency or Issue</h2>
          </div>

          <FileText size={21} />
        </div>

        <p className="emergency-report-description">
          Select the type of incident and provide the relevant
          details. The transport administrator will receive the
          report.
        </p>

        <form
          className="emergency-report-form"
          onSubmit={handleIncidentSubmit}
        >
          <div className="emergency-form-section">
            <label>Select Incident Type</label>

            <div className="incident-type-grid">
              {incidentTypes.map((incident) => {
                const Icon = incident.icon;

                return (
                  <button
                    type="button"
                    key={incident.id}
                    className={`incident-type-card ${
                      selectedType === incident.id
                        ? "incident-type-selected"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedType(incident.id)
                    }
                  >
                    <div className="incident-type-icon">
                      <Icon size={20} />
                    </div>

                    <div>
                      <strong>{incident.label}</strong>

                      <span>{incident.description}</span>
                    </div>

                    {selectedType === incident.id && (
                      <CheckCircle2
                        size={17}
                        className="incident-selected-icon"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="emergency-form-grid">
            <div className="emergency-form-field">
              <label htmlFor="emergency-location">
                Current Location
              </label>

              <div className="emergency-input-wrapper">
                <MapPin size={17} />

                <input
                  id="emergency-location"
                  name="location"
                  type="text"
                  placeholder="Enter your current location"
                  defaultValue="Lashkar, Route A"
                  required
                />
              </div>
            </div>

            <div className="emergency-form-field">
              <label htmlFor="emergency-bus">
                Vehicle
              </label>

              <div className="emergency-input-wrapper">
                <BusFront size={17} />

                <input
                  id="emergency-bus"
                  type="text"
                  value="BUS-102"
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="emergency-form-field emergency-description-field">
            <label htmlFor="emergency-description">
              Incident Description
            </label>

            <textarea
              id="emergency-description"
              name="description"
              rows="5"
              placeholder="Describe what happened and any immediate safety concerns..."
              required
            ></textarea>
          </div>

          <div className="emergency-form-actions">
            <span>
              <ShieldCheck size={15} />
              Your report will be shared with the transport
              administrator.
            </span>

            <button
              type="submit"
              className="emergency-submit-button"
              disabled={!selectedType}
            >
              <FileText size={17} />
              Submit Incident Report
            </button>
          </div>
        </form>
      </section>

      {/* Emergency Contacts */}
      <section className="dashboard-panel emergency-contacts-panel">
        <div className="panel-header">
          <div>
            <span>Support Network</span>
            <h2>Emergency Contacts</h2>
          </div>

          <Phone size={21} />
        </div>

        <div className="emergency-contacts-grid">
          {emergencyContacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <div
                className={`emergency-contact-card emergency-contact-${contact.type}`}
                key={contact.title}
              >
                <div className="emergency-contact-icon">
                  <Icon size={21} />
                </div>

                <div className="emergency-contact-info">
                  <span>{contact.title}</span>
                  <strong>{contact.name}</strong>
                  <a href={`tel:${contact.phone}`}>
                    <Phone size={14} />
                    {contact.phone}
                  </a>
                </div>

                <a
                  href={`tel:${contact.phone}`}
                  className="emergency-call-button"
                >
                  <Phone size={16} />
                  Call
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Safety Steps */}
      <section className="dashboard-panel emergency-safety-panel">
        <div className="panel-header">
          <div>
            <span>Emergency Procedure</span>
            <h2>What To Do During an Emergency</h2>
          </div>

          <ShieldAlert size={21} />
        </div>

        <div className="emergency-safety-steps">
          <div className="emergency-safety-step">
            <div className="emergency-step-number">01</div>

            <div>
              <strong>Stay calm and secure the bus</strong>

              <p>
                Stop at the safest available location and
                keep students calm.
              </p>
            </div>
          </div>

          <div className="emergency-safety-step">
            <div className="emergency-step-number">02</div>

            <div>
              <strong>Check student safety</strong>

              <p>
                Make sure students remain supervised and away
                from immediate danger.
              </p>
            </div>
          </div>

          <div className="emergency-safety-step">
            <div className="emergency-step-number">03</div>

            <div>
              <strong>Contact emergency services</strong>

              <p>
                For an immediate emergency, contact the
                appropriate emergency service.
              </p>
            </div>
          </div>

          <div className="emergency-safety-step">
            <div className="emergency-step-number">04</div>

            <div>
              <strong>Notify the transport administrator</strong>

              <p>
                Send an emergency alert and provide your
                location and incident details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Safety Notice */}
      <div className="driver-safety-notice emergency-final-notice">
        <div className="driver-safety-icon">
          <ShieldCheck size={21} />
        </div>

        <div>
          <strong>Student safety comes first</strong>

          <p>
            In any emergency, prioritize the safety of students,
            move away from danger when possible and contact
            emergency services when necessary.
          </p>
        </div>

        <CheckCircle2 size={19} />
      </div>
    </div>
  );
};

export default Emergency;