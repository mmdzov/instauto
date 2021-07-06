import { Route, Switch } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Order from "../pages/Order/Order";
import OrderTracking from "../pages/OrderTracking/OrderTracking";
import SingleOrder from "../pages/SingleOrder/SingleOrder";

const Instauto = () => {
  return (
    <Switch>
      <Route path={["/"]} exact>
        <MainLayout main>
          <Route path="/" exact component={Home} />
        </MainLayout>
      </Route>
      <Route path={["/order", "/order/:token", "/order/:token/:order"]} exact>
        <MainLayout>
          <Route path="/order" exact component={Order} />
          <Route path="/order/:token" exact component={OrderTracking} />
          <Route path="/order/:token/:order" exact component={SingleOrder} />
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Instauto;
