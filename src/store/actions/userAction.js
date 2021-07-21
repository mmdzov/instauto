import userService from "../../api/userService";
import * as type from "../types";
import handleData from "../../utils/handleData";
import MainService from "../../api/mainService";
import combineArray from "../../utils/combineArray";

export const setAccount = (account = {}) => ({
  type: type.SET_ACCOUNT,
  payload: account,
});

export const setHomeData = (data = {}) => ({
  type: type.SET_HOME_DATA,
  payload: data,
});

export const setHomeMain = (homeMain = []) => ({
  type: type.SET_HOME_MAIN,
  payload: homeMain,
});

export const setLoginUser =
  (username, password, history) => async (dispatch) => {
    try {
      const data = await userService.login(username, password);
      try {
        const result = await handleData(data);
        localStorage.setItem("token", JSON.stringify(result));
        history.replace("/");
      } catch (e) {}
    } catch (e) {
      console.log(e);
    }
  };

export const getUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const data = await MainService.getHome(token);
    try {
      const result = await handleData(data);
      console.log(result);
      dispatch(setAccount(result));
    } catch (e) {}
  } catch (e) {}
};

export const commentLiked = (token, liked) => async (dispatch, getState) => {
  const { home, main } = getState()?.user;
  try {
    for (let i in home) {
      for (let b in home[i]) {
        const item = home[i][b];
        if (item.type === "commentLike") {
          const index = home[i].findIndex((item) => item.token === token);
          home[i][index].liked = !liked;
          dispatch(setHomeData(home));
          break;
        }
      }
    }
    const index = main.findIndex((item) => item.token === token);
    main[index].liked = !liked;
    dispatch(setHomeMain(main));
  } catch (e) {
    console.log(e);
  }
};

export const combineHomeData = () => async (dispatch, getState) => {
  const { home } = getState().user;
  try {
    let h = home;
    const result = combineArray(h);
    const filtered = result.filter((item) => item.type !== "story");
    dispatch(setHomeMain(filtered));
  } catch (e) {}
};

export const handleSendComment =
  (token, text) => async (dispatch, getState) => {
    const { home, main } = getState().user;
    try {
      for (let i in home) {
        for (let b in home[i]) {
          const item = home[i][b];
          if (item.type === "commentPost") {
            const index = home[i].findIndex((item) => item.token === token);
            home[i][index].commentText = text;
            dispatch(setHomeData(home));
            break;
          }
        }
      }
      const index = main.findIndex((item) => item.token === token);
      main[index].commentText = text;
      dispatch(setHomeMain(main));
    } catch (e) {}
  };

export const handleLikePost = (token, liked) => async (dispatch, getState) => {
  const { home, main } = getState().user;
  try {
    for (let i in home) {
      for (let b in home[i]) {
        const item = home[i][b];
        if (item.type === "post") {
          const index = home[i].findIndex((item) => item.token === token);
          home[i][index].liked = !liked;
          dispatch(setHomeData(home));
          break;
        }
      }
    }
    const index = main.findIndex((item) => item.token === token);
    main[index].liked = !liked;
    dispatch(setHomeMain(main));
  } catch (e) {}
};
