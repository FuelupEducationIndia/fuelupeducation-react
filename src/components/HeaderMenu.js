import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function HeaderMenu({ name, icon }) {
    return (
        <div className="headerMenu">
          { name }
            {
                icon && (<KeyboardArrowDownIcon />) 
            }
      
        </div>
    )
}

export default HeaderMenu;
