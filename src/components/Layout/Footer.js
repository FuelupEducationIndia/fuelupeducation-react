import React from 'react'
import { Link } from 'react-router-dom'
import {
    AiFillYoutube,
    AiFillInstagram,
    AiFillTwitterCircle,
} from 'react-icons/ai'
import { FaFacebook, FaTelegram } from 'react-icons/fa'

import FooterLogo from '../../assets/images/footerLogo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__company'>
                <img src={FooterLogo} alt='' className='footer__logo' />
                <p className='footer__copyright'>
                    &copy; 2020 Safed Pankh Foundation
                </p>
            </div>
            <>
                <ul className='footer__list'>
                    <li className='footer__list--item'>
                        <Link to='/' className='footer__link'>
                            About Us
                        </Link>
                    </li>
                    <li className='footer__list--item'>
                        <Link to='/' className='footer__link'>
                            Careers
                        </Link>
                    </li>
                    <li className='footer__list--item'>
                        <Link to='/' className='footer__link'>
                            Blogs
                        </Link>
                    </li>
                    <li className='footer__list--item'>
                        <Link to='/' className='footer__link'>
                            Privacy Policy
                        </Link>
                    </li>
                    <li className='footer__list--item'>
                        <Link to='/' className='footer__link'>
                            Terms and Conditions
                        </Link>
                    </li>
                </ul>
            </>
            <>
                <ul className='footer__list'>
                    <li className='footer__list--item'>
                        <Link to='/' className='footer__link'>
                            User Guildlines
                        </Link>
                    </li>
                    <li className='footer__list--item'>
                        <Link to='/' className='footer__link'>
                            Site Map
                        </Link>
                    </li>
                    <li className='footer__list--item'>
                        <Link to='/' className='footer__link'>
                            Refund Policy
                        </Link>
                    </li>
                    <li className='footer__list--item'>
                        <Link to='/' className='footer__link'>
                            Legal Notices
                        </Link>
                    </li>
                    <li className='footer__list--item'>
                        <Link to='/' className='footer__link'>
                            Plus subscriptions T&C
                        </Link>
                    </li>
                </ul>
            </>

            <div className='footer__app'>
                <p className='footer__app--heading'>Follow Us</p>

                <div className='footer__social--icons'>
                    <Link to='/'>
                        <AiFillInstagram />
                    </Link>
                    <Link to='/'>
                        <AiFillTwitterCircle />
                    </Link>
                    <Link to='/'>
                        <AiFillYoutube />
                    </Link>
                    <Link to='/'>
                        <FaFacebook />
                    </Link>
                    <Link to='/'>
                        <FaTelegram />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
