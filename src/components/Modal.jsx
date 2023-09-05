import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export const Modal = ({ children }) => {
  const modalRoot = document.getElementById('modal-root');
  const modalRef = useRef(document.createElement('div'));

  useEffect(() => {
    modalRoot.appendChild(modalRef.current);

    return () => {
      modalRoot.removeChild(modalRef.current);
    };
  }, [modalRoot]);

  return ReactDOM.createPortal(<div>{children}</div>, modalRef.current);
};
