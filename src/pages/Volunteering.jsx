import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LocationIcon from "../assets/location.png";
import CheckMark from "../assets/check-mark.png";
import Alert from "../components/Alert";

function Volunteering() {
  const [modal1Show, setModal1Show] = useState(false);
  const [modal2Show, setModal2Show] = useState(false);
  const location = useLocation();
  const volunteering = location.state && location.state.volunteering;

  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-end">
            <img src={LocationIcon} style={{ maxHeight: "35px" }} />
          </Col>
          <Col xs={7}>
            <h1>{volunteering.place}</h1>
          </Col>
          <Col xs={1} />
        </Row>
        <Row className="mb-3">
          <Col className="text-center">
            <p>{volunteering.date}</p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col />
          <Col>
            <ul className="list-group">
              {volunteering.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Col>
          <Col />
        </Row>
        <Row className="mu-5">
          <Col xs={3} />
          <Col className="text-center">
            <img
              src={CheckMark}
              style={{ maxHeight: "35px" }}
              onClick={() => setModal1Show(true)}
            />
            <Alert
              show={modal1Show}
              onHide={() => setModal1Show(false)}
              title={"Inscribir " + volunteering.place}
              subtitle="¿Estás seguro de que quieres inscribirte en este voluntariado?"
              body="Al inscribirte, te comprometes a asistir al voluntariado, y a cumplir con las tareas asignadas."
            />
          </Col>

          <Col xs={3} />
        </Row>
        <Row>
          <Col xs={3} />
          <Col className="text-center">
            <p onClick={() => setModal2Show(true)}>Inscribir Voluntariado</p>
            <Alert
              show={modal2Show}
              onHide={() => setModal2Show(false)}
              title={"Inscribir " + volunteering.place}
              subtitle="¿Estás seguro de que quieres inscribirte en este voluntariado?"
              body="Al inscribirte, te comprometes a asistir al voluntariado, y a cumplir con las tareas asignadas."
            />
          </Col>
          <Col xs={3} />
        </Row>
      </Container>
    </>
  );
}

export default Volunteering;
