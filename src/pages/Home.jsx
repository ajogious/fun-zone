const Home = () => {
  const imageMap = {
    Experience: "thrill-ride.jpg",
    "Leisure & Dining": "dining-area.jpg",
    "Park Characters": "mascot-group.jpg",
    "What's Up": "event-show.jpg",
    "Park Info": "map-signage.jpg",
    "Business Opportunities": "partnership.jpg",
  };

  return (
    <>
      {/* Hero Section */}
      <div className="text-white text-center py-5 mb-4">
        <div className="container">
          <img
            src="/assets/hero-banner.jpg"
            alt="Fun Zone Entrance"
            className="img-fluid mb-3"
            style={{
              maxHeight: "400px",
              width: "100%",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
            loading="lazy"
          />
          <p className="lead fs-4 text-dark">
            Where Adventure Meets Imagination
          </p>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="container mb-5">
        <h2 className="mb-4 text-center text-primary">Welcome to FUN ZONE</h2>
        <p className="text-center">
          Whether you're a thrill-seeker or simply want a relaxing day with
          family, FUN ZONE has something for everyone. Explore our
          internationally themed zones, dine at world-class outlets, meet your
          favorite park characters, and discover endless entertainment.
        </p>
      </div>

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
          ].map(({ title, path }) => (
            <div className="col-md-4" key={title}>
              <div className="card h-100 shadow-sm rounded-4">
                <img
                  src={`/assets/${imageMap[title]}`}
                  alt={title}
                  className="card-img-top"
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.75rem",
                    borderTopRightRadius: "0.75rem",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  loading="lazy"
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
