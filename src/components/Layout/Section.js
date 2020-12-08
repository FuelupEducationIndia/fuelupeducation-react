import React from 'react'

const Section = ({
    heading,
    text,
    btn,
    position,
    asset,
    android,
    apple,
    image,
}) => {
    const toPosition = {
        float: position,
    }
    return (
        <div className='section'>
            <div className='section__1' style={toPosition}>
                <h1 className='section__header'>{heading}</h1>
                <p className='section__text'>{text}</p>
                {btn && <button className='section__btn'>{btn}</button>}
                {asset && (
                    <div className='section__asset'>
                        <img
                            src={android}
                            alt=''
                            className='section__android'
                        />
                        <img src={apple} alt='' className='section__apple' />
                    </div>
                )}
            </div>
            <div className='section__2'>
                {image && <img src={image} alt='' />}
            </div>
        </div>
    )
}

export default Section
