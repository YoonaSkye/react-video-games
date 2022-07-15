import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../../api";

const initialState = {
  popular: [],
  upcoming: [],
  newGames: [],
  searched: [],
  status: "idle",
  error: null,
};

const URLS = [popularGamesURL(), upcomingGamesURL(), newGamesURL()];

export const loadGames = createAsyncThunk("games/fetchGames", async () => {
  let games = await Promise.all(URLS.map(axios.get));
  games = games.map((game) => game.data.results);
  games = {
    popular: games[0],
    upcoming: games[1],
    newGames: games[2],
  };
  return games;
});

export const fetchSearch = createAsyncThunk(
  "games/fetchSearched",
  async (game_name) => {
    const searchGames = axios.get(searchGameURL(game_name));
    return searchGames;
  }
);

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadGames.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loadGames.fulfilled, (state, action) => {
        state.status = "success";
        const { popular, upcoming, newGames } = action.payload;
        state.popular = popular;
        state.upcoming = upcoming;
        state.newGames = newGames;
      })
      .addCase(loadGames.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.searched = action.payload.data.results;
      });
  },
});

export default gamesSlice.reducer;
