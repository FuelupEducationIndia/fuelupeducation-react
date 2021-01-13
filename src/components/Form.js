import React from 'react';


function Form() {
    return (
      
        <div className="form">
           
               <div className="form__formLeft__drag">
                  <img src="https://cdn0.iconfinder.com/data/icons/computers-and-development/432/drag-and-drop-512.png" 
                       alt="hand" 
                       width="100" 
                       height="100" 
                  /> 

                  <div>
                    <span>Drag and drop video file or</span>
                    <span>Click to <span>Browse</span></span>
                  </div>
                   
               </div>
               <div className="form__formLeft__text">OR</div>
            
               <div className="form__formLeft__input">
                   <label for="input">Insert from URL</label>
                   <input type="text" id="input" />
               </div>
              

             <div className="form__formRight">
               <div className="form__formRight__input">
                   <label for="input">Pick Course</label>
                   <input type="text" id="input" />
                   <span className="err"></span>
               </div>
               
               <div className="form__formRight__input">
                   <label for="input">Title</label>
                   <input type="text" id="input" />
                   <span className="err">*required</span>
               </div>

               <div className="form__formRight__input">
                   <label label="input1">Description</label>
                   <input type="text" id="input1" />
                   <span className="err">*required</span>
               </div>

               <div className="form__formRight__input">
                   <label for="input">Enter Captcha</label>
                   <input type="text" id="input" />
                   <div className="captcha">
                       Captcha Code 
                       <div>11f32G</div>
                   </div>
                   <span className="err"></span>

               </div>

                <div className="form__formRight__button">
                <button>Upload</button>
                 <span className="err"></span>
                </div>
               
           </div>
           
        </div>
        
      
    )
}

export default Form;
