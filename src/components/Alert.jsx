import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Alert(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Modal.Body>
          <h4>{props.subtitle}</h4>
          <p>{props.body}</p>
        </Modal.Body>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={props.onHide}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Alert;
