import React, { Component }  from 'react';
import { Row, Col } from 'reactstrap';

import FuelUp from './Images/FuelUp.svg';
import GooglePlay from './Images/google play.svg';
import AppStore from './Images/AppStore.svg';

class Footer extends Component {


    render() {
        return(
            <div>
                <Row>
                    <Col md={4}>
                        <img src={FuelUp} style={{marginLeft: "50%"}} alt="FuelUp Logo"/> <br /> <br />
                        <p style={{marginLeft: "50%"}}> 
                            &copy; Safed Pankh Foundation
                        </p>
                    </Col>
                    <Col md={2}>
                    <a href="#">About</a> <br/>
                    <a href="#">Careers</a> <br/>
                    <a href="#">Blogs</a> <br/>
                    <a href="#">Privacy Policy</a> <br/>
                    <a href="#">Terms & Conditions</a> <br/>
                    </Col>
                    <Col md={2}>
                    <a href="#">User Guidelines</a> <br/>
                    <a href="#">Site Maps</a> <br/>
                    <a href="#">Refund Policies</a> <br/>
                    <a href="#">Legal Notices</a> <br/>
                    <a href="#">Plus Subscription T & C</a> <br/>
                    </Col>
                    <Col md={2}>
                    <p>Students App</p>
                    <img src={GooglePlay} style={{margin: "10px 0 10px 0"}} alt="Google Play Link"/>
                    <img src={AppStore} alt="App Store Link"/>
                    </Col>
                    <Col md={2}>
                    <p>Contributers App</p> 
                    <img src={GooglePlay} style={{margin: "10px 0 10px 0"}} alt="Google Play Link"/>
                    <img src={AppStore} alt="App Store Link"/>
                    </Col> 
                </Row>
                <br />
            </div>
        );
    }
}


export default Footer;