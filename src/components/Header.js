import React from 'react'
import maskGroup from '../assets/images/maskGroup.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__profile'>
            <h1 className='header__heading'>Welcome Sheela!</h1>
            <p className='header__text'>Check what's up with your schedule</p>
            </div>

            <img src={maskGroup} alt='' className='header__maskGroup'/>
        </div>
    )
}

export default Header