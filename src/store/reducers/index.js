import { combineReducers } from "redux";
import userReducer from "./userReducer";
import mainReducer from "./MainReducer";
import lotteryReducer from "./lotteryReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  main: mainReducer,
  user: userReducer,
  lottery: lotteryReducer,
  order: orderReducer,
});
