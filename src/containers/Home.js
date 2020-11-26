import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AiFillRightSquare } from 'react-icons/ai'
import { AiFillLeftSquare } from 'react-icons/ai'

import * as actions from '../store/actions/burgerIndex'
import withErrorHandler from '../components/hoc/withErrorHandler'
import axios from '../axios'

import Card from '../components/Layout/Card'
import Header from '../components/Header'

import card1 from '../assets/images/card-1.png'
import card2 from '../assets/images/card-2.png'
import card3 from '../assets/images/card-3.png'
import avatar from '../assets/images/avatar/avatar.jpg'
//import Cart from '../components/cart'

class Home extends Component {
    render() {
        return (
            <>
                <div className='section-header'>
                    <Header />
                </div>
                <div className='section-Card'>
                    <ul className='card-nav'>
                        <li>
                            <Link to='/' className='card-nav__item'>
                                Browse courses
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='card-nav__item'>
                                My courses
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='card-nav__item'>
                                Lectures
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='card-nav__item'>
                                Exams
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='card-nav__item'>
                                Assignments
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='card-nav__item'>
                                Invitations
                            </Link>
                        </li>
                    </ul>
                    <div className='cards'>
                        <Card
                            img={card1}
                            heading='Micro-organisms'
                            subHeading='Higher Secondary'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim .Lorem ipsum dolor sit amet'
                            creatorImg={avatar}
                            creatorName='Sara Williams'
                            createdAt='22/08/2020'
                        />
                        <Card
                            img={card2}
                            heading='Medicine'
                            subHeading='Higher Secondary'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim .Lorem ipsum dolor sit amet'
                            creatorImg={avatar}
                            creatorName='Sara Williams'
                            createdAt='22/08/2020'
                        />
                        <Card
                            img={card3}
                            heading='The Solar System'
                            subHeading='Higher Secondary'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim .Lorem ipsum dolor sit amet'
                            creatorImg={avatar}
                            creatorName='Sara Williams'
                            createdAt='22/08/2020'
                        />
                    </div>
                </div>
                <div className='section-pagination'>
                    <AiFillLeftSquare className='pagination__icon'/>
                    <p>1 to 2 of 12</p>
                    <AiFillRightSquare className='pagination__icon'/>
                </div>
            </>
        )
    }
}
Home.propTypes = {
    areas: PropTypes.array,
    selectedArea: PropTypes.string,
}

const mapStateToProps = (state) => {
    return {
        areas: state.burger.areas,
        selectedArea: state.burger.selectedArea,
        selectedCity: state.burger.selectedCity,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSelectedCity: (cityName) => dispatch(actions.selectedCity(cityName)),
        onClearedSelectedCity: () => dispatch(actions.clearedSelectedCity()),
        onSelectedAreas: (areaName) => dispatch(actions.addAreas(areaName)),
        onSelectedArea: (areaName) => dispatch(actions.selectedArea(areaName)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Home, axios))
