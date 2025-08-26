import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProgressState {
  completedLessons: number;
}

const initialState: ProgressState = {
  completedLessons: 0,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    increment(state) {
      state.completedLessons += 1;
    },
    setCompleted(state, action: PayloadAction<number>) {
      state.completedLessons = action.payload;
    },
  },
});

export const { increment, setCompleted } = progressSlice.actions;
export default progressSlice.reducer;
