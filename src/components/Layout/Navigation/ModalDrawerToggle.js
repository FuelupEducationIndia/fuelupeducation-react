import React from 'react';

const ModalToggle = (props) => (
    <div onClick={props.clicked} className='modalToggle'>
        &times;
    </div>
)

export default ModalToggle;