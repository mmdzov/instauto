import { Route, Switch } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

const Instauto = () => {
  return (
    <Switch>
      <Route path={["/"]} exact>
        <MainLayout>
          <Route path="/" exact component={Home} />
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Instauto;
