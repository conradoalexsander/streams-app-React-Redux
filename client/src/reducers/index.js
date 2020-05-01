import { combineReducers } from "redux";
import authReducer from "./authRreducer";

export default combineReducers({ auth: authReducer });
