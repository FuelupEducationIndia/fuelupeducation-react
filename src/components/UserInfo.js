import React from 'react';
import '../components/KeyToCreating/KeyToCreating.scss'
import Teacher from '../assets/imgs/teacher.jpg'
const UserInfo = () => {
    return (
        <div className = "user-info">
        <img className = "avatar" src = {Teacher}/>
        <div className = "text-section">
            <h2 className = "info-head"> Created by Sara Williams</h2>
            <p> Mar 5 2021 ,<span> 4 min read</span></p>
        </div>
    </div>
    );
};

export default UserInfo;