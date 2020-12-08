import React from 'react'
import { Link } from 'react-router-dom'

import FooterLogo from '../../assets/images/footerLogo.png'
import Group54 from '../../assets/images/Group54.png'
import Group57 from '../../assets/images/Group57.png'

const Footer = () => {
    return (
        <div className='footer'>
            <>
                <div className='footer__logo'>
                    <img src={FooterLogo} alt='' />
                </div>
                <div className='footer__copyright'>
                    &copy; 2020 Safed Pankh Foundation
                </div>
            </>
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
            <>
            <p>Students App</p>
            <div className='footer__assets'>
                <img src={Group54} alt='' className='footer__assets--item'/>
                <img src={Group57} alt='' className='footer__assets--item'/>
            </div>
            </>
            <>
            <p>Contributors App</p>
            <div className='footer__assets'>
                <img src={Group54} alt='' className='footer__assets--item'/>
                <img src={Group57} alt='' className='footer__assets--item'/>
            </div>
            </>
        </div>
    )
}

export default Footer
