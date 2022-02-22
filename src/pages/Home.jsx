import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

// styles
import styled from "styled-components";
import { motion } from "framer-motion";

// components
import Game from "../components/Game";

const Home = () => {
  // 获取数据
  const dispatch = useDispatch();
  const { popular, upcoming, newGames } = useSelector((state) => state.games);
  console.log(upcoming);
  useEffect(() => {
    dispatch(loadGames());
  }, []);
  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            image={game.background_image}
            released={game.released}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
