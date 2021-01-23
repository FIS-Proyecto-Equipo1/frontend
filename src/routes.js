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
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Vehicles.js";
import Reservas from "views/examples/Reservas.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/vehicles",
    name: "Vehicles",
    icon: "fa fa-bicycle text-blue",
    component: Vehicles,
    layout: "/admin"
  },
  {
    path: "/vehicles",
    name: "Vehicles4users",
    icon: "fa fa-bicycle text-blue",
    component: Vehicles4Users,
    layout: "/user"
  },
  {
    path: "/viajes",
    name: "Viajes",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/reservas",
    name: "Reservas",
    icon: "fa fa-bookmark text-green",
    component: Reservas,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/bills",
    name: "Bills",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/user"
  },
  {
    path: "/vehicles",
    name: "Vehicles",
    icon: "fa fa-bicycle text-blue",
    component: Icons,
    layout: "/user"
  },
  {
    path: "/viajes",
    name: "Viajes",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/user"
  },
  {
    path: "/reservas",
    name: "Reservas",
    icon: "fa fa-bookmark text-green",
    component: Reservas,
    layout: "/user"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/user"
  },
  {
    path: "/bills",
    name: "Bills",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/user"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/user"
  }
];
export default routes;
