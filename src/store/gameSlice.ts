import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Game, GameDetails, GameFilterParams } from "../types/gameTypes";
import * as gameApi from "../api/gameApi";

interface GameState {
  games: Game[];
  gameDetails: GameDetails | null;
  loading: boolean;
  error: string | null;
  filters: GameFilterParams;
}

const initialState: GameState = {
  games: [],
  gameDetails: null,
  loading: false,
  error: null,
  filters: {},
};

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (params?: GameFilterParams) => {
    const games = await gameApi.fetchGames(params);
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
  reducers: {
    setFilters: (state, action: PayloadAction<GameFilterParams>) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action: PayloadAction<Game[]>) => {
        state.loading = false;
        state.games = action.payload;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Unknown error: failed to load games data";
      })
      .addCase(fetchGameById.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchGameById.fulfilled,
        (state, action: PayloadAction<GameDetails>) => {
          state.loading = false;
          state.gameDetails = action.payload;
        }
      )
      .addCase(fetchGameById.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Unknown error: failed to load game details";
      });
  },
});

export default gameSlice.reducer;
export const { setFilters } = gameSlice.actions;
