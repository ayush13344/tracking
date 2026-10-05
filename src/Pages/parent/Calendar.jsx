import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BusFront,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  School,
  Star,
} from "lucide-react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(
    new Date(2026, 9, 1)
  );

  const events = [
    {
      date: "2026-10-02",
      title: "Gandhi Jayanti",
      type: "holiday",
      description: "School and transportation services closed.",
    },
    {
      date: "2026-10-08",
      title: "Parent-Teacher Meeting",
      type: "school",
      description: "PTM from 10:00 AM to 1:00 PM.",
    },
    {
      date: "2026-10-12",
      title: "Bus Maintenance",
      type: "transport",
      description: "BUS-102 scheduled for routine maintenance.",
    },
    {
      date: "2026-10-20",
      title: "Diwali Holiday",
      type: "holiday",
      description: "School and transportation services closed.",
    },
    {
      date: "2026-10-21",
      title: "Diwali Holiday",
      type: "holiday",
      description: "School and transportation services closed.",
    },
    {
      date: "2026-10-24",
      title: "School Activity Day",
      type: "school",
      description: "Special activity schedule for students.",
    },
    {
      date: "2026-10-31",
      title: "Monthly Transport Review",
      type: "transport",
      description: "Monthly transportation schedule review.",
    },
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const calendarDays = useMemo(() => {
    const days = [];

    for (let i = 0; i < firstDay; i += 1) {
      days.push(null);
    }

    for (let day = 1; day <= totalDays; day += 1) {
      days.push(day);
    }

    return days;
  }, [firstDay, totalDays]);

  const getDateString = (day) => {
    if (!day) return "";

    return `${year}-${String(month + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;
  };

  const getEventsForDay = (day) => {
    const dateString = getDateString(day);

    return events.filter((event) => event.date === dateString);
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(year, month - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(year, month + 1, 1)
    );
  };

  const goToToday = () => {
    setCurrentDate(new Date(2026, 9, 1));
  };

  const upcomingEvents = events
    .filter((event) => new Date(event.date) >= new Date(2026, 9, 1))
    .slice(0, 5);

  const getEventIcon = (type) => {
    if (type === "holiday") {
      return <Star size={15} />;
    }

    if (type === "transport") {
      return <BusFront size={15} />;
    }

    return <School size={15} />;
  };

  const getEventClass = (type) => {
    if (type === "holiday") {
      return "calendar-event-holiday";
    }

    if (type === "transport") {
      return "calendar-event-transport";
    }

    return "calendar-event-school";
  };

  return (
    <div className="parent-page calendar-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">Parent Portal</span>

          <h1>Calendar</h1>

          <p>
            View school holidays, transportation schedules and
            important upcoming events.
          </p>
        </div>
      </div>

      {/* Calendar Stats */}
      <section className="calendar-summary-grid">
        <div className="calendar-summary-card calendar-summary-purple">
          <div className="calendar-summary-icon">
            <CalendarDays size={21} />
          </div>

          <div>
            <span>This Month</span>
            <strong>{monthNames[month]}</strong>
            <small>{year}</small>
          </div>
        </div>

        <div className="calendar-summary-card calendar-summary-orange">
          <div className="calendar-summary-icon">
            <Star size={21} />
          </div>

          <div>
            <span>Holidays</span>
            <strong>
              {
                events.filter(
                  (event) =>
                    event.type === "holiday" &&
                    new Date(event.date).getMonth() === month
                ).length
              }
            </strong>
            <small>School holidays</small>
          </div>
        </div>

        <div className="calendar-summary-card calendar-summary-blue">
          <div className="calendar-summary-icon">
            <School size={21} />
          </div>

          <div>
            <span>School Events</span>
            <strong>
              {
                events.filter(
                  (event) =>
                    event.type === "school" &&
                    new Date(event.date).getMonth() === month
                ).length
              }
            </strong>
            <small>Important events</small>
          </div>
        </div>

        <div className="calendar-summary-card calendar-summary-mint">
          <div className="calendar-summary-icon">
            <BusFront size={21} />
          </div>

          <div>
            <span>Transport Events</span>
            <strong>
              {
                events.filter(
                  (event) =>
                    event.type === "transport" &&
                    new Date(event.date).getMonth() === month
                ).length
              }
            </strong>
            <small>Bus schedules</small>
          </div>
        </div>
      </section>

      {/* Main Calendar */}
      <section className="calendar-main-grid">
        <div className="calendar-panel">
          {/* Calendar Header */}
          <div className="calendar-panel-header">
            <div>
              <span>Monthly Schedule</span>

              <h2>
                {monthNames[month]} {year}
              </h2>
            </div>

            <div className="calendar-navigation">
              <button
                type="button"
                onClick={goToPreviousMonth}
                title="Previous month"
              >
                <ArrowLeft size={17} />
              </button>

              <button
                type="button"
                className="calendar-today-button"
                onClick={goToToday}
              >
                Today
              </button>

              <button
                type="button"
                onClick={goToNextMonth}
                title="Next month"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          {/* Week Header */}
          <div className="calendar-week-header">
            {weekDays.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="calendar-grid">
            {calendarDays.map((day, index) => {
              const dayEvents = getEventsForDay(day);

              return (
                <div
                  className={`calendar-day ${
                    !day ? "calendar-day-empty" : ""
                  } ${
                    day === 5
                      ? "calendar-day-current"
                      : ""
                  }`}
                  key={`${day}-${index}`}
                >
                  {day && (
                    <>
                      <div className="calendar-day-number">
                        <span>{day}</span>

                        {dayEvents.length > 0 && (
                          <div className="calendar-event-dots">
                            {dayEvents
                              .slice(0, 3)
                              .map((event) => (
                                <span
                                  className={`calendar-dot ${
                                    event.type
                                  }`}
                                  key={event.title}
                                ></span>
                              ))}
                          </div>
                        )}
                      </div>

                      <div className="calendar-day-events">
                        {dayEvents
                          .slice(0, 2)
                          .map((event) => (
                            <div
                              className={`calendar-event ${
                                getEventClass(event.type)
                              }`}
                              key={event.title}
                              title={event.description}
                            >
                              {getEventIcon(event.type)}
                              <span>{event.title}</span>
                            </div>
                          ))}

                        {dayEvents.length > 2 && (
                          <span className="calendar-more-events">
                            +{dayEvents.length - 2} more
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="calendar-legend">
            <div>
              <span className="legend-dot holiday"></span>
              <span>Holiday</span>
            </div>

            <div>
              <span className="legend-dot school"></span>
              <span>School Event</span>
            </div>

            <div>
              <span className="legend-dot transport"></span>
              <span>Transportation</span>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <aside className="calendar-upcoming-panel">
          <div className="panel-header">
            <div>
              <span>Coming Up</span>
              <h2>Upcoming Events</h2>
            </div>

            <CalendarDays size={20} />
          </div>

          <div className="upcoming-events-list">
            {upcomingEvents.map((event) => {
              const eventDate = new Date(event.date);

              return (
                <div
                  className="upcoming-event-card"
                  key={event.date + event.title}
                >
                  <div
                    className={`upcoming-event-date ${event.type}`}
                  >
                    <strong>
                      {eventDate.getDate()}
                    </strong>

                    <span>
                      {eventDate.toLocaleString(
                        "en-US",
                        { month: "short" }
                      )}
                    </span>
                  </div>

                  <div className="upcoming-event-content">
                    <div className="upcoming-event-title">
                      {getEventIcon(event.type)}

                      <h3>{event.title}</h3>
                    </div>

                    <p>{event.description}</p>

                    <span className="upcoming-event-type">
                      {event.type === "holiday"
                        ? "School Holiday"
                        : event.type === "transport"
                        ? "Transportation"
                        : "School Event"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
      </section>

      {/* Today's Transportation */}
      <section className="dashboard-panel calendar-transport-panel">
        <div className="panel-header">
          <div>
            <span>Transportation Schedule</span>
            <h2>Today's Bus Schedule</h2>
          </div>

          <span className="schedule-status">
            <span></span>
            Normal Service
          </span>
        </div>

        <div className="transport-schedule-grid">
          <div className="transport-schedule-card">
            <div className="transport-schedule-icon">
              <BusFront size={21} />
            </div>

            <div>
              <span>Morning Pickup</span>
              <strong>07:52 AM</strong>
              <small>Green Park · BUS-102</small>
            </div>

            <CheckCircle2 size={18} />
          </div>

          <div className="transport-schedule-card">
            <div className="transport-schedule-icon transport-blue">
              <MapPin size={21} />
            </div>

            <div>
              <span>School Arrival</span>
              <strong>08:45 AM</strong>
              <small>EduTrack Public School</small>
            </div>

            <Clock3 size={18} />
          </div>

          <div className="transport-schedule-card">
            <div className="transport-schedule-icon transport-orange">
              <BusFront size={21} />
            </div>

            <div>
              <span>Afternoon Pickup</span>
              <strong>03:30 PM</strong>
              <small>School Gate · BUS-102</small>
            </div>

            <CheckCircle2 size={18} />
          </div>
        </div>
      </section>

      {/* Holiday Notice */}
      <div className="parent-safety-notice calendar-notice">
        <div className="parent-safety-icon">
          <CalendarDays size={20} />
        </div>

        <div>
          <strong>Next school holiday: Diwali</strong>

          <p>
            School and transportation services will remain closed
            on October 20 and October 21, 2026.
          </p>
        </div>

        <Star size={19} />
      </div>
    </div>
  );
};

export default Calendar;