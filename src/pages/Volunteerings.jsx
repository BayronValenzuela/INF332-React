import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import volunteeringsData from "../assets/volunteerings.json";
import LocationIcon from "../assets/location.png";

function Volunteerings() {
  const [selectedPlace, setSelectedPlace] = useState("");

  const filteredVolunteerings = volunteeringsData.filter((volunteering) => {
    if (!selectedPlace) {
      return true;
    }
    return volunteering.place === selectedPlace;
  });

  return (
    <>
      <Container>
        <Row>
          <Col xs={2} />
          <Col xs={7}>
            <div className="form-group">
              <select
                id="placeFilter"
                value={selectedPlace}
                onChange={(e) => setSelectedPlace(e.target.value)}
                className="form-control"
              >
                <option value="">All Places</option>
                <option value="Antofagasta">Antofagasta</option>
                <option value="Arica">Arica</option>
                <option value="Chillán">Chillán</option>
                <option value="Concepción">Concepción</option>
                <option value="Iquique">Iquique</option>
                <option value="La Serena">La Serena</option>
                <option value="Punta Arenas">Punta Arenas</option>
                <option value="Rancagua">Rancagua</option>
                <option value="Santiago">Santiago</option>
                <option value="Temuco">Temuco</option>
                <option value="Valdivia">Valdivia</option>
                <option value="Valparaíso">Valparaíso</option>
                <option value="Puerto Montt">Puerto Montt</option>
              </select>
            </div>
          </Col>
          <Col />
        </Row>
        <br />
        {filteredVolunteerings.map((volunteering) => (
          <Row key={volunteering.id} className="mb-4">
            <Col xs={2} />
            <Col xs={1}>
              <Link to="/volunteering" state={{ volunteering: volunteering }}>
                <img src={LocationIcon} style={{ maxHeight: "32px" }} />
              </Link>
            </Col>
            <Col xs={6}>
              <Link to="/volunteering" state={{ volunteering: volunteering }}>
                <h4>{volunteering.place}</h4>
              </Link>
            </Col>
            <Col xs={3} />
          </Row>
        ))}
      </Container>
    </>
  );
}

export default Volunteerings;
