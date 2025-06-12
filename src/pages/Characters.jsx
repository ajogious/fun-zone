import { characters } from "../data/characters";
import { motion } from "framer-motion";
import "./Characters.css";

const Characters = () => {
  return (
    <div className="container my-5">
      {/* Intro */}
      <motion.div
        className="mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-warning">Meet Our Park Characters</h2>
        <p className="text-muted">
          These cheerful mascots add magic, energy, and charm throughout FUN
          ZONE. Get to know the characters who bring the park to life!
        </p>
      </motion.div>

      {/* Character Cards */}
      <div className="row g-4">
        {characters.map((char, index) => (
          <motion.div
            className="col-md-4"
            key={char.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <motion.div
              className="card h-100 shadow-sm rounded-4 character-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <img
                src={`/assets/characters/${char.image}`}
                alt={char.name}
                className="card-img-top character-img"
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <p className="card-text">{char.story}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
