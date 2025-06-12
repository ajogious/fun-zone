import { motion } from "framer-motion";
import "./ParkInfo.css";

const ParkInfo = () => {
  return (
    <div className="container my-5">
      {/* Intro */}
      <motion.div
        className="mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-primary">Park Information</h2>
        <p className="text-muted">
          Everything you need to know before your adventure at FUN ZONE!
        </p>
      </motion.div>

      {/* Timings and Address */}
      <motion.div
        className="row mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="col-md-6">
          <h5 className="text-success">Operating Hours</h5>
          <ul className="list-unstyled ms-3">
            <li>🕒 Monday – Friday: 10:00 AM – 8:00 PM</li>
            <li>🕘 Saturday – Sunday: 9:00 AM – 10:00 PM</li>
            <li>🎉 Public Holidays: Open</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h5 className="text-success">Address</h5>
          <address>
            FUN ZONE Theme Park
            <br />
            123 Adventure Way
            <br />
            Wonder City, Country 123456
            <br />
            📞 +123-456-7890
          </address>
        </div>
      </motion.div>

      {/* Rules Section */}
      <motion.div
        className="mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h5 className="text-danger">Visitor Rules</h5>
        <ul className="ms-3">
          <li>🚫 No outside food or beverages allowed.</li>
          <li>👶 Children under 12 must be accompanied by an adult.</li>
          <li>🎢 Respect safety instructions on all rides.</li>
          <li>🚭 Smoking is prohibited inside the park.</li>
          <li>🐾 Pets are not allowed except certified service animals.</li>
        </ul>
      </motion.div>

      {/* Location Map */}
      <motion.div
        className="mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h5 className="text-primary">Location Map</h5>
        <div
          className="border rounded overflow-hidden shadow-sm"
          style={{ height: "250px" }}
        >
          <img
            src="/assets/pack-info/funzone-location-map.jpg"
            alt="FUN ZONE location map in Wonder City"
            className="w-100 h-100 object-fit-cover"
          />
        </div>
        <small className="text-muted d-block mt-2 fst-italic">
          *This is a fictional map showing the park's location in Wonder City.*
        </small>
      </motion.div>

      {/* FAQs */}
      <motion.div
        className="mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h5 className="text-info">Frequently Asked Questions</h5>
        <div className="accordion" id="faqAccordion">
          {[
            {
              id: 1,
              q: "Is parking available?",
              a: "Yes, ample parking is available on site for all vehicles.",
              show: true,
            },
            {
              id: 2,
              q: "Are lockers provided?",
              a: "Yes, locker rentals are available near the park entrance.",
              show: false,
            },
            {
              id: 3,
              q: "Can I book tickets online?",
              a: "Online booking will be available soon through our official website.",
              show: false,
            },
          ].map(({ id, q, a, show }) => (
            <div className="accordion-item" key={id}>
              <h2 className="accordion-header" id={`faq${id}`}>
                <button
                  className={`accordion-button ${!show ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${id}`}
                >
                  {q}
                </button>
              </h2>
              <div
                id={`collapse${id}`}
                className={`accordion-collapse collapse ${show ? "show" : ""}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{a}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ParkInfo;
