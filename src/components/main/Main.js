import React from 'react'
import Discussion from './Discussion'
import MiddleContent from './MiddleContent'
import './main.scss'
function Main() {
    return (
        <div className='main'>
            <Discussion />
            <MiddleContent />
        </div>
    )
}

export default Main
