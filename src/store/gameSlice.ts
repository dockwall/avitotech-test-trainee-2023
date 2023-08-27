import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface GameData {
  id: number;
  name: string;
}
interface GameState {
  games: GameData[]; // TODO: Add non mock types for game list
  loading: boolean;
  error: string | null;
}

const initialState: GameState = {
  games: [],
  loading: false,
  error: null,
};

// TODO: replace mock action with true API
export const fetchGames = createAsyncThunk<any[], void, {}>(
  "games/fetchGames",
  async () => {
    // "API" section
    return [
      { id: 1, name: "Game 1" },
      { id: 2, name: "Game 2" },
    ];
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
