const Contact = () => {
  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you. Reach out to us anytime!</p>
      </div>

      {/* Address & Email */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h5>FUN ZONE Theme Park</h5>
          <p>
            121 Parkview Avenue
            <br />
            Amusement City, EC-90 345
          </p>
          <p>
            Email us:{" "}
            <a href="mailto:contact@funzone.com">contact@funzone.com</a>
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="col-md-6">
          <h5>Location Map</h5>
          <img
            src="/assets/pack-info/funzone-location-map.jpg"
            alt="FUN ZONE location map in Wonder City"
            className="w-100 h-100 object-fit-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
