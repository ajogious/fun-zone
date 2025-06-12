import { motion } from "framer-motion";
import "./Business.css";

const Business = () => {
  return (
    <div className="container my-5">
      {/* Intro */}
      <motion.div
        className="mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-primary">Business Opportunities</h2>
        <p className="text-muted">
          Partner with FUN ZONE and grow with one of the most dynamic
          entertainment destinations.
        </p>
      </motion.div>

      {/* Sections */}
      <div className="row g-4">
        {[
          {
            icon: "🎯",
            title: "Strategic Partnerships",
            text: "We welcome collaboration with tourism boards, media groups, and entertainment agencies to co-create unforgettable experiences.",
          },
          {
            icon: "🛍️",
            title: "Vendor Stalls",
            text: "Apply for retail or food stalls and showcase your brand to thousands of daily visitors. Flexible spaces available.",
          },
          {
            icon: "📢",
            title: "Advertising",
            text: "Feature your brand across park banners, digital boards, and themed events. Sponsorship packages are customizable.",
          },
        ].map(({ icon, title, text }, idx) => (
          <motion.div
            className="col-md-4"
            key={title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.15 }}
          >
            <div className="card h-100 shadow-sm rounded-4 border-0 hover-shadow transition">
              <div className="card-body">
                <h5 className="card-title">
                  {icon} {title}
                </h5>
                <p className="card-text">{text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact Note */}
      <motion.div
        className="mt-5 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>
          For business queries, reach us at{" "}
          <a
            href="mailto:biz@funzonepark.com"
            className="text-decoration-none fw-bold"
          >
            biz@funzonepark.com
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Business;
