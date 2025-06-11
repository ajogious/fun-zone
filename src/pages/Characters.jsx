import { characters } from "../data/characters";

const Characters = () => {
  return (
    <div className="container my-5">
      {/* Intro */}
      <div className="mb-4 text-center">
        <h2>Meet Our Park Characters</h2>
        <p>
          These cheerful mascots add magic, energy, and charm throughout FUN
          ZONE. Get to know the characters who bring the park to life!
        </p>
      </div>

      {/* Character Cards */}
      <div className="row g-4">
        {characters.map((char) => (
          <div className="col-md-4" key={char.name}>
            <div className="card h-100 shadow-sm rounded-4">
              <img
                src={`/assets/characters/${char.image}`}
                alt={char.name}
                className="card-img-top"
                style={{
                  height: "180px",
                  objectFit: "cover",
                  borderTopLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                }}
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <p className="card-text">{char.story}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
