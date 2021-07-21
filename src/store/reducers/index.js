import { combineReducers } from "redux";
import userReducer from "./userReducer";
import mainReducer from "./MainReducer";

export default combineReducers({
  main: mainReducer,
  user: userReducer,
});
