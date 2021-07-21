import state from "../store/index";
import { setMainAlert } from "../store/actions/MainAction";
export default function handleData(data) {
  if (data?.status === 0) {
    if (data?.alert?.has === 1) {
      state.dispatch(setMainAlert(data?.alert));
      return Promise.reject(data?.alert);
    }
    return Promise.reject(data.status);
  }
  if (data?.status === 1) {
    return Promise.resolve(data.data);
  }
}
