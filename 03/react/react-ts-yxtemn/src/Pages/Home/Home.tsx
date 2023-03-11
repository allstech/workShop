import * as React from 'react';
import { Card } from '../../Components/';
import './Home.styles.css';

const Home = () => {
  const [charactersList, setCharactersList] = React.useState([]);
  const [isSelected, setSelected] = React.useState(false);
  const [selectedCharacter, setSelectedCharacter] = React.useState(null);

  React.useEffect(() => {
    const list = fetch('https://rickandmortyapi.com/api/character/?page=1')
      .then((response) => response.json())
      .then((data) => setCharactersList(data.results))
      .catch(console.error);
  }, []);

  const handleSelectedCard = (character) => {
    setSelectedCharacter(character);
    setSelected(true);
  };

  return (
    <main>
      <h1 className="title">Este es el taller de React</h1>
      <p className="text">
        Para este taller vamos a usar el api de Rick and Morty
      </p>

      {!isSelected ? (
        <section className="container___list">
          <ul className="list">
            {charactersList.map((character) => (
              <li
                key={character.id}
                onClick={() => handleSelectedCard(character)}
              >
                <Card character={character} />
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section className="container__card">
          <button
            className="button"
            type="button"
            onClick={() => setSelected(false)}
          >
            View All
          </button>
          <Card character={selectedCharacter} />
        </section>
      )}
    </main>
  );
};

export default Home;
