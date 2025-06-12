import { events } from "../data/events";
import { motion } from "framer-motion";
import "./WhatsUp.css";

const WhatsUp = () => {
  return (
    <div className="container my-5">
      {/* Intro */}
      <motion.div
        className="mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-success">What's Up at FUN ZONE?</h2>
        <p className="text-muted">
          Check out our exciting upcoming events or revisit memories from past
          celebrations.
        </p>
      </motion.div>

      {/* Events Grid */}
      <div className="row g-4">
        {events.map((event, index) => (
          <motion.div
            className="col-md-6 col-lg-4"
            key={event.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <motion.div
              className={`card h-100 shadow-sm border rounded-4 ${
                event.type === "upcoming"
                  ? "border-primary"
                  : "border-secondary"
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={`/assets/events/${event.image}`}
                alt={event.title}
                className="card-img-top event-img"
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <small className="text-muted">{event.date}</small>
                <span
                  className={`badge rounded-pill px-3 py-1 ${
                    event.type === "upcoming" ? "bg-primary" : "bg-secondary"
                  }`}
                >
                  {event.type === "upcoming" ? "Upcoming" : "Past"}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatsUp;
