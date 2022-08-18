import React, { Component, Suspense, lazy } from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import authService from "../app/services/auth/authService";
import Spinner from "../app/shared/Spinner";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const user = authService.user;
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
const JobApplicationHistory = lazy(() => import("./dashboard/user/jobApplication/JobApplicationHistory"));
const SubmitJobApp = lazy(() => import("./modal/SubmitJobApp"));
const JobApplicants = lazy(() => import("./dashboard/organization/JobApplicants"));
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
          {!user && <Route path="/user-pages/login" component={Login} />}
          {!user && <Route path="/user-pages/register" component={Register} />}
          <Route path="/user-pages/post-a-job" component={PostAjob} />
          <Route path="/user-pages/job-applications" component={JobApplicationHistory} />
          <Route path="/user-pages/dashboard" component={Dashboard} />
          <Route path="/user-pages/:id/apply-for-job" component={SubmitJobApp} />
          <Route path="/user-pages/:id/job-applicants" component={JobApplicants} />

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
          <Route path="/"><Redirect to="/"/></Route>

          {/* <Redirect to="/user-pages/login-1" /> */}
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
