import { useState, useEffect } from 'react';

const useNotifications = (banishTime = 5000) => {
  const [notificationMessage, setNotificationMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  useEffect(() => {
    if (notificationMessage !== '') {
      setShowNotification(true);
      setTimeout(() => setNotificationMessage(''), banishTime);
    } else {
      setShowNotification(false);
    }
  }, [notificationMessage]);
  return [notificationMessage, setNotificationMessage, showNotification];
};

export default useNotifications;
