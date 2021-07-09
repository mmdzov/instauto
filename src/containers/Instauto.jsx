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

const Instauto = () => {
  return (
    <Switch>
      <Route path={["/"]} exact>
        <MainLayout main>
          <Route path="/" exact component={Home} />
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
        ]}
        exact
      >
        <MainLayout topNav={false}>
          <Route path="/setting" exact component={Setting} />
          <Route path="/score" exact component={Score} />
          <Route path="/luckywheel" exact component={LuckyWheel} />
          <Route path="/convert" exact component={Convert} />
          <Route path="/transfer" exact component={Transfer} />
          <Route path="/best" exact component={Best} />
        </MainLayout>
      </Route>
      <Route
        path={[
          "/order",
          "/order/:token",
          "/forum",
          "/order/:token/:order",
          "/order/new",
        ]}
        exact
      >
        <MainLayout>
          <Route path="/order" exact component={Order} />
          <Route path="/order/:token/:order" exact component={SingleOrder} />
          <Route path="/order/:token" component={OrderTracking} />
          <Route path="/order/new" exact component={NewOrder} />
          <Route path="/forum" exact component={Forum} />
        </MainLayout>
      </Route>
      <Route path="/login" exact component={Login} />
    </Switch>
  );
};

export default Instauto;
