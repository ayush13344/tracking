import {
  ArrowRight,
  BusFront,
  CheckCircle2,
  Clock3,
  Flag,
  MapPin,
  Navigation,
  Route as RouteIcon,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const Route = () => {
  const routeStops = [
    {
      id: 1,
      name: "Central Bus Depot",
      address: "Main Transport Depot",
      time: "07:35 AM",
      students: 0,
      status: "Completed",
      type: "start",
    },
    {
      id: 2,
      name: "Green Park",
      address: "Green Park Main Road",
      time: "07:52 AM",
      students: 8,
      status: "Completed",
      type: "pickup",
    },
    {
      id: 3,
      name: "City Center",
      address: "City Center Bus Stop",
      time: "08:15 AM",
      students: 7,
      status: "Completed",
      type: "pickup",
    },
    {
      id: 4,
      name: "Thatipur",
      address: "Thatipur Main Square",
      time: "08:20 AM",
      students: 6,
      status: "Completed",
      type: "pickup",
    },
    {
      id: 5,
      name: "Lashkar",
      address: "Lashkar Market Road",
      time: "08:24 AM",
      students: 5,
      status: "Current",
      type: "pickup",
    },
    {
      id: 6,
      name: "University Road",
      address: "University Road Crossing",
      time: "08:32 AM",
      students: 6,
      status: "Upcoming",
      type: "pickup",
    },
    {
      id: 7,
      name: "EduTrack Public School",
      address: "School Main Gate",
      time: "08:45 AM",
      students: 0,
      status: "Upcoming",
      type: "destination",
    },
  ];

  const completedStops = routeStops.filter(
    (stop) => stop.status === "Completed"
  ).length;

  const progress = Math.round(
    (completedStops / routeStops.length) * 100
  );

  return (
    <div className="driver-page driver-route-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Driver Portal</span>

          <h1>My Route</h1>

          <p>
            Follow today's assigned route and keep track of
            every scheduled stop.
          </p>
        </div>

        <div className="page-header-actions">
          <div className="route-live-status">
            <span></span>
            Route Active
          </div>

          <button
            type="button"
            className="route-navigation-button"
            onClick={() =>
              console.log("Navigation started")
            }
          >
            <Navigation size={17} />
            Start Navigation
          </button>
        </div>
      </div>

      {/* Route Hero */}
      <section className="driver-route-hero">
        <div className="driver-route-hero-main">
          <div className="driver-route-hero-icon">
            <RouteIcon size={27} />
          </div>

          <div>
            <span>Today's Assigned Route</span>

            <h2>Route A</h2>

            <p>
              Central Bus Depot
              <ArrowRight size={15} />
              EduTrack Public School
            </p>
          </div>
        </div>

        <div className="driver-route-hero-meta">
          <div>
            <span>Bus</span>
            <strong>
              <BusFront size={16} />
              BUS-102
            </strong>
          </div>

          <div>
            <span>Students</span>
            <strong>
              <Users size={16} />
              32
            </strong>
          </div>

          <div>
            <span>Duration</span>
            <strong>
              <Clock3 size={16} />
              70 min
            </strong>
          </div>
        </div>
      </section>

      {/* Route Progress */}
      <section className="dashboard-panel driver-route-progress-panel">
        <div className="panel-header">
          <div>
            <span>Journey Progress</span>
            <h2>Route Completion</h2>
          </div>

          <div className="driver-route-progress-value">
            {progress}%
          </div>
        </div>

        <div className="driver-route-progress-track">
          <div
            className="driver-route-progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <div className="driver-route-progress-footer">
          <span>
            <CheckCircle2 size={15} />
            {completedStops} of {routeStops.length} stops
            completed
          </span>

          <span>
            <MapPin size={15} />
            Current: Lashkar
          </span>

          <span>
            <Flag size={15} />
            Destination: School
          </span>
        </div>
      </section>

      {/* Main Route Layout */}
      <section className="driver-route-main-grid">
        {/* Route Map */}
        <div className="dashboard-panel driver-route-map-panel">
          <div className="panel-header">
            <div>
              <span>Live Route View</span>
              <h2>Route Map</h2>
            </div>

            <div className="driver-route-map-live">
              <Zap size={14} />
              Live
            </div>
          </div>

          <div className="driver-route-map">
            <div className="route-map-grid"></div>

            {/* Decorative roads */}
            <div className="route-map-road route-road-one"></div>
            <div className="route-map-road route-road-two"></div>
            <div className="route-map-road route-road-three"></div>

            {/* Route path */}
            <div className="route-map-path">
              <span className="map-point map-point-start">
                <BusFront size={15} />
              </span>

              <span className="map-point map-point-one">
                1
              </span>

              <span className="map-point map-point-two">
                2
              </span>

              <span className="map-point map-point-three">
                3
              </span>

              <span className="map-point map-point-current">
                <Navigation size={15} />
              </span>

              <span className="map-point map-point-five">
                6
              </span>

              <span className="map-point map-point-school">
                <Flag size={15} />
              </span>
            </div>

            {/* Current Bus */}
            <div className="route-map-bus">
              <BusFront size={18} />
            </div>

            <div className="route-map-label route-label-current">
              <strong>Lashkar</strong>
              <span>Current Location</span>
            </div>

            <div className="route-map-label route-label-school">
              <strong>School</strong>
              <span>08:45 AM</span>
            </div>

            <div className="route-map-overlay">
              <div>
                <span>Current Location</span>
                <strong>Lashkar</strong>
              </div>

              <div className="route-map-overlay-status">
                <span></span>
                Live
              </div>
            </div>
          </div>

          <div className="route-map-footer">
            <div>
              <Navigation size={15} />
              <span>GPS accuracy: High</span>
            </div>

            <span>Updated 2 min ago</span>
          </div>
        </div>

        {/* Stop List */}
        <div className="dashboard-panel driver-route-stops-panel">
          <div className="panel-header">
            <div>
              <span>Route Schedule</span>
              <h2>All Stops</h2>
            </div>

            <span className="route-stop-count">
              {routeStops.length} Stops
            </span>
          </div>

          <div className="driver-route-stop-list">
            {routeStops.map((stop, index) => (
              <div
                className={`driver-route-stop-item ${
                  stop.status === "Completed"
                    ? "route-stop-completed"
                    : stop.status === "Current"
                    ? "route-stop-current"
                    : "route-stop-upcoming"
                }`}
                key={stop.id}
              >
                <div className="route-stop-marker">
                  {stop.status === "Completed" ? (
                    <CheckCircle2 size={17} />
                  ) : stop.status === "Current" ? (
                    <Navigation size={17} />
                  ) : stop.type === "destination" ? (
                    <Flag size={16} />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>

                {index !== routeStops.length - 1 && (
                  <div className="route-stop-connector"></div>
                )}

                <div className="route-stop-content">
                  <div className="route-stop-heading">
                    <div>
                      <strong>{stop.name}</strong>

                      {stop.status === "Current" && (
                        <span className="route-current-badge">
                          Current
                        </span>
                      )}
                    </div>

                    <span className="route-stop-time">
                      {stop.time}
                    </span>
                  </div>

                  <p>
                    <MapPin size={13} />
                    {stop.address}
                  </p>

                  <div className="route-stop-footer">
                    <span>
                      <Users size={13} />
                      {stop.students > 0
                        ? `${stop.students} students`
                        : stop.type === "start"
                        ? "Starting point"
                        : "School arrival"}
                    </span>

                    <span
                      className={`route-stop-status ${
                        stop.status === "Completed"
                          ? "stop-status-completed"
                          : stop.status === "Current"
                          ? "stop-status-current"
                          : "stop-status-upcoming"
                      }`}
                    >
                      {stop.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Stop + Route Details */}
      <section className="driver-route-bottom-grid">
        {/* Next Stop */}
        <div className="dashboard-panel next-stop-panel">
          <div className="panel-header">
            <div>
              <span>Upcoming</span>
              <h2>Next Stop</h2>
            </div>

            <Navigation size={21} />
          </div>

          <div className="next-stop-main">
            <div className="next-stop-icon">
              <MapPin size={26} />
            </div>

            <div>
              <span>08:32 AM</span>
              <h3>University Road</h3>
              <p>University Road Crossing</p>
            </div>
          </div>

          <div className="next-stop-stats">
            <div>
              <Users size={16} />
              <span>6 Students</span>
            </div>

            <div>
              <Clock3 size={16} />
              <span>8 min away</span>
            </div>
          </div>

          <button
            type="button"
            className="next-stop-button"
            onClick={() =>
              console.log("Next stop navigation")
            }
          >
            <Navigation size={16} />
            Navigate to Stop
          </button>
        </div>

        {/* Route Details */}
        <div className="dashboard-panel route-details-panel">
          <div className="panel-header">
            <div>
              <span>Route Information</span>
              <h2>Route Details</h2>
            </div>

            <RouteIcon size={21} />
          </div>

          <div className="route-details-list">
            <div>
              <div className="route-details-icon">
                <Clock3 size={17} />
              </div>

              <div>
                <span>Departure</span>
                <strong>07:35 AM</strong>
              </div>
            </div>

            <div>
              <div className="route-details-icon route-detail-blue">
                <Flag size={17} />
              </div>

              <div>
                <span>Estimated Arrival</span>
                <strong>08:45 AM</strong>
              </div>
            </div>

            <div>
              <div className="route-details-icon route-detail-mint">
                <MapPin size={17} />
              </div>

              <div>
                <span>Total Distance</span>
                <strong>18.6 km</strong>
              </div>
            </div>

            <div>
              <div className="route-details-icon route-detail-orange">
                <Users size={17} />
              </div>

              <div>
                <span>Assigned Students</span>
                <strong>32 Students</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <div className="driver-safety-notice">
        <div className="driver-safety-icon">
          <ShieldCheck size={21} />
        </div>

        <div>
          <strong>
            Follow the assigned route for student safety
          </strong>

          <p>
            Use the approved route and report any unexpected
            road or transportation issue to the administrator.
          </p>
        </div>

        <CheckCircle2 size={19} />
      </div>
    </div>
  );
};

export default Route;