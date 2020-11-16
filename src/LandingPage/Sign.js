
import React from 'react';
import './Sign_in.scss'

function Sign() {

    return (
        <div className="sign-in">
            <h1>Sign In</h1>
            <p>Enter your email / phone number bellow</p>
            <div className="input-elements">
                <input type="text" placeholder="Email / Phone number *"></input><br></br>
                <input type="text" placeholder="Password *"></input><br></br>
                <input type="text" id="role" placeholder="Role *                  
                                                 &#9662;"></input><span id="forgot">Forget your password?</span><br></br>

                <input type="checkbox" value="text"></input>
                <label id="text">I have read and agree the terms and conditions, as well as Privacy Policy of Fuelup Education</label>
                <div className="robot">
                    <input type="checkbox" value="text"></input>
                    <label id="text">I`m not a robot.</label>
                    <div>
                        <img src="./images/captcha.svg" alt="captcha" />
                        <span>reCAPTCHA</span>
                        <span>Privacy terms</span>
                    </div>
                </div>
                <button>Sign in</button>
                <h2 className="line"><span>Or</span></h2>
                <div className="img">
                    <img src="./images/facebook.svg" alt="facebok-image" />
                    <img src="./images/google-symbol.svg" alt="google-image" />
                    <img src="./images/microsoft.svg" alt="microsoft-image" />
                </div>
                <h2 className="second-line"><span>Use biometric Sign In</span></h2>
                <div className="bottom-buttons">
                    <button>Scan your finger</button><button>Scan your face</button>
                </div>
                <p>Don`t have an account? Please <span>Sign Up</span> first.</p>

            </div>
        </div>
    )
}

export default Sign


