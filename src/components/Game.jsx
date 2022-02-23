import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { smallImage } from "../utils";

// redux
import { useDispatch } from "react-redux";
import loadDetail from "../actions/detailAction";

// styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ id, name, released, image }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  const stringPathId = id.toString();

  return (
    <StyledGame onClick={loadDetailHandler} layoutId={stringPathId}>
      <Link to={`game/${id}`}>
        {/* <h3>{name}</h3> */}
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        {/* <img src={image} alt={name} /> */}
        {/* <img src={smallImage(image, 640)} alt={name} /> */}
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
