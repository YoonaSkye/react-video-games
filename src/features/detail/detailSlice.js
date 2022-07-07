import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { gameDetailURL, gameScreenshotURL } from "../../api";

const initialState = {
  detail: { platforms: [] },
  screenshot: { results: [] },
  isLoading: true,
};

export const loadDetail = createAsyncThunk("detail/fetchDetail", async (id) => {
  const detail_URLS = [gameDetailURL(id), gameScreenshotURL(id)];

  let details = await Promise.all(detail_URLS.map(axios.get));
  details = {
    detail: details[0].data,
    screenshot: details[1].data,
  };
  return details;
});

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadDetail.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loadDetail.fulfilled, (state, action) => {
        const { detail, screenshot } = action.payload;
        state.isLoading = false;
        state.detail = detail;
        state.screenshot = screenshot;
      });
  },
});

export default detailSlice.reducer;
