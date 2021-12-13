import { Modal, Button } from "react-bootstrap";

export default function ErrorModal({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Authentication Error</Modal.Title>
      </Modal.Header>

      <Modal.Body>{"Username or password don't match"}</Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
