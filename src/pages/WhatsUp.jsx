import { events } from "../data/events";

const WhatsUp = () => {
  return (
    <div className="container my-5">
      {/* Intro */}
      <div className="mb-4 text-center">
        <h2>What's Up at FUN ZONE?</h2>
        <p>
          Check out our exciting upcoming events or revisit memories from our
          past celebrations.
        </p>
      </div>

      {/* Events Grid */}
      <div className="row g-4">
        {events.map((event) => (
          <div className="col-md-6 col-lg-4" key={event.title}>
            <div className="card h-100 border shadow-sm rounded-4">
              <img
                src={`/assets/events/${event.image}`}
                alt={event.title}
                className="card-img-top"
                style={{
                  height: "150px",
                  objectFit: "cover",
                  borderTopLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <small className="text-muted">{event.date}</small>
                <span
                  className={`badge ${
                    event.type === "upcoming" ? "bg-primary" : "bg-dark"
                  }`}
                >
                  {event.type === "upcoming" ? "Upcoming" : "Past"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsUp;
