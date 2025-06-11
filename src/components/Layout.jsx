import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <motion.main
        className="flex-fill"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
