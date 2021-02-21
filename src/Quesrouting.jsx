import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Card from './Card'
import Header from './Header'
import Exam from './Exam'

const Quesrouting = () => {
    return(
        <BrowserRouter>
            <Header />
            <Exam />
            <Switch>
                <Route exact path = "/Card" component={Card} />
            </Switch>
        </BrowserRouter>
    )
}

export default Quesrouting;