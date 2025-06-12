import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  const zones = [
    {
      title: "Thrill Rides",
      desc: "Heart-racing coasters, drop towers, and more.",
      image: "thrill-rides.jpg",
    },
    {
      title: "7 Wonders of the World",
      desc: "Walk through stunning replicas of the world’s marvels.",
      image: "seven-wonders.jpg",
    },
    {
      title: "Water World",
      desc: "Splash zones, wave pools, and water coasters.",
      image: "water-world.jpg",
    },
    {
      title: "Kids Kingdom",
      desc: "Safe, fun-filled zones for young adventurers.",
      image: "kids-kingdom.jpg",
    },
    {
      title: "Fantasy Forest",
      desc: "Magical walk-throughs, creatures, and fairy-tale vibes.",
      image: "fantasy-forest.jpg",
    },
    {
      title: "Adventure Island",
      desc: "Zip lines, rock climbing, obstacle courses and more.",
      image: "adventure-island.jpg",
    },
    {
      title: "Tech Galaxy",
      desc: "Virtual reality, arcade games, and futuristic zones.",
      image: "tech-galaxy.jpg",
    },
  ];

  const zoneVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="container my-5">
      {/* Overview */}
      <motion.div
        className="mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-primary">Explore the FUN ZONE Experience</h2>
        <p className="text-muted">
          Discover the magic of 7 internationally themed zones packed with
          excitement, adventure, and entertainment for all ages. From
          adrenaline-pumping rides to breathtaking replicas of the 7 Wonders,
          every step is a new story.
        </p>
      </motion.div>

      {/* Park Map */}
      <motion.div
        className="mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h4 className="mb-3">Park Map</h4>
        <img
          src="/assets/experience/park-map.jpg"
          alt="Park Map"
          className="img-fluid rounded shadow-sm park-map"
          loading="lazy"
        />
      </motion.div>

      {/* Attractions & Zones */}
      <div>
        <h4 className="mb-3">Attractions & Zones</h4>
        <div className="row g-4">
          {zones.map(({ title, desc, image }, i) => (
            <motion.div
              className="col-md-4"
              key={title}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={zoneVariants}
            >
              <motion.div
                className="card h-100 shadow-sm zone-card"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={`/assets/experience/${image}`}
                  alt={title}
                  className="card-img-top"
                  loading="lazy"
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
