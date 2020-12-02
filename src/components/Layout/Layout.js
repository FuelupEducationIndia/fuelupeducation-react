import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/burgerIndex'

import Aux from '../hoc/HigherOrder'
import Toolbar from './Toolbar'
import Footer from './Footer'

class Layout extends Component {
    state = {
        sideDrawerShow: false,
    }

    sideDrawerHide = () => {
        this.setState({
            sideDrawerShow: false,
        })
    }

    switchSideDrawerHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerShow: !prevState.sideDrawerShow }
        })
    }
    render() {
        return (
            <Aux>
                <div className='app'>
                    <Toolbar
                        openSideDrawer={this.switchSideDrawerHandler}
                        auth={this.props.auth}
                        logOut={this.props.onLogOut}
                    />
                    {/* <SideDrawer closed = {this.sideDrawerHide} 
                open = {this.state.sideDrawerShow}
                auth = {this.props.auth}
                clicked = {this.sideDrawerHide}
                logOut = {this.props.onLogOut}
            /> */}
                    <main className='content'>{this.props.children}</main>
                    <div className='section-footer'>
                        <Footer />
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.tokenId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: () => dispatch(actions.logOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
