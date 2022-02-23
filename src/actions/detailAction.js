import axios from "axios";
import { gameDetailURL, gameScreenshotURL } from "../api";

const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const gameDetailData = await axios.get(gameDetailURL(id));
  const gameScreenshot = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      detail: gameDetailData.data,
      screenshot: gameScreenshot.data,
    },
  });
};

export default loadDetail;
