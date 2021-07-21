import * as type from "../types";

const INITSTATE = {
  alert: {},
};

const MainReducer = (state = INITSTATE, action) => {
  switch (action.type) {
    case type.SET_MAIN_ALERT:
      return { ...state, alert: action.payload };
    default:
      return state;
  }
};

export default MainReducer;
