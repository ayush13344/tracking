import { useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  BusFront,
  Camera,
  CheckCircle2,
  Clock3,
  MapPin,
  QrCode,
  ScanLine,
  ShieldCheck,
  UserRound,
  Users,
  XCircle,
} from "lucide-react";

const QRScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const [scannerActive, setScannerActive] = useState(true);

  const recentScans = [
    {
      id: "STU-1001",
      name: "Aarav Sharma",
      className: "8-A",
      time: "08:12 AM",
      status: "Verified",
      pickup: "Green Park",
    },
    {
      id: "STU-1002",
      name: "Ananya Verma",
      className: "7-B",
      time: "08:15 AM",
      status: "Verified",
      pickup: "City Center",
    },
    {
      id: "STU-1003",
      name: "Vivaan Gupta",
      className: "9-A",
      time: "08:20 AM",
      status: "Verified",
      pickup: "Thatipur",
    },
  ];

  const demoStudent = {
    id: "STU-1004",
    name: "Diya Jain",
    className: "6-C",
    pickup: "Lashkar",
    bus: "BUS-102",
    parent: "Pooja Jain",
    status: "Verified",
  };

  const handleDemoScan = () => {
    setScannerActive(false);
    setScanResult(demoStudent);
  };

  const handleScanAgain = () => {
    setScanResult(null);
    setScannerActive(true);
  };

  return (
    <div className="driver-page qr-scanner-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Driver Portal</span>

          <h1>QR Scanner</h1>

          <p>
            Scan a student's QR code to verify boarding and
            update their journey record.
          </p>
        </div>

        <div className="page-header-actions">
          <div className="qr-bus-indicator">
            <BusFront size={17} />
            <span>BUS-102</span>
          </div>

          <div className="qr-scanner-status">
            <span></span>
            Scanner Ready
          </div>
        </div>
      </div>

      {/* Scanner Stats */}
      <section className="qr-scanner-stats-grid">
        <div className="qr-stat-card qr-stat-purple">
          <div className="qr-stat-icon">
            <Users size={21} />
          </div>

          <div>
            <span>Assigned Students</span>
            <strong>32</strong>
            <small>Today's route</small>
          </div>
        </div>

        <div className="qr-stat-card qr-stat-mint">
          <div className="qr-stat-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Verified Today</span>
            <strong>28</strong>
            <small>Boarding confirmed</small>
          </div>
        </div>

        <div className="qr-stat-card qr-stat-orange">
          <div className="qr-stat-icon">
            <Clock3 size={21} />
          </div>

          <div>
            <span>Pending</span>
            <strong>4</strong>
            <small>Awaiting verification</small>
          </div>
        </div>

        <div className="qr-stat-card qr-stat-blue">
          <div className="qr-stat-icon">
            <ScanLine size={21} />
          </div>

          <div>
            <span>Scans Today</span>
            <strong>28</strong>
            <small>Successful scans</small>
          </div>
        </div>
      </section>

      {/* Scanner + Instructions */}
      <section className="qr-scanner-main-grid">
        {/* Scanner */}
        <div className="dashboard-panel qr-scanner-panel">
          <div className="panel-header">
            <div>
              <span>Student Verification</span>
              <h2>Scan Student QR</h2>
            </div>

            <div className="qr-panel-icon">
              <QrCode size={21} />
            </div>
          </div>

          {!scanResult ? (
            <>
              <div
                className={`qr-camera-area ${
                  scannerActive
                    ? "qr-camera-active"
                    : "qr-camera-inactive"
                }`}
              >
                <div className="qr-camera-top">
                  <div className="qr-camera-label">
                    <Camera size={16} />
                    Camera Preview
                  </div>

                  <span className="qr-camera-live">
                    <span></span>
                    LIVE
                  </span>
                </div>

                <div className="qr-scan-frame">
                  <span className="qr-corner qr-corner-tl"></span>
                  <span className="qr-corner qr-corner-tr"></span>
                  <span className="qr-corner qr-corner-bl"></span>
                  <span className="qr-corner qr-corner-br"></span>

                  {scannerActive && (
                    <div className="qr-scan-line"></div>
                  )}

                  <div className="qr-center-icon">
                    <QrCode size={42} />
                  </div>
                </div>

                <p className="qr-camera-instruction">
                  Position the student's QR code inside the
                  frame
                </p>
              </div>

              <button
                type="button"
                className="qr-start-scan-button"
                onClick={handleDemoScan}
              >
                <ScanLine size={19} />
                Scan QR Code
              </button>

              <p className="qr-demo-note">
                <AlertCircle size={14} />
                Frontend demo: clicking Scan QR Code simulates a
                successful scan.
              </p>
            </>
          ) : (
            <div className="qr-scan-result">
              <div className="qr-result-success">
                <div className="qr-result-icon">
                  <CheckCircle2 size={34} />
                </div>

                <span>QR Code Verified</span>
                <h3>Student Successfully Verified</h3>

                <p>
                  The student's boarding information has been
                  matched with today's assigned route.
                </p>
              </div>

              <div className="qr-student-result-card">
                <div className="qr-result-avatar">
                  <UserRound size={28} />
                </div>

                <div className="qr-result-student-info">
                  <span>{scanResult.id}</span>
                  <h3>{scanResult.name}</h3>
                  <p>Class {scanResult.className}</p>
                </div>

                <span className="qr-verified-badge">
                  <CheckCircle2 size={14} />
                  Verified
                </span>
              </div>

              <div className="qr-result-details">
                <div>
                  <MapPin size={17} />

                  <div>
                    <span>Pickup Point</span>
                    <strong>{scanResult.pickup}</strong>
                  </div>
                </div>

                <div>
                  <BusFront size={17} />

                  <div>
                    <span>Assigned Bus</span>
                    <strong>{scanResult.bus}</strong>
                  </div>
                </div>

                <div>
                  <UserRound size={17} />

                  <div>
                    <span>Parent / Guardian</span>
                    <strong>{scanResult.parent}</strong>
                  </div>
                </div>
              </div>

              <div className="qr-result-action">
                <button
                  type="button"
                  className="qr-confirm-button"
                  onClick={() =>
                    console.log(
                      "Boarding confirmed:",
                      scanResult.id
                    )
                  }
                >
                  <CheckCircle2 size={18} />
                  Confirm Boarding
                </button>

                <button
                  type="button"
                  className="qr-scan-again-button"
                  onClick={handleScanAgain}
                >
                  <ArrowLeft size={17} />
                  Scan Another
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="dashboard-panel qr-instructions-panel">
          <div className="panel-header">
            <div>
              <span>How It Works</span>
              <h2>Scan Instructions</h2>
            </div>

            <ShieldCheck size={21} />
          </div>

          <div className="qr-instruction-list">
            <div className="qr-instruction-item">
              <div className="qr-instruction-number">01</div>

              <div>
                <h3>Ask the student to show their QR</h3>

                <p>
                  Each student has a unique QR code linked to
                  their transportation profile.
                </p>
              </div>
            </div>

            <div className="qr-instruction-item">
              <div className="qr-instruction-number">02</div>

              <div>
                <h3>Position the QR inside the frame</h3>

                <p>
                  Keep the QR code clearly visible and centered
                  inside the scanner area.
                </p>
              </div>
            </div>

            <div className="qr-instruction-item">
              <div className="qr-instruction-number">03</div>

              <div>
                <h3>Verify student details</h3>

                <p>
                  Check the student's name, class and pickup
                  point before confirming boarding.
                </p>
              </div>
            </div>

            <div className="qr-instruction-item">
              <div className="qr-instruction-number">04</div>

              <div>
                <h3>Confirm boarding</h3>

                <p>
                  Confirm the student's boarding record after
                  successful verification.
                </p>
              </div>
            </div>
          </div>

          <div className="qr-safety-tip">
            <ShieldCheck size={19} />

            <div>
              <strong>Safety Tip</strong>

              <p>
                Always verify the student's identity before
                marking them as boarded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Scans */}
      <section className="dashboard-panel qr-recent-scans-panel">
        <div className="panel-header">
          <div>
            <span>Activity</span>
            <h2>Recent Scans</h2>
          </div>

          <span className="qr-recent-count">
            {recentScans.length} Recent
          </span>
        </div>

        <div className="qr-recent-list">
          {recentScans.map((student) => (
            <div
              className="qr-recent-row"
              key={student.id}
            >
              <div className="qr-recent-avatar">
                <UserRound size={18} />
              </div>

              <div className="qr-recent-student">
                <strong>{student.name}</strong>

                <span>
                  {student.id} · Class {student.className}
                </span>
              </div>

              <div className="qr-recent-pickup">
                <MapPin size={15} />
                <span>{student.pickup}</span>
              </div>

              <div className="qr-recent-time">
                <Clock3 size={14} />
                {student.time}
              </div>

              <span className="qr-recent-status">
                <CheckCircle2 size={14} />
                {student.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Scanner Notice */}
      <div className="driver-safety-notice qr-scanner-notice">
        <div className="driver-safety-icon">
          <ShieldCheck size={21} />
        </div>

        <div>
          <strong>Keep student information secure</strong>

          <p>
            Use the scanner only for today's assigned students
            and confirm each boarding record carefully.
          </p>
        </div>

        <CheckCircle2 size={19} />
      </div>
    </div>
  );
};

export default QRScanner;