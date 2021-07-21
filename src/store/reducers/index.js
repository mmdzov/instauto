import { combineReducers } from "redux";
import userReducer from "./userReducer";
import mainReducer from "./MainReducer";
import lotteryReducer from "./lotteryReducer";

export default combineReducers({
  main: mainReducer,
  user: userReducer,
  lottery: lotteryReducer,
});
