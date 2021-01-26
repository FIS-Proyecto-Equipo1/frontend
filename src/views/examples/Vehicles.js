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
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components

import Vehiculos from "vehiculos/Vehiculos.js";
import Vehiculo from "vehiculos/Vehiculo.js";
import NuevoVehiculo from "vehiculos/NuevoVehiculo.js";
import Alert from "vehiculos/Alert.js";
import EditVehiculo from "vehiculos/EditVehiculo.js";


import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

class Vehicles extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--5" fluid>
          {/* Table */}
          <div>
            <h1>Vehículos</h1>
            <Vehiculos/>
          </div>
        </Container>
      </>
    );
  }
}

export default Vehicles;
