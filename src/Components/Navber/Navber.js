import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Navber.css'
import { FaRegBell } from "react-icons/fa";
const Navber = () => {
    return (
        <div>
            <header className="header-1" id="header">
                <div className="container-fluid">
                    {/* row */}
                    <Row>
                        {/* col-2 */}
                        < Col lg={2} Col sm={3} Col md={3}>
                            <div className="logo">
                                <h1>FuelUp</h1>
                                <span>Education</span>
                                {/* <a href=""><img src="images/logo.png" alt="logo"/></a> */}
                            </div>
                        </Col>
                        {/* col-8 */}
                        <Col lg={8} Col sm={7} Col md={7}>
                            {/* navber start */}
                            <nav className="navbar navbar-expand-lg mainmenu text-center">
                                <button className="navbar-toggler" type="button"
                                    data-toggle="collapse" data-target="#cool">
                                    <span className="navbar-toggler-icon">
                                        <i class="fa fa-bars"></i>
                                    </span>
                                </button>
                                <div className="collaps navbar-collapse" id="cool">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a href="" className="nav-link">Dashboard</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="" className="nav-link">Courses</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="" className="nav-link">SERVICES</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="" className="nav-link">Schedule</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="" className="nav-link">Study</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="" className="nav-link">tickets</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="" className="nav-link">Profile</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            {/* navber ends */}
                        </Col>
                        {/* col-8 ends */}
                        <Col lg={2} Col sm={2} Col md={2} >
                            <div className="navigator text-right">
                                <a href="" className="search">
                                    <FaRegBell />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </header>
        </div>
    );
};

export default Navber;