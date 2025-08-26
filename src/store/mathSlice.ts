import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MathState {
  equation: string;
}

const initialState: MathState = {
  equation: 'y=x',
};

const mathSlice = createSlice({
  name: 'math',
  initialState,
  reducers: {
    setEquation(state, action: PayloadAction<string>) {
      state.equation = action.payload;
    },
  },
});

export const { setEquation } = mathSlice.actions;
export default mathSlice.reducer;
