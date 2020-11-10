import React, { Component }  from 'react';
import { Row, Col, Badge } from 'reactstrap';
import Header from './Header';

import FuelUpImg from './LandingImage.png';
import GooglePlay from './Images/google play.svg';
import AppStore from './Images/AppStore.svg';
import Footer from './Footer';


class LandingPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(

            <div>
                <div style={{backgroundImage:`url(${FuelUpImg})`, backgroundSize: "cover", width: "100wh", height: "100vh"}}>
                <Header/>
                </div>
                <div style={{padding: "100px 200px 100px 200px"}}>
                    <Row>
                        <Col md={6}>
                        <h2>Interactive quizzes, tests and exams</h2>
                        <p>
                            Videos that helps to visualize each concept, making it easier to understand. Clearer concepts leads to higher score!
                        </p>
                        <h5><Badge href="#" style={{background: "#fc4103"}} pill>Start Learning</Badge></h5>
                        </Col>
                    </Row>
             </div>

             <div style={{padding: "100px 200px 100px 200px"}}>
                    <Row>
                    <Col md={6}></Col>
                        <Col md={6}>
                        <h2>Mapped to the Syllabus</h2>
                        <p>
                        Learning journeys are mapped to a student's grade & syllabus. Each chapter comprises small concepts that are stiched together with relevant syllabus.
                        </p>
                        <h5><Badge href="#" style={{background: "#fc4103"}} pill>Start Learning</Badge></h5>
                        </Col>
                    </Row>
             </div>

             <div style={{padding: "100px 200px 100px 200px"}}>
                    <Row>
                        <Col md={6}>
                        <h2>Engaging in Group Discussions</h2>
                        <p>
                            Crafted to evoque curiosity, this all new feature will develop student's critical thinking abilities and strengthen their understanding of core concept.
                        </p>
                        <h5><Badge href="#" style={{background: "#fc4103"}} pill>Start Learning</Badge></h5>
                        </Col>
                    </Row>
             </div>

             <div style={{padding: "100px 200px 100px 200px"}}>
                    <Row>
                    <Col md={6}></Col>
                        <Col md={6}>
                        <h2>Reports & analytics on student's performance</h2>
                        <p>
                            Rich reports are used to guide progress. These great reports are presented to students and parents/guardians via periodic Email and SMS.
                        </p>
                        <h5><Badge href="#" style={{background: "#fc4103"}} pill>Start Learning</Badge></h5>
                        </Col>
                    </Row>
             </div>

            <div style={{padding: "100px 200px 100px 200px"}}>
                <Row>
                    <Col md={6}>
                        <h2>Start achieving academic excellence</h2>
                        <p>Download lessons and learn anytime</p>
                        <img src={GooglePlay} style={{marginRight: '10px'}} alt="Google Play Link"></img>
                        <img src={AppStore} alt="App Store Link"></img>
                    </Col>

                    <Col md={6}>

                    </Col>
                </Row>
            </div>
            <Footer />
            </div>
           
        );
    }
}

export default LandingPage;