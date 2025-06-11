import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Leisure from "./pages/Leisure";
import Characters from "./pages/Characters";
import WhatsUp from "./pages/WhatsUp";
import ParkInfo from "./pages/ParkInfo";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import "./App.css";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/leisure" element={<Leisure />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/whats-up" element={<WhatsUp />} />
          <Route path="/info" element={<ParkInfo />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
