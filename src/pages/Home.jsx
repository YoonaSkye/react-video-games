import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../features/games/gamesSlice";

// styles
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

// components
import Games from "../components/Games";
import GameDetail from "../components/GameDetail";
import { Spinner } from "../components/Spinner";
import ScroollToAnchor from "../components/ScroollToAnchor";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  // 获取数据
  const dispatch = useDispatch();
  const { popular, upcoming, newGames, searched, status, error } = useSelector(
    (state) => state.games
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadGames());
    }
  }, [status, dispatch]);

  let content;
  if (status === "loading") {
    content = <Spinner text="Loading..." />;
  } else if (status === "success") {
    content = (
      <>
        <Games games={popular} type="Popular" />
        <Games games={upcoming} type="Upcoming" />
        <Games games={newGames} type="New" />
      </>
    );
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        <ScroollToAnchor />
        {searched.length ? (
          <div className="searched">
            <Games games={searched} type="Searched" />
          </div>
        ) : (
          ""
        )}
        {content}
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

export default Home;
