import * as type from "../types";
import UserImage from "../../assets/images/avatar.jpg";

const INITIALSTATE = {
  account: {},
  home: {
    story: [
      {
        type: "story",
        token: "dfsd4353eoprokrewepro34",
        viewed: true,
        media: UserImage,
        account: {
          username: "mmdzov",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "story",
        token: "dfsd4353eoprok3434epro34",
        viewed: false,
        media: UserImage,
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "story",
        token: "dfsdadoprok3434epro34",
        viewed: false,
        media: UserImage,
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "story",
        token: "dfsdadoprok3434epro34",
        viewed: false,
        media: UserImage,
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "story",
        token: "dfsdadoprok3434epro34",
        viewed: false,
        media: UserImage,
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "story",
        token: "dfsdadoprok3434epro34",
        viewed: false,
        media: UserImage,
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "story",
        token: "dfsdadoprok3434epro34",
        viewed: false,
        media: UserImage,
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "story",
        token: "dfsdadoprok3434epro34",
        viewed: false,
        media: UserImage,
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "story",
        token: "dfsdadoprok3434epro34",
        viewed: false,
        media: UserImage,
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "story",
        token: "dfsdadoprok3434epro34",
        viewed: false,
        media: UserImage,
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
    ],
    posts: [
      {
        type: "post",
        token: "8394252949534233",
        liked: false,
        media: UserImage,
        account: {
          username: "mmdzov",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "post",
        token: "8394252564wds49534233",
        liked: true,
        media: UserImage,
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "post",
        liked: true,
        token: "dafcx83942529fsdf49534233",
        media: UserImage,
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
    ],
    commentLike: [
      {
        type: "commentLike",
        liked: true,
        token: "dafcx8392529fsdf4953433",
        commentText: "Hello world",
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "commentLike",
        liked: false,
        token: "dafcx83942529pdlfscxfsdf953433",
        commentText:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis inventore, at, hic vero reprehenderit corrupti tempore placeat incidunt dolores earum sed exercitationem vel mollitia delectus odit? Unde natus molestiae ratione.",
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "commentLike",
        liked: false,
        token: "dfsxccvxoxxpzoxkcap",
        commentText:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis inventore, at, hic vero reprehenderit corrupti tempore placeat incidunt dolores earum sed exercitationem vel mollitia delectus odit? Unde natus molestiae ratione.",
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "commentLike",
        liked: false,
        token: "dafcx83942529fvxcvsdfsdf4953433",
        commentText:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis inventore, at, hic vero reprehenderit corrupti tempore placeat incidunt dolores earum sed exercitationem vel mollitia delectus odit? Unde natus molestiae ratione.",
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "commentLike",
        liked: false,
        token: "dafcx8394vxc9fsdf495343fsd3",
        commentText:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis inventore, at, hic vero reprehenderit corrupti tempore placeat incidunt dolores earum sed exercitationem vel mollitia delectus odit? Unde natus molestiae ratione.",
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
    ],
    commentPost: [
      {
        type: "commentPost",
        token: "dafsddasdxzfcx83942529fsdf4953433",
        media: UserImage,
        commentText: "",
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "commentPost",
        token: "dadasdxzfcfsxx83942529fsdf4953433",
        commentText: "",
        media: UserImage,
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
      {
        type: "commentPost",
        token: "dadasdxzfcx83hd942529fsdf4953433",
        commentText: "",
        media: UserImage,
        account: {
          username: "haskelbro",
          userId: "3425445347",
          image: UserImage,
        },
      },
    ],
  },
  main: [],
};

const userReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case type.SET_ACCOUNT:
      return { ...state, account: action.payload };
    case type.SET_HOME_DATA:
      return { ...state, home: action.payload };
    case type.SET_HOME_MAIN:
      return { ...state, main: action.payload };
    default:
      return state;
  }
};
export default userReducer;
