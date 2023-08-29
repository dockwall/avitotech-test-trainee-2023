import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Game, GameFilterParams } from "../types/gameTypes";
import * as gameApi from "../api/gameApi";

interface GameState {
  games: Game[];
  loading: boolean;
  error: string | null;
}

const initialState: GameState = {
  games: [],
  loading: false,
  error: null,
};

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (params?: GameFilterParams) => {
    const games = params
      ? await gameApi.fetchFilteredGames(params)
      : await gameApi.fetchAllGames();
    return games;
  }
);

export const fetchGameById = createAsyncThunk(
  "games/fetchGameById",
  async (id: number) => {
    const gameDetails = await gameApi.fetchGameDetails(id);
    return gameDetails;
  }
);

const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.games = action.payload;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Unknown error: failed to load games data";
      });
  },
});

export default gameSlice.reducer;
