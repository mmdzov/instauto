import * as type from "../types";

export const setMainAlert = (alert = {}) => ({
  type: type.SET_MAIN_ALERT,
  payload: alert,
});
