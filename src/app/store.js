import { configureStore } from "@reduxjs/toolkit";

import gamesReducer from "../features/games/gamesSlice";
import detailReducer from "../features/detail/detailSlice";

export default configureStore({
  reducer: {
    games: gamesReducer,
    detail: detailReducer,
  },
});
