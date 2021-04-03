import React from 'react';
import './Footer.scss'
import Logo from '../../assets/imgs/logo.png'
import Android from '../../assets/imgs/android.png'
import Apple from '../../assets/imgs/iphone.png'
import TwitterBlue from '../../assets/imgs/twitterblue.png'
import FacebookBlue from '../../assets/imgs/facebookblue.png'
import Instagram from '../../assets/imgs/instagram.png'
import YouTube from '../../assets/imgs/youtube.png'
const Footer = () => {
    return (
        <div className = "footer-main">
            <div className = "logo-div">
                <div style = {{display:'flex',margin:'auto 0'}}>
                    <img className = "logo" src = {Logo}/>
                    <div><h1>Fuelup</h1>
                <p>Education</p></div>
                </div>
            </div>
            <div style ={{display:'flex',marginLeft:'-145px'}}>
                <ul className = "options-menu">
                    <li className = "options">About Us</li>
                    <li className = "options">Career</li>
                    <li className = "options">Blog</li>
                    <li className = "options">Privacy Policy</li>
                    <li className = "options">Terms and Conditions</li>
                </ul>
                <ul style ={{marginLeft:'40px'}} className = "options-menu">
                    <li className = "options">User Guideliness</li>
                    <li className = "options">Site Map</li>
                    <li className = "options">Refund Policy</li>
                    <li className = "options">Legal Notices</li>
                    <li className = "options">Plus Subscription</li>
                </ul>
            </div>
            <div style ={{width:'20%'}}>
                <h3>Download Fuelupeducation App</h3>
                <div style ={{display:'flex' ,}}>
                  <img className = "icon" src = {Android} />
                  <img style ={{margin:'auto 20px'}}className = "icon" src = {Apple} />
                </div>
                <h3>Subscribe</h3>
                <div style ={{display:'flex', justifyContent:'space-between'}}>
                    <img className = "social-icons" src = {TwitterBlue}/>
                    <img  className = "social-icons" src = {FacebookBlue}/>
                    <img  className = "social-icons" src = {YouTube}/>
                    <img  className = "social-icons" src = {Instagram}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;