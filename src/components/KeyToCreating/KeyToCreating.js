import React from 'react';
import './KeyToCreating.scss';
import GirlsImage from '../../assets/imgs/mid.jpg'
import Twitter from '../../assets/imgs/twitter.png'
import Facebook from '../../assets/imgs/facebook.png'
import UserInfo from '../UserInfo';

const KeyToCreating = () => {
    return (
        <div className = "key-main">
            <h1 className = "heading">Key To Creating More Time  </h1>
            <img className = "mid-image" src = {GirlsImage}/>
            <div className="info-section">
                <UserInfo/>
                <div className = 'social-icons'>
                    <img className = "icons" src = {Twitter}/>
                    <img className = "icons" src = {Facebook}/>
                </div>
            </div>
            <div className = "content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>         
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </div>

        </div>
    );
};

export default KeyToCreating;