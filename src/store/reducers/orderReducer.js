const INITSTATE = {
  plans: [
    {
      title: "لایک",
      type: "like",
      token: "4err656rt",
      list: [
        { gem: 10, gold: 3000, count: 1000, token: "3r2wdfsesfg3re" },
        { gem: 10, gold: 5000, count: 2000, token: "3r2wesfdfsdg3re" },
        { gem: 10, gold: 8000, count: 5000, token: "3r2wesfg3rcxve" },
        { gem: 10, gold: 15000, count: 10000, token: "3r2wesfg3sdare" },
      ],
    },
    {
      title: "فالوور",
      type: "follower",
      token: "4esxcv656rt",
      list: [
        { gem: 10, gold: 3000, count: 1000, token: "fsdvxsfg3fdsvxre" },
        { gem: 10, gold: 5000, count: 2000, token: "3fsdvxwesfg3re" },
        { gem: 10, gold: 8000, count: 5000, token: "3r2wesasdafg3re" },
        { gem: 10, gold: 15000, count: 10000, token: "3r2wesfgsdavx3re" },
      ],
    },
    {
      title: "آنفالو",
      type: "unfollow",
      token: "4esxcv656rt",
      list: [
        { gem: 10, gold: 3000, count: 1000, token: "fsdvxsfscxfg3fdsvxre" },
        { gem: 10, gold: 5000, count: 2000, token: "3fsdvxwedaszxsfg3re" },
        { gem: 10, gold: 8000, count: 5000, token: "3r2wesasdafgdasz3re" },
        { gem: 10, gold: 15000, count: 10000, token: "3r2wesfgsdavxsdasdz3re" },
      ],
    },
  ],
};

const orderReducer = (state = INITSTATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default orderReducer;
