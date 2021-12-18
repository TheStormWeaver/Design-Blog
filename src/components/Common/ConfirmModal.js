import { Modal, Button } from "react-bootstrap";

export default function ConfirmModal({ show, onClose, onSave, message }) {
  if (message != "Are you sure you want to delete this design?") {
    onSave = "";
  }

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation Check</Modal.Title>
      </Modal.Header>

      <Modal.Body>{message}</Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>

        <article className="show">
          {onSave ? (
            <Button variant="primary" onClick={onSave}>
              Confirm
            </Button>
          ) : (
            ""
          )}
        </article>
      </Modal.Footer>
    </Modal>
  );
}
