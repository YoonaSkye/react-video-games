import styled from "styled-components";
import { motion } from "framer-motion";
import Game from "./Game";

const Games = ({ games, type }) => {
  return (
    <div id={type}>
      <h2>{type} Games</h2>
      <StyledGames>
        {games.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </StyledGames>
    </div>
  );
};

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Games;
