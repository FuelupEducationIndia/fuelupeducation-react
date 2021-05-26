import React from 'react';
import '../../assets/styling/studentSide.scss'

const Modal = ({closeModal}) => {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <div className="head">
            <h3>Share Screen</h3>
            <span className="close" onClick={closeModal}>&times;</span>
          </div>
          <div className="body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque odio dolor repellendus minus totam doloribus ad deserunt</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="footer">
            <button>Share Screen</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
