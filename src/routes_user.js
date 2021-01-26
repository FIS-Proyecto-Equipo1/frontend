import Maps from "views/examples/Maps.js";
import Index from "views/Index.js";
import Vehicles from "views/examples/Vehicles4Users.js";

var routesUser = [

    {
        path: "/viajesuser",
        name: "Viajes",
        icon: "ni ni-pin-3 text-orange",
        component: Maps,
        layout: "/user"
    },
    {
        path: "/vehicles",
        name: "Vehicles",
        icon: "fa fa-bicycle text-blue",
        component: Vehicles,
        layout: "/user"
      },
      {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Index,
        layout: "/user"
      }

];
export default routesUser;