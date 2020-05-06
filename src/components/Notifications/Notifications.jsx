import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Notifications.css';

const modalRoot = document.getElementById('notifications');

const Modal = ({ children }) => {
  const notificationsElement = document.createElement('div');
  notificationsElement.classList.add('notifications-wrapper');

  useEffect(() => {
    modalRoot.appendChild(notificationsElement);
    return () => modalRoot.removeChild(notificationsElement);
  }, []);

  return createPortal(children, notificationsElement);
};

export default Modal;
