import React from 'react';
import NavigationItem from './NavigationItem'

const navigation = (props) => (
    
    <ul className='navigationItems'>

        <NavigationItem link="/" exact>Dashboard</NavigationItem>
        <NavigationItem link="/" exact>Courses</NavigationItem>
        <NavigationItem link="/" exact>Schedule</NavigationItem>
        <NavigationItem link="/" exact>Study groups</NavigationItem>
        <NavigationItem link="/" exact>Tickets</NavigationItem>
        <NavigationItem link="/" exact>Profile</NavigationItem>
      
    </ul>
)

export default navigation;