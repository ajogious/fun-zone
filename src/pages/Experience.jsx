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

  return (
    <div className="container my-5">
      {/* Overview */}
      <div className="mb-4 text-center">
        <h2>Explore the FUN ZONE Experience</h2>
        <p>
          Discover the magic of 7 internationally themed zones packed with
          excitement, adventure, and entertainment for all ages. From
          adrenaline-pumping rides to breathtaking replicas of the 7 Wonders,
          every step is a new story.
        </p>
      </div>

      {/* Park Map */}
      <div className="mb-5">
        <h4>Park Map</h4>
        <img
          src="/assets/experience/park-map.jpg"
          alt="Park Map"
          className="img-fluid rounded shadow-sm"
          style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
        />
      </div>

      {/* Attractions & Zones */}
      <div>
        <h4 className="mb-3">Attractions & Zones</h4>
        <div className="row g-4">
          {zones.map(({ title, desc, image }) => (
            <div className="col-md-4" key={title}>
              <div className="card h-100 shadow-sm">
                <img
                  src={`/assets/experience/${image}`}
                  alt={title}
                  className="card-img-top"
                  style={{
                    height: "160px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.75rem",
                    borderTopRightRadius: "0.75rem",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
