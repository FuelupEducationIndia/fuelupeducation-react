import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Exam from './Exam'
import Hello from './Hellopiece';
import BrowseCourse from './BrowseCourse';
import MyCourses from './MyCourses'
import Lectures from './Lectures'
import Assignments from './Assignments'
import Attendance from './Attendance'
import Certificate from './Certificate'

function Routing2() {
  
    return( 
    
    <BrowserRouter>
    <Hello />
      <Switch>
        <Route exact path = '/BrowseCourse' component={BrowseCourse} />
        <Route exact path = '/MyCourses' component={MyCourses} />
        <Route exact path = '/Lectures' component={Lectures} />
        <Route exact path = '/Exam' component={Exam} />
        <Route exact path = '/Assignments' component={Assignments} />
        <Route exact path = '/Attendance' component={Attendance} />
        <Route exact path = '/Certificate' component={Certificate} />
      </Switch>
    </BrowserRouter>
    )
  }

  export default Routing2;