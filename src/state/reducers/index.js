import { combineReducers } from "@reduxjs/toolkit";
import task from "./task";
import auth from "./auth";

export default combineReducers({ task, auth });
