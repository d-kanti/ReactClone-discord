import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    chanelId: null,
    chanelName:null,
  },
  reducers: {
    setChanelId : (state,action) => {
      state.app += action.payload;
    }
    
  },
});

export const { login , logout } = appSlice.actions;

export const selectChanelId = (state) => state.app.chanelId;
export const selectName = (state) => state.app.chanelName;

export default appSlice.reducer;
