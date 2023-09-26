import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
  },
  reducers: {
    handelLogin: (state, { payload }) => {
      state.isLogin = payload;
    },
  },
});

export const { handelLogin } = auth.actions;
export default auth.reducer;
