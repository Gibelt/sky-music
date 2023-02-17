/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trackId: null,
  source: null,
  favorite: false,
};

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setTrackId(state, action) {
      state.trackId = action.payload.trackId || state.trackId;
      state.source = action.payload.source || state.source;
      state.favorite = action.payload.favorite;
    },
    clearTrackId(state) {
      state.trackId = null;
      state.source = null;
      state.favorite = false;
    }
  },
});

export const { setTrackId, clearTrackId } = trackSlice.actions;

export default trackSlice.reducer;
