import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
//import asyncComponent from '../components/hoc/asyncComponent'

import Layout from '../components/Layout/Layout'
import Aux from '../components/hoc/HigherOrder'
import Home from './Home'
import LandingPage from './LandingPage'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
 
    render() {
        let AuthGuard = (
            <Switch>
                <Route path='/' exact component={LandingPage} />

                <Redirect to='/' />
            </Switch>
        )
      
        return (
            <Aux>
                <Layout>{AuthGuard}</Layout>
            </Aux>
        )
    }
}


export default withRouter(App)
