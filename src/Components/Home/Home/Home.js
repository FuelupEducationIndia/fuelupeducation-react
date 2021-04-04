import React, {useState } from 'react';
import { Col,Row } from 'react-bootstrap';
import img from '../../../image/1.jpeg'
import './Home.css'
import {FaStar,FaClock,FaUserGraduate,FaPlus,FaLongArrowAltRight} from "react-icons/fa";
import FakeData from '../../fakeData';
const Home = () => {

const [category,setCategory]=useState("description")
let filteredItem=FakeData.filter(item=>{
    return item.category === category
})



    return (
        <div className="banner-area">
          <Row>
              <Col md={8}>
                <Row>
                <Col md={4}>
                <div className="banner-img">
                <img src={img} alt={img} className="img-fluid"/>
                </div>
                </Col>
                <Col md={8}>
                <div className="banner-text-area">
                <div className="banner-text">
                <h1>3cs1a -elecronic device and circuits</h1>
                </div>
                <div className="banner-icon">
                    <div className="icon-left">
                        <span className="banner-span">5.0</span>
                        <FaStar className="icon"/>
                        <FaStar className="icon"/>
                        <FaStar className="icon"/>
                        <FaStar className="icon"/>
                    </div>

                    <div className="icon-midd">
                        <FaClock className="icon-clock"/>
                        <span className="banner-span">2 month</span>
                    </div>
                    <div className="icon-right">
                        <FaUserGraduate/>
                        <span className="banner-span">110</span>
                    </div>
                </div>
                <div className="time-shedule">
                    <h3>Join Live Class</h3>
                <FaClock  className="icon-clock" />
                <span className="banner-span">Thursday - 2 may 2020 9:30am </span>
                </div>
                <div className="lecture-link">
                    <div className="lecture">
                    <h4>Live Lecture Link</h4>
                    </div>
                    <div className="phon">
                    <h4>join by phon</h4>
                    <span>01881502157</span>
                    </div>
                </div>
                </div>
                </Col>
                </Row>

               <div className="description-area">
               <div className="btn">
                <button onClick={()=>setCategory("description")} >description</button>
                <button onClick={()=>setCategory("curiculum")}>curiculum</button>
                <button onClick={()=>setCategory("review")}>review</button>
                {
                  filteredItem.map(item=> {
                      return (
                          <div className="footer-area">
                              <h2>{item.title}</h2>
                              <p>{item.paragrap}</p>
                              <div>
                                  <h2>{item.course}</h2>
                                  <p>{item.span1}</p>
                                  <p>{item.span1}</p>
                                  <p>{item.span1}</p>
                              </div>
                          </div>
                      )
                    
                  }
                     
                  )   
                }
               </div>
               </div>
              </Col>
                <Col md={4}>
                <div className="course-lecture">
                    <h2>course lecture</h2>
                      <div className="lecture-viseo">
                        <div className="youtube-video">
                        <iframe width="100" height="60" src="https://www.youtube.com/embed/XqqIzCPUcgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowfullscreen></iframe>
                        </div>
                       <div className="lecture-text">
                        <h4>the moon</h4>
                        </div>
                        </div>
                        <div className="lecture-viseo">
                        <div className="youtube-video">
                        <iframe width="100" height="60" src="https://www.youtube.com/embed/XqqIzCPUcgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowfullscreen></iframe>
                        </div>
                       <div className="lecture-text">
                        <h4>the moon</h4>
                        </div>
                        </div>
                        <div className="lecture-viseo">
                        <div className="youtube-video">
                        <iframe width="100" height="60" src="https://www.youtube.com/embed/XqqIzCPUcgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowfullscreen></iframe>
                        </div>
                       <div className="lecture-text">
                        <h4>the moon</h4>
                        </div>
                        </div>
                        <div className="more-lecture">
                            <div className="add-lecture">
                            <h3>add lecture</h3>
                            <FaPlus className="add-icon"/>
                            </div>
                            <div className="more-course">
                            <h3>explore more courses</h3>
                            <FaLongArrowAltRight className="add-icon"/>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            
        </div>
    );
};

export default Home;