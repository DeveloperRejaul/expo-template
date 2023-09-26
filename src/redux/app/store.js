import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../futures/user/userSlice';
import demoReducer from '../futures/demo/demoSlice';
import { api } from '../futures/api/api';
import authReducer from '../futures/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    demo: demoReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
