import { Route, Switch } from "react-router-dom";
import LuckyWheel from "../pages/LuckyWheel/LuckyWheel";
import MainLayout from "../layouts/MainLayout";
import Forum from "../pages/Forum/Forum";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NewOrder from "../pages/NewOrder/NewOrder";
import Order from "../pages/Order/Order";
import OrderTracking from "../pages/OrderTracking/OrderTracking";
import Score from "../pages/Score/Score";
import Setting from "../pages/Setting/Setting";
import SingleOrder from "../pages/SingleOrder/SingleOrder";
import Convert from "../pages/Convert/Convert";
import Transfer from "../pages/Transfer/Transfer";
import Best from "../pages/Best/Best";
import DiscountCode from "../pages/DiscountCode/DiscountCode";
import Messages from "../pages/Messages/Messages";
import { useEffect } from "react";
import userService from "../api/userService";
import Explore from "../pages/Explore/Explore";
import Lottery from "../pages/Lottery/Lottery";
import AddLottery from "../pages/AddLottery/AddLottery";
import LotteryCreateMode from "../pages/AddLottery/LotteryCreateMode";
import LotteryJoinMode from "../pages/AddLottery/LotteryJoinMode";
import Auction from "../pages/Auction/Auction";
import AuctionItem from "../pages/AuctionItem/AuctionItem";
import Contact from "../pages/Contact/Contact";
import New from "../pages/New/New";
const Instauto = () => {
  const getData = async () => {};
  useEffect(() => {
    getData();
  }, []);
  return (
    <Switch>
      <Route
        path={["/", "/like-post", "/story", "/comment-like", "/comment-post"]}
        exact
      >
        <MainLayout main>
          <Route path="/" exact component={Home} />
          <Route path="/like-post" exact component={Home} />
          <Route path="/comment-post" exact component={Home} />
          <Route path="/comment-like" exact component={Home} />
          {/* <Route path="/story" exact component={Home} /> */}
        </MainLayout>
      </Route>
      <Route
        path={[
          "/setting",
          "/score",
          "/transfer",
          "/best",
          "/luckywheel",
          "/convert",
          "/order/new",
          "/order",
          "/order/:token/:order",
          "/order/:token",
          "/discount-code",
          "/messages",
          "/explore",
          "/lottery",
          "/lottery/new",
          "/auction",
          "/new",
        ]}
        exact
      >
        <MainLayout topNav={false}>
          <Route path="/new" exact component={New} />
          <Route path="/auction" exact component={Auction} />
          <Route path="/lottery/new" exact component={LotteryCreateMode} />
          <Route path="/lottery" exact component={Lottery} />
          <Route path="/explore" exact component={Explore} />
          <Route path="/setting" exact component={Setting} />
          <Route path="/score" exact component={Score} />
          <Route path="/luckywheel" exact component={LuckyWheel} />
          <Route path="/convert" exact component={Convert} />
          <Route path="/transfer" exact component={Transfer} />
          <Route path="/best" exact component={Best} />
          <Route path="/order/new" exact component={NewOrder} />
          <Route path="/order" exact component={Order} />
          <Route path="/order/:token/:order" exact component={SingleOrder} />
          <Route path="/order/:token" component={OrderTracking} />
          <Route path="/discount-code" component={DiscountCode} />
          <Route path="/messages" component={Messages} />
        </MainLayout>
      </Route>
      <Route path={["/contact"]}>
        <MainLayout topNav={false} bottomNav={false} floatingBtn={false}>
          <Route path="/contact" exact component={Contact} />
        </MainLayout>
      </Route>
      <Route path={["/auction/:token"]}>
        <MainLayout bottomNav={false} floatingBtn={false}>
          <Route path="/auction/:token" exact component={AuctionItem} />
        </MainLayout>
      </Route>
      <Route path={["/forum"]} exact>
        <MainLayout>
          <Route path="/forum" exact component={Forum} />
        </MainLayout>
      </Route>
      <Route path="/login" exact component={Login} />
    </Switch>
  );
};

export default Instauto;
