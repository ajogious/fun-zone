const ParkInfo = () => {
  return (
    <div className="container my-5">
      {/* Intro */}
      <div className="mb-4 text-center">
        <h2>Park Information</h2>
        <p>Everything you need to know before your adventure at FUN ZONE!</p>
      </div>

      {/* Timings and Address */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h5>Operating Hours</h5>
          <ul>
            <li>Monday – Friday: 10:00 AM – 8:00 PM</li>
            <li>Saturday – Sunday: 9:00 AM – 10:00 PM</li>
            <li>Public Holidays: Open</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h5>Address</h5>
          <p>
            FUN ZONE Theme Park
            <br />
            123 Adventure Way
            <br />
            Wonder City, Country 123456
            <br />
            Phone: +123-456-7890
          </p>
        </div>
      </div>

      {/* Rules Section */}
      <div className="mb-5">
        <h5>Visitor Rules</h5>
        <ul>
          <li>No outside food or beverages allowed.</li>
          <li>Children under 12 must be accompanied by an adult.</li>
          <li>Respect safety instructions on all rides.</li>
          <li>Smoking is prohibited inside the park.</li>
          <li>Pets are not allowed except certified service animals.</li>
        </ul>
      </div>

      {/* Location Map */}
      <div className="mb-5">
        <h5>Location Map</h5>
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
        <small className="text-muted d-block mt-2">
          *This is a fictional map showing the park's location in Wonder City.*
        </small>
      </div>

      {/* FAQs */}
      <div className="mb-5">
        <h5>Frequently Asked Questions</h5>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
              >
                Is parking available?
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, ample parking is available on site for all vehicles.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
              >
                Are lockers provided?
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, locker rentals are available near the park entrance.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
              >
                Can I book tickets online?
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Online booking will be available soon through our official
                website.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkInfo;
