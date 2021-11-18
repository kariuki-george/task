import { createAsyncThunk } from "@reduxjs/toolkit";

import Axios from "axios";

const createTask = createAsyncThunk(
  "task/createTask",
  async (task, thunkAPI) => {
    try {
      const response = await Axios.post(
        "https://willymwaura.pythonanywhere.com/Tasklist/",
        task
      );

      if (response.data === "error") {
        return thunkAPI.rejectWithValue("Server error, try again");
      }
      if (response.data) {
        const { id, email, task, due_date } = response.data;

        return { id, email, task, due_date };
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Check your internet connection and try again"
      );
    }
  }
);
const getTasks = createAsyncThunk("task/getTasks", async (email, thunkAPI) => {
  try {
    const response = await Axios.get(
      `https://willymwaura.pythonanywhere.com/getemail/${email}`
    );

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(
      "Check your internet connection and try again"
    );
  }
});
const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (data, thunkAPI) => {
    try {
      const { email, id } = data;
      const response = await Axios.delete(
        `https://willymwaura.pythonanywhere.com/Delete/${id}`
      );

      if (response.data) {
        return data;
      } else {
        return thunkAPI.rejectWithValue("Delete failed, try again");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Check your internet connection and try again"
      );
    }
  }
);

export { deleteTask, getTasks, createTask };
