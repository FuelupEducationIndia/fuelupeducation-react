import React from 'react'

import { Link } from 'react-router-dom'

const navigationItem = (props) => (
    <li>
        <Link to={props.link} className='navigationItem' exact={props.exact}>
            {' '}
            {props.children}
        </Link>
    </li>
)

export default navigationItem
