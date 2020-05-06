import React, { useState } from 'react';
import Modal from '../Modal';
import SignUp from '../Form/SignUp';
import Login from '../Form/Login';
import Autentication from '../../auth/autentication';
import './View.css';

const View = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [login, setIsLogin] = useState(false);
  const auth = new Autentication();

  const closeModal = () => {
    setShowModal(false);
    setIsSignUp(false);
    setIsLogin(false);
  };

  return (
    <header className="header">
      <div className="identification">AgentF</div>
      <div>
        <button
          className="header-button"
          onClick={() => {
            closeModal();
            setTimeout(() => {
              setIsSignUp(true);
              setShowModal(true);
            }, 0);
          }}
          type="button"
        >
          Sign Up
        </button>
        <button
          className="header-button"
          onClick={() => {
            closeModal();
            setTimeout(() => {
              setIsLogin(true);
              setShowModal(true);
            }, 0);
          }}
          type="button"
        >
          Login
        </button>
      </div>
      {showModal && (
        <Modal>
          <button className="modal-close" onClick={closeModal} type="button">
            X
          </button>
          {isSignUp && <SignUp auth={auth} handleClose={closeModal} />}
          {login && <Login auth={auth} handleClose={closeModal} />}
        </Modal>
      )}
    </header>
  );
};

export default View;
