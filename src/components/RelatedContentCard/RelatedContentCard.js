import React from 'react';
import './card.scss'
import ClassRoom from '../../assets/imgs/classroom.jpg'
import Teacher from '../../assets/imgs/teacher.jpg'
const RelatedContentCard = () => {
    return (
        <div className = "card-main">
            {[1,2,3].map((e)=> (
                  <div className = "card">
                  <img src = {ClassRoom}/>
                  <div className = "content">
                  <h2>Key to Creating More Time</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className = "user-info">
          <img className = "avatar" src = {Teacher}/>
          <div className = "text-section">
              <h2 className = "info-head"> Created by Sara Williams</h2>
              <p> Mar 5 2021 ,<span> 4 min read</span></p>
          </div>
      </div>
                  </div>
                  
              </div>
            ))}
          
        </div>
    );
};

export default RelatedContentCard;