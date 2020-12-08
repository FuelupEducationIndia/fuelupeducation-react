import React from 'react'

const Section = ({ heading, text, btn, position }) => {
    return (
        <div className='section'>
            <div className='section__1'>
                <h1 className='section__header'>{heading}</h1>
                <p className='section__text'>{text}</p>
                <button className='section__btn'>{btn}</button>
            </div>
            <div className='section__2'></div>
        </div>
    )
}

export default Section
