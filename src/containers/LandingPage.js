import React from 'react'

import { Link } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'

import Group37 from '../assets/images/Group37.png'


const LandingPage = () => {

    const heroStyle = {
        backgroundImage: `url(${Group37})`,
    }

    return (
        <div className='landing'>
            <div className='landingToolbar'>
                <h2 className='landing__logo'>Fuel Education</h2>
                <ul className='landingToolbar__list'>
                    <li className='landingToolbar__item'>
                        <Link to='/' className='landingToolbar__link'>
                            Courses
                            <IoMdArrowDropdown />
                        </Link>
                    </li>
                    <li className='landingToolbar__item'>
                        <Link to='/' className='landingToolbar__link'>
                            Subjects
                            <IoMdArrowDropdown />
                        </Link>
                    </li>
                    <li className='landingToolbar__item'>
                        <Link to='/' className='landingToolbar__link'>
                            For Kids
                        </Link>
                    </li>
                    <li className='landingToolbar__item'>
                        <Link to='/' className='landingToolbar__link'>
                            Team
                        </Link>
                    </li>
                </ul>

                <ul className='landingToolbar__list--auth'>
                    {' '}
                    <li className='landingToolbar__item'>
                        <Link to='/' className='landingToolbar__link'>
                            Sign In
                        </Link>
                    </li>
                    <li className='landingToolbar__item'>
                        <Link to='/' className='landingToolbar__link'>
                            Start learning
                        </Link>
                    </li>{' '}
                </ul>
            </div>
            <div
               style={{ backgroundImage: `url(${Group37})` }}
                className='landing__text'
            >
                <div className='landing__text--content'>
                <h1 className='landing__text--heading'>An Educational Product like no other</h1>
                <p className='landing__text--sub'>and that's what we call a Digital Ecosystem</p>

                </div>
            </div>

        </div>
    )
}

export default LandingPage;