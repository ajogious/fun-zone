import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="container my-5">
      {/* Header */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-primary">Contact Us</h2>
        <p className="text-muted">
          We’d love to hear from you. Reach out to us anytime!
        </p>
      </motion.div>

      {/* Address & Map */}
      <div className="row align-items-start mb-5 g-4">
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h5>📍 FUN ZONE Theme Park</h5>
          <p>
            121 Parkview Avenue
            <br />
            Amusement City, EC-90 345
          </p>
          <p>
            📧 Email us:{" "}
            <a
              href="mailto:contact@funzone.com"
              className="text-decoration-none fw-bold"
            >
              contact@funzone.com
            </a>
          </p>
        </motion.div>

        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h5>🗺️ Location Map</h5>
          <div
            className="border rounded overflow-hidden"
            style={{ height: "250px" }}
          >
            <img
              src="/assets/pack-info/funzone-location-map.jpg"
              alt="FUN ZONE location map in Wonder City"
              className="w-100 h-100 object-fit-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
