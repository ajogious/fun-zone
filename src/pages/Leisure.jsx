import { useState } from "react";
import { brands } from "../data/leisureData";
import { motion, AnimatePresence } from "framer-motion";
import "./Leisure.css";

const Leisure = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <div className="container my-5">
      {/* Intro */}
      <motion.div
        className="mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-success">Leisure & Dining</h2>
        <p className="text-muted">
          Explore a variety of food outlets from global cuisines to local
          favorites.
        </p>
      </motion.div>

      {/* Brand Filters */}
      <motion.div
        className="mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h5>Select a Brand</h5>
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
          {brands.map((brand) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={brand.name}
              className={`btn px-4 ${
                selectedBrand === brand.name
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => setSelectedBrand(brand.name)}
            >
              {brand.name}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Product List */}
      <AnimatePresence mode="wait">
        {selectedBrand && (
          <motion.div
            key={selectedBrand}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <h4 className="mb-3">{selectedBrand} Menu</h4>
            <div className="row g-4">
              {brands
                .find((b) => b.name === selectedBrand)
                .products.map(({ name, image }, i) => (
                  <motion.div
                    className="col-md-4"
                    key={name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <motion.div
                      className="card h-100 shadow-sm rounded-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 250 }}
                    >
                      <img
                        src={`/assets/leisure/${image}`}
                        alt={name}
                        className="card-img-top leisure-img"
                        loading="lazy"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                          Delicious {name} from {selectedBrand}.
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Leisure;
