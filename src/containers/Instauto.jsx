import { Route, Switch } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import NewOrder from "../pages/NewOrder/NewOrder";
import Order from "../pages/Order/Order";
import OrderTracking from "../pages/OrderTracking/OrderTracking";
import Setting from "../pages/Setting/Setting";
import SingleOrder from "../pages/SingleOrder/SingleOrder";

const Instauto = () => {
  return (
    <Switch>
      <Route path={["/"]} exact>
        <MainLayout main>
          <Route path="/" exact component={Home} />
        </MainLayout>
      </Route>
      <Route path={["/setting"]} exact>
        <MainLayout topNav={false}>
          <Route path="/setting" exact component={Setting} />
        </MainLayout>
      </Route>
      <Route
        path={["/order", "/order/:token", "/order/:token/:order", "/order/new"]}
        exact
      >
        <MainLayout>
          <Route path="/order" exact component={Order} />
          <Route path="/order/:token/:order" exact component={SingleOrder} />
          <Route path="/order/:token" component={OrderTracking} />
          <Route path="/order/new" exact component={NewOrder} />
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Instauto;
