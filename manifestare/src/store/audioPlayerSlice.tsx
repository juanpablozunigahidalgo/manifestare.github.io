import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AudioPlayerState {
  isPlaying: boolean;
  currentSongIndex: number;
}

const initialState: AudioPlayerState = {
  isPlaying: false,
  currentSongIndex: 0,
};

export const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState,
  reducers: {
    startPlaylist: (state, action: PayloadAction<number>) => {
      state.isPlaying = true;
      state.currentSongIndex = action.payload || state.currentSongIndex;
    },
    stopPlaylist: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { startPlaylist, stopPlaylist } = audioPlayerSlice.actions;

export default audioPlayerSlice.reducer;