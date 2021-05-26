import React from 'react';

const Attendance = () => {
  return (
    <div>
      <div className="attendanceBox">
        <h2>Take Attendance <i class="fas fa-user-check"></i></h2>
        <form action="">
          <div className="basicInfo">
            <label htmlFor="">Take Attendance Method <i>*</i></label>
            <div className="selectBox">
              <select name="" id="">
                <option value="">Select Method</option>
                <option value="scan">Scan QR Code</option>
                <option value="">Finger Print</option>
                <option value="">Face ID</option>
              </select>
            </div>
            <label htmlFor="">Student Name <i>*</i></label>
            <input type="text" placeholder="Emily Smith" />
            <label htmlFor="">Student Id <i>*</i></label>
            <input type="text" placeholder="A00123456" />
          </div>
          <div className="detailInfo">
            <div className="options">
              <div className="leftOptions">
                <label htmlFor="">Board / University <i>*</i></label>
                <div className="selectBox">
                  <select name="" id="">
                    <option value="scan">Select Board / University</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>               
                <label htmlFor="">Location <i>*</i></label>
                <div className="selectBox">
                  <input type="text" placeholder="Type Location" />
                  <span class="fas fa-globe"></span>
                </div>               
                <label htmlFor="">Class <i>*</i></label>
                <div className="selectBox">
                  <select name="" id="">
                    <option value="scan">Select Class</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>               
                <label htmlFor="">Instructor <i>*</i></label>
                <div className="selectBox">
                  <select name="" id="">
                    <option value="scan">Select Instructor</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>   
              </div>
              
              <div className="rightOptions">
                <label htmlFor="">School / College Name <i>*</i></label>
                <div className="selectBox">
                  <select name="" id="">
                    <option value="scan">Select School / College Name</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div> 
                <label htmlFor="">Language <i>*</i></label>
                <div className="selectBox">
                  <select name="" id="">
                    <option value="scan">Select Language</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div> 
                <label htmlFor="">Lecture <i>*</i></label>
                <div className="selectBox">
                  <select name="" id="">
                    <option value="scan">Select Lecture</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div> 
                <label htmlFor="">Date <i>*</i></label>
                <input type="date" placeholder="Select Date" />
              </div>
            </div>
            <div className="selectTime">
              <div className="startTime">
                <label htmlFor="">Start Time <i>*</i></label>
                <input type="time" />
              </div>
              <div className="endTime">
                <label htmlFor="">End Time <i>*</i></label>
                <input type="time" />
              </div>
              <div className="timer">
                <div className="cdHeading">
                  Countdown Class End
                </div>
                <div className="countdown">
                  <div className="hours">
                    <h2>00</h2>
                    <p>Hours</p>
                  </div>
                  <h2>:</h2>
                  <div className="minutes">
                    <h2>15</h2>
                    <p>Minutes</p>
                  </div>
                  <h2>:</h2>
                  <div className="seconds">
                    <h2>30</h2>
                    <p>Seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Attendance;
