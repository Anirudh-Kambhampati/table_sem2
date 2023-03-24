import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProjectData: {},
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setSelecedtProjectData: (state, { payload }) => {
      state.selectedProjectData = payload;
    },
  },
});
console.log(initialState);

export const { selectedProjectData } = tableSlice.actions;

export const getSelectedProjectData = (state) =>
  state.table.selectedProjectData;
export default tableSlice.reducer;
