/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, withRouter } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import UserLayout from "layouts/User.js";
<Route  render={props => <AuthLayout {...props} />} />


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route render={props => <AuthLayout {...props} />} /> */}
      <Route path='/auth' render={props => <AuthLayout {...props} />} />
      {/* <Route exact path="/" render={() => { Añadir este planteamiento
          if (Auth.isUserAuthenticated()) { 
            (<DashboardPage)/>)
          } else {
            (<HomePage/>)
          }
        }} /> */}
      <Route path='/admin' render={props => <AdminLayout {...props} />} />
      {/* <Route path="/logout" render={() => {
          Auth.deauthenticateUser();
          return <Redirect to={{ pathname: "/login" }} />;
          }}
      /> */}
      <Route path='/user' render={props => <UserLayout {...props} />} />
      {/* <Route path="/logout" render={() => {
          Auth.deauthenticateUser();
          return <Redirect to={{ pathname: "/login" }} />;
          }}
      /> */}
      <Redirect from="/" to="/auth" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
