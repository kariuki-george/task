import { createSlice } from "@reduxjs/toolkit";
import { getTasks, deleteTask, createTask } from "../../services/task";

const initialState = {
  isFetching: false,
  isEditing: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.errorMessage = "";
      state.isEditing = false;
      return state;
    },
    isEditing: (state) => {
      state.isEditing = true;
    },
  },
  extraReducers: {
    [getTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload;
      state.isFetching = false;
    },
    [getTasks.pending]: (state) => {
      state.isFetching = true;
    },
    [getTasks.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [deleteTask.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      const list = state.tasks.filter(
        (task) => !(task.id === action.payload.id)
      );
      state.tasks = list;
    },
    [deleteTask.pending]: (state) => {
      state.isFetching = true;
    },
    [deleteTask.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [createTask.fulfilled]: (state, action) => {
      state.isFetching = false;

      const tasks = state.tasks;
      tasks.push(action.payload);
      state.tasks = tasks;
    },
    [createTask.pending]: (state) => {
      state.isFetching = true;
    },
    [createTask.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.isCreating = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { clearState, isEditing } = taskSlice.actions;

export default taskSlice.reducer;
