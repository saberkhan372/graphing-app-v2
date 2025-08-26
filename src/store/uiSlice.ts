import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  showTutorial: boolean;
}

const initialState: UIState = {
  showTutorial: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTutorial(state) {
      state.showTutorial = !state.showTutorial;
    },
  },
});

export const { toggleTutorial } = uiSlice.actions;
export default uiSlice.reducer;
