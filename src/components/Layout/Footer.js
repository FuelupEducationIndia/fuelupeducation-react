import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer font-small indigo footer">

            <div className="container text-center text-md-left">

                <div className="row">

                    <div className="col-md-3 mx-auto">

                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4 footer_title">City</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className='footer_link'>Uturu</a>
                            </li>
                            <li>
                                <a href="#!" className='footer_link'>Umuahia</a>
                            </li>
                            <li>
                                <a href="#!" className='footer_link'>Okigwe</a>
                            </li>

                        </ul>

                    </div>

                    <hr className="clearfix w-100 d-md-none"></hr>

                    <div className="col-md-3 mx-auto">

                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4 footer_title">Stores</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className='footer_link'>Very long link</a>
                            </li>
                            <li>
                                <a href="#!" className='footer_link'>Very long link</a>
                            </li>
                            <li>
                                <a href="#!" className='footer_link'>Very long link</a>
                            </li>
                            <li>
                                <a href="#!" className='footer_link'>Very long link</a>
                            </li>
                        </ul>

                    </div>

                    <hr className="clearfix w-100 d-md-none"></hr>

                    <div className="col-md-3 mx-auto">

                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4 footer_title">Popular Vendors</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className='footer_link'>Chinwe</a>
                            </li>
                            <li>
                                <a href="#!" className='footer_link'>Very long link 1</a>
                            </li>
                            <li>
                                <a href="#!" className='footer_link'>Very long link 1</a>
                            </li>
                            <li>
                                <a href="#!" className='footer_link'>Very long link 1</a>
                            </li>
                        </ul>

                    </div>

                    <hr className="clearfix w-100 d-md-none"></hr>

                    <div className="col-md-3 mx-auto">

                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4 footer_title">ChopUp Delivery</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className='footer_link'>Very long link 1</a>
                            </li>
                            <li>
                                <a href="#!" className='footer_link'>Very long link 1</a>
                            </li>
                            <li>
                                <a href="#!" className='footer_link'>Very long link 1</a>
                            </li>
                            <li>
                                <a href="#!" className='footer_link'>Very long link 1</a>
                            </li>
                        </ul>

                    </div>

                </div>

            </div>

            <div className="footer-copyright text-center py-3">&copy; 2020 Copyright: Chop Up</div>

        </footer>
    )
}

export default Footer