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
import ViajesAdmin from "views/examples/ViajesAdmin.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Bills from "views/examples/Bills.js";
import Vehicles from "views/examples/Vehicles.js";
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
    path: "/reservas",
    name: "Reservas",
    icon: "fa fa-bookmark text-green",
    component: Reservas,
    layout: "/admin"
  },
  {
    path: "/viajesadmin",
    name: "Viajes",
    icon: "ni ni-pin-3 text-orange",
    component: ViajesAdmin,
    layout: "/admin"
  },

  {
    path: "/bills",
    name: "Bills",
    icon: "ni ni-bullet-list-67 text-red",
    component: Bills,
    layout: "/admin"
  }
];
export default routes;
