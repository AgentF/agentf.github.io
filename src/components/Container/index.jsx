import React from 'react';
import useNotifications from '../Notifications/useNotifications';
import Notifications from '../Notifications/Notifications';
import Header from '../Header';
import { AgentF } from './styles';

const Container = () => {
  const [notificationMessage, showNotification] = useNotifications(5000);

  return (
    <AgentF>
      <Header />
      {showNotification && (
        <Notifications>
          <span>{notificationMessage}</span>
        </Notifications>
      )}
    </AgentF>
  );
};

export default Container;
