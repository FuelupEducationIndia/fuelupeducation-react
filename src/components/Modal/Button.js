import React from 'react';

const button = (props) => (
    <button className = {['newsletter_form-submitBtn', props.btnType].join(' ')}
    onClick = {props.clicked}>
        {props.children}
    </button>
)

export default button;