import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          FUN ZONE
        </Link>
        <button className="navbar-toggler custom-toggler" onClick={toggleMenu}>
          <span
            className={isOpen ? "toggler-icon open" : "toggler-icon"}
          ></span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-nav bg-dark"
              id="navMenu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="navbar-nav ms-auto text-center">
                {[
                  ["Experience", "/experience"],
                  ["Leisure & Dining", "/leisure"],
                  ["Park Characters", "/characters"],
                  ["What's Up", "/whats-up"],
                  ["Park Info", "/info"],
                  ["Business", "/business"],
                  ["Contact Us", "/contact"],
                ].map(([text, path]) => (
                  <li className="nav-item" key={path}>
                    <Link
                      className="nav-link"
                      to={path}
                      onClick={() => setIsOpen(false)}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Nav (visible in large screens) */}
        <div className="collapse navbar-collapse d-none d-lg-flex" id="navMenu">
          <ul className="navbar-nav ms-auto">
            {[
              ["Experience", "/experience"],
              ["Leisure & Dining", "/leisure"],
              ["Park Characters", "/characters"],
              ["What's Up", "/whats-up"],
              ["Park Info", "/info"],
              ["Business", "/business"],
              ["Contact Us", "/contact"],
            ].map(([text, path]) => (
              <li className="nav-item" key={path}>
                <Link className="nav-link" to={path}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
