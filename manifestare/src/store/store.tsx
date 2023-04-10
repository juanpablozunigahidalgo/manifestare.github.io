import { configureStore } from "@reduxjs/toolkit";
import { audioPlayerSlice } from "./audioPlayerSlice";

export const store = configureStore({
  reducer: {
    audioPlayer: audioPlayerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;