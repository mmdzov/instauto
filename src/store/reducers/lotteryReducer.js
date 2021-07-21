import * as type from "../types";
import Avatar from "../../assets/images/avatar.jpg";

const INITSTATE = {
  list: [
    {
      token: "3sdlkf23woprkwd",
      title: "قرعه کشی جدید",
      image: Avatar,
      caption: `
        دارای جوایز ویژه. ده نفر انتخاب میشوند و جوایز را دریافت میکنند
        جایزه نفر اول یک میلیون تومان پول نقد است
        `,
      startDate: "1400/4/30",
      expDate: "1400/5/30",
    },
    {
      token: "3sdlkfdsvxwoprkwd",
      title: "1 قرعه کشی جدید",
      image: Avatar,
      caption: `
        دارای جوایز ویژه. ده نفر انتخاب میشوند و را دریافت میکنند
        جایزه نفر اول یک میلیون تومان پول نقد است
        `,
      startDate: "1400/4/30",
      expDate: "1400/5/30",
    },
  ],
};

const lotteryReducer = (state = INITSTATE, action) => {
  switch (action.type) {
    case type.SET_LOTTERIES:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default lotteryReducer;
