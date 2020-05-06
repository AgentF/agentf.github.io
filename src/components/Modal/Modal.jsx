import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.getElementById('modal');

const Modal = ({ children }) => {
  const modalElement = document.createElement('div');
  modalElement.classList.add('modal-wrapper');

  useEffect(() => {
    modalRoot.appendChild(modalElement);
    return () => modalRoot.removeChild(modalElement);
  }, []);

  return createPortal(children, modalElement);
};

export default Modal;
