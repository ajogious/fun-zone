import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const imageMap = {
    Experience: "thrill-ride.jpg",
    "Leisure & Dining": "dining-area.jpg",
    "Park Characters": "mascot-group.jpg",
    "What's Up": "event-show.jpg",
    "Park Info": "map-signage.jpg",
    "Business Opportunities": "partnership.jpg",
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="text-white text-center py-5 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <img
            src="/assets/home/hero-banner.jpg"
            alt="Fun Zone Entrance"
            className="img-fluid mb-3 rounded-4 hero-img"
            loading="lazy"
          />
          <p className="lead fs-4 text-dark">
            Where Adventure Meets Imagination
          </p>
        </div>
      </motion.div>

      {/* Welcome Message */}
      <motion.div
        className="container mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="mb-4 text-center text-primary">Welcome to FUN ZONE</h2>
        <p className="text-center">
          Whether you're a thrill-seeker or simply want a relaxing day with
          family, FUN ZONE has something for everyone. Explore our
          internationally themed zones, dine at world-class outlets, meet your
          favorite park characters, and discover endless entertainment.
        </p>
      </motion.div>

      {/* Section Previews */}
      <div className="container mb-5">
        <div className="row g-4">
          {[
            { title: "Experience", path: "/experience" },
            { title: "Leisure & Dining", path: "/leisure" },
            { title: "Park Characters", path: "/characters" },
            { title: "What's Up", path: "/whats-up" },
            { title: "Park Info", path: "/info" },
            { title: "Business Opportunities", path: "/business" },
          ].map(({ title, path }, i) => (
            <motion.div
              className="col-md-4"
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="card h-100 shadow-sm rounded-4 card-hover"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={`/assets/home/${imageMap[title]}`}
                  alt={title}
                  className="card-img-top"
                  loading="lazy"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                    Explore {title.toLowerCase()} at FUN ZONE!
                  </p>
                  <a href={path} className="btn btn-primary mt-auto">
                    Explore
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
