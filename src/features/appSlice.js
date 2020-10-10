import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    chanelId: null,
    chanelName:null,
  },
  reducers: {
    setChanelInfo : (state,action) => {
      state.chanelId = action.payload.chanelId;
      state.chanelName = action.payload.chanelName;

    }
    
  },
});

export const { setChanelInfo } = appSlice.actions;

export const selectChanelId = (state) => state.app.chanelId;
export const selectName = (state) => state.app.chanelName;

export default appSlice.reducer;
