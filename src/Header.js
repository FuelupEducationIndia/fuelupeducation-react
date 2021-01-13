import React from 'react';
import HeaderMenu from './HeaderMenu';
import { Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';



function Header() {
    return (
        <div className="header">
            <div className="header__logo"></div>

            <div className="header__headerMiddle">
                <HeaderMenu name="Dashboard" />
                <HeaderMenu name="Courses" icon />
                <HeaderMenu name="Schedule" />
                <HeaderMenu name="Study groups" />
                <HeaderMenu name="Tickets" />
                <HeaderMenu name="profile" icon />
            </div>

            <div className="header__headerRight">
                 <IconButton>
                     <AddAlertIcon />
                 </IconButton>

                 <IconButton>
                     <SettingsOutlinedIcon />
                 </IconButton>

                 <Avatar />
                   
            </div>
        </div>
    )
}

export default Header;
