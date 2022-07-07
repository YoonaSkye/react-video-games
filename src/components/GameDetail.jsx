import React from "react";
import { useHistory } from "react-router-dom";
import { smallImage } from "../utils";

// redux
import { useSelector } from "react-redux";

// styles
import styled from "styled-components";
import { motion } from "framer-motion";

// images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = (pathId) => {
  const history = useHistory();
  const { detail, screenshot, isLoading } = useSelector(
    (state) => state.detail
  );

  const exitDetailHandler = (e) => {
    if (e.target.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //获取对应平台的图像
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //计算游戏星级
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(detail.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            GameDetail
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>
                  {detail.name}
                </motion.h3>
                <p>Rating: {detail.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>platforms</h3>
                <Platforms>
                  {detail.platforms.map((item) => (
                    <img
                      key={item.platform.id}
                      src={getPlatform(item.platform.name)}
                      alt={item.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(detail.background_image, 1280)}
                alt={detail.background_image}
              />
            </Media>
            <Description>
              <p>{detail.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshot.results.map((item) => (
                <img
                  key={item.id}
                  src={smallImage(item.image, 1280)}
                  alt={item.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    /* background-color: #ff7676; */
    background-color: #767676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
