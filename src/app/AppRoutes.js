import React, { Component, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Spinner from "../app/shared/Spinner";
import SubmitJob from "./modal/SubmitJobApp";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));
const Typography = lazy(() => import("./basic-ui/Typography"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Home = lazy(() => import("./home-page/Home"));
const Createaccount = lazy(() => import("./signupscreens/Createaccount"));
const PostAjob = lazy(() => import("./post-a-job/PostAjob"));
const Login = lazy(() => import("./user-pages/Login"));
const Register = lazy(() => import("./user-pages/Register"));
const SubmitJobApp = lazy(() => import("./modal/SubmitJobApp"));
const Employers = lazy(() =>
  import("./signupscreens/employers-signup/Employers")
);

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user-pages/create-account" component={Createaccount} />
          <Route path="/user-pages/employers-signup" component={Employers} />
          <Route path="/user-pages/login" component={Login} />
          <Route path="/user-pages/register" component={Register} />
          <Route path="/user-pages/post-a-job" component={PostAjob} />
          <Route path="/user-pages/dashboard" component={Dashboard} />
          <Route path="/user-pages/apply-for-job" component={SubmitJobApp} />

          <Route path="/basic-ui/buttons" component={Buttons} />
          <Route path="/basic-ui/dropdowns" component={Dropdowns} />
          <Route path="/basic-ui/typography" component={Typography} />

          <Route
            path="/form-Elements/basic-elements"
            component={BasicElements}
          />

          <Route path="/tables/basic-table" component={BasicTable} />

          <Route path="/icons/mdi" component={Mdi} />

          <Route path="/charts/chart-js" component={ChartJs} />

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />

          {/* <Redirect to="/user-pages/login-1" /> */}
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
