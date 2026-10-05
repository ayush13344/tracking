import {
  CheckCircle2,
  Circle,
  MapPin,
  BusFront,
  School,
} from "lucide-react";

const JourneyTimeline = ({ events = [] }) => {
  const defaultEvents = [
    {
      title: "Journey Started",
      location: "Central Bus Depot",
      time: "07:35 AM",
      type: "start",
      completed: true,
    },
    {
      title: "Students Picked Up",
      location: "Green Park",
      time: "07:52 AM",
      type: "pickup",
      completed: true,
    },
    {
      title: "Route in Progress",
      location: "City Center",
      time: "08:15 AM",
      type: "route",
      completed: true,
    },
    {
      title: "Next Stop",
      location: "University Road",
      time: "08:32 AM",
      type: "stop",
      completed: false,
    },
    {
      title: "School Arrival",
      location: "EduTrack Public School",
      time: "08:45 AM",
      type: "school",
      completed: false,
    },
  ];

  const journeyEvents = events.length ? events : defaultEvents;

  const getIcon = (type, completed) => {
    if (completed) {
      return <CheckCircle2 size={20} />;
    }

    switch (type) {
      case "start":
        return <BusFront size={20} />;
      case "pickup":
        return <MapPin size={20} />;
      case "school":
        return <School size={20} />;
      default:
        return <Circle size={20} />;
    }
  };

  return (
    <div className="journey-timeline">
      {journeyEvents.map((event, index) => (
        <div
          className={`journey-timeline-item ${
            event.completed ? "completed" : "upcoming"
          }`}
          key={`${event.title}-${index}`}
        >
          <div className="journey-icon">
            {getIcon(event.type, event.completed)}
          </div>

          <div className="journey-content">
            <div className="journey-content-top">
              <div>
                <h4>{event.title}</h4>
                <p>{event.location}</p>
              </div>

              <span>{event.time}</span>
            </div>
          </div>

          {index !== journeyEvents.length - 1 && (
            <div className="journey-connector"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JourneyTimeline;