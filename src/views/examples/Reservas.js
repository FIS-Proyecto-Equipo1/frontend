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

import Reservas from "reservas/Reservas.js";
import Reserva from "reservas/Reserva.js";
import NuevaReserva from "reservas/NuevaReserva.js";
import Alert from "reservas/Alert.js";
import EditReserva from "reservas/EditReserva.js";


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

class Icons extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--5" fluid>
          {/* Table */}
          <div>
            <h1>Tus reservas</h1>
            <Reservas/>
          </div>
        </Container>
      </>
    );
  }
}

export default Icons;
