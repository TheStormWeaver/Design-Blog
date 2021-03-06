import { useContext } from "react";
import { Toast } from "react-bootstrap";
import { NotificationContext } from "../../../contexts/NotificationContext";
import "./Notification.css";

const Notification = () => {
  const { notification, hideNotification } = useContext(NotificationContext);

  if (!notification.show) {
    return null;
  }

  return (
    <Toast
      className="notification d-inline-block m-1"
      bg="Light"
      onClose={hideNotification}
    >
      <Toast.Header>
        <strong className="me-auto">Information</strong>
      </Toast.Header>
      <Toast.Body>{notification.message}</Toast.Body>
    </Toast>
  );
};

export default Notification;
