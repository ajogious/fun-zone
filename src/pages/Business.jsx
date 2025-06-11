const Business = () => {
  return (
    <div className="container my-5">
      {/* Intro */}
      <div className="mb-4 text-center">
        <h2>Business Opportunities</h2>
        <p>
          Partner with FUN ZONE and grow with one of the most dynamic
          entertainment destinations.
        </p>
      </div>

      {/* Sections */}
      <div className="row g-4">
        {/* Partnerships */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">🎯 Strategic Partnerships</h5>
              <p className="card-text">
                We welcome collaboration with tourism boards, media groups, and
                entertainment agencies to co-create unforgettable experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Vendor Stalls */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">🛍️ Vendor Stalls</h5>
              <p className="card-text">
                Apply for retail or food stalls and showcase your brand to
                thousands of daily visitors. Flexible spaces available.
              </p>
            </div>
          </div>
        </div>

        {/* Advertising */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">📢 Advertising</h5>
              <p className="card-text">
                Feature your brand across park banners, digital boards, and
                themed events. Sponsorship packages are customizable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Note */}
      <div className="mt-5 text-center">
        <p>
          For business queries, reach us at{" "}
          <a href="mailto:biz@funzonepark.com">biz@funzonepark.com</a>
        </p>
      </div>
    </div>
  );
};

export default Business;
