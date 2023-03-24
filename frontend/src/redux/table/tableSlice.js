// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   tabelItems: [],
// };

// const tableSlice = createSlice({
//   name: "table",
//   initialState,
//   reducers: {},
// });

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedNode: {},
  selectedUser: {},
  isLoading: false,
  table: {},
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setSelectedNode: (state, { payload }) => {
      state.selectedNode = payload;
    },
    setSelectedUser: (state, { payload }) => {
      state.selectedUser = payload;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setTable: (state, { payload }) => {
      state.table = payload;
    },
  },
});

export const {
  setSelectedNode,
  setSelectedUser,
  setIsLoading,
  setTable,
} = tableSlice.actions;

export const getSelectedNode = (state) => state.table.selectedNode;
export const getSelectedUser = (state) => state.table.selectedUser;
export const getIsLoading = (state) => state.table.isLoading;
export const getTable = (state) => state.table.table;
export default tableSlice.reducer;
