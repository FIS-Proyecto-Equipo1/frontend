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
import Header from "components/Headers/Header.js";
import { Card, Container, Row } from "reactstrap";
import Viajes from "viajes/viajes.js";
import ViajesCurso from "viajes/viajes_curso.js";

class ViajesAdmin extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--5" fluid>
          {/* Table */}
          <div>
            <h1>Viajes en Curso</h1>
            <ViajesCurso/>
            <h1 >VIAJES ADMIN</h1>
            <Viajes/>
           </div>
        </Container>
      </>
    );
  }
}

export default ViajesAdmin;
