import React from 'react'
import {BsFillGearFill} from 'react-icons/bs'
import {IoMdNotifications} from 'react-icons/io'

import Logo from './Logo'
import avatar from '../../assets/images/avatar/avatar.jpg'
import NavigationItems from './Navigation/NavigationItems'

const toolbar = (props) => (
    <div className='toolbar'>
        <div className='toolbar__1'>
        <Logo />

        </div>
        <nav className='toolbar__2'>
            <NavigationItems auth={props.auth} logOut={props.logOut} />
        </nav>

        <div className='toolbar__3'>
            <IoMdNotifications className='toolbar__notification'/>
            <BsFillGearFill className='toolbar__gear'/>

            <img src={avatar} alt='avatar' className='toolbar__avatar'/>
        </div>
    </div>
)

export default toolbar
