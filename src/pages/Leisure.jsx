import { useState } from "react";
import { brands } from "../data/leisureData";

const Leisure = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <div className="container my-5">
      {/* Intro */}
      <div className="mb-4 text-center">
        <h2>Leisure & Dining</h2>
        <p>
          Explore a variety of food outlets from global cuisines to local
          favorites.
        </p>
      </div>

      {/* Brand Filters */}
      <div className="mb-4 text-center">
        <h5>Select a Brand</h5>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {brands.map((brand) => (
            <button
              key={brand.name}
              className={`btn ${
                selectedBrand === brand.name
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => setSelectedBrand(brand.name)}
            >
              {brand.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product List */}
      {selectedBrand && (
        <div>
          <h4 className="mb-3">{selectedBrand} Menu</h4>
          <div className="row g-4">
            {brands
              .find((b) => b.name === selectedBrand)
              .products.map(({ name, image }) => (
                <div className="col-md-4" key={name}>
                  <div className="card h-100 shadow-sm rounded-4">
                    <img
                      src={`/assets/leisure/${image}`}
                      alt={name}
                      className="card-img-top"
                      style={{
                        height: "140px",
                        objectFit: "cover",
                        borderTopLeftRadius: "0.75rem",
                        borderTopRightRadius: "0.75rem",
                      }}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">
                        Delicious {name} from {selectedBrand}.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Leisure;
