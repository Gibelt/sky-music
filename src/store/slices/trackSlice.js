/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trackId: null,
  source: null,
};

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setTrackId(state, action) {
      state.trackId = action.payload.trackId;
      state.source = action.payload.source;
    },
  },
});

export const { setTrackId } = trackSlice.actions;

export default trackSlice.reducer;
