import { Route, Switch, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Order from "../pages/Order/Order";
import OrderTracking from "../pages/OrderTracking/OrderTracking";

const Instauto = () => {
  const { search, pathname } = useLocation();
  return (
    <Switch>
      <Route path={["/"]} exact>
        <MainLayout main>
          <Route path="/" exact component={Home} />
        </MainLayout>
      </Route>
      <Route path={["/order", "/order/:token"]} exact>
        <MainLayout>
          <Route path="/order" exact component={Order} />
          <Route path="/order/:token" exact component={OrderTracking} />
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Instauto;
