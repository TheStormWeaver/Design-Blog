import { Modal, Button } from "react-bootstrap";
import "./ConfirmModal.css"

export default function ConfirmModal({ show, onClose, onSave, message }) {
  if (message != "This design will be permanently deleted. Are you sure you want to delete the current design?") {
    onSave = "";
  }

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
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
