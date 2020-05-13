import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Notifications.css';

const notificationsRoot = document.getElementById('notifications');

const Notifications = ({ children }) => {
  const notificationsElement = document.createElement('div');
  notificationsElement.classList.add('notifications-wrapper');

  useEffect(() => {
    notificationsRoot.appendChild(notificationsElement);
    return () => notificationsRoot.removeChild(notificationsElement);
  }, []);

  return createPortal(children, notificationsElement);
};

export default Notifications;
