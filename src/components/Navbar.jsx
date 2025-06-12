import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu if resized to large screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand text-warning fw-bold" to="/">
          FUN ZONE
        </Link>

        {/* Hamburger button */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span
            className={isOpen ? "toggler-icon open" : "toggler-icon"}
          ></span>
        </button>

        {/* Mobile nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-nav bg-dark position-absolute top-100 start-0 w-100 z-3 shadow-lg"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="navbar-nav text-center py-3">
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
                      className="nav-link text-white"
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

        {/* Desktop nav */}
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
