import { configureStore } from '@reduxjs/toolkit';
import { trackApi } from '../services/track';
import { userApi } from '../services/user';
import userReducer from './slices/userSlice';
import trackReducer from './slices/trackSlice';

export const store = configureStore({
  reducer: {
    [trackApi.reducerPath]: trackApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
    track: trackReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(trackApi.middleware)
      .concat(userApi.middleware),
});
