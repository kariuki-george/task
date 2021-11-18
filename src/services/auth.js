import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const login = createAsyncThunk("taskmanager/login", async (user, thunkAPI) => {
  try {
    const response = await Axios.post(
      process.env.REACT_APP_API_URL + "restaurant/login",
      user
    );

    if (response.data === "error") {
      return thunkAPI.rejectWithValue("Server error, try again");
    }
    if (response.data === "User not found") {
      return thunkAPI.rejectWithValue("User not found");
    } else {
      const { _id, email, username } = response.data;

      return { _id, email, username };
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(
      "Check your internet connection and try again"
    );
  }
});

export { login };
