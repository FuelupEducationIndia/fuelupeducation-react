import React, { useState } from 'react';
import '../../assets/styling/studentSide.scss'
import Overview from './overview/overview'
import Chat from './overview/chat'
import Attendance from './overview/attendance'
import Modal from '../modal/modal'

const Main = () => {

  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/tgbNymZ7vqY");
  
  const [current, setCurrent] = useState('overview');

  const [screenMenu, setScreenMenu] = useState(false)

  const [modal, setModal] = useState(false);
  
  const playVideo = (url) => {
    setVideoUrl(url);
  }

  const tabControl = tabs => {
    setCurrent(tabs);
  }

  const toggleScreenOptions = () => {
    setScreenMenu(!screenMenu);
  }

  const showModal = () => {
    setModal(!modal);
  }


  return (
    <div>
    {modal ? <Modal closeModal={showModal} /> : ''}
    <main>
        <div className="lecture-section">

          {/* <!-- Left Section --> */}
         
          
          <section className="left-section">
            <div className="heading">
              <h2>The Solar System</h2>
              <span><i className="fas fa-record-vinyl"></i> 90:44</span>
            </div>
            <div className="video-options">
              <div className="video-details">
                <div className="rating">
                  <span>5.0</span>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                </div>
                <div className="time">
                  <i className="far fa-clock"></i>
                  <span>2 months</span>
                </div>
                <div className="views">
                  <i className="far fa-user"></i>
                  <span>1122</span>
                </div>
              </div>
              <div className="screen-options">
                <div className="recording">
                  <i className="fas fa-record-vinyl"></i>
                  <p>Recording</p>
                </div>
                <div className="share-screen" onClick={showModal}>
                  <i className="fas fa-desktop"></i>
                  <p>Share screen</p>
                </div>
              </div>
              
              {/* <!-- For mobile screen --> */}
              <div 
                className="dotted-menu"
                onClick={toggleScreenOptions}
                >
                <i className="fas fa-ellipsis-v"></i>
              </div>
              {screenMenu ? 
                <div className="select-screen-option">
                  <div className="recording">
                    <i className="fas fa-record-vinyl"></i>
                    <p>Recording</p>
                  </div>
                  <div className="share-screen" onClick={showModal}>
                    <i className="fas fa-desktop"></i>
                    <p>Share screen</p>
                  </div>
                </div>
              : ''
              }
            </div>
            <div className="video">
              <iframe src={videoUrl}></iframe>
            </div>
            <div className="overview-desktop">
              <div className="d-tabs">
                <div className="tab overview-tab" 
                  onClick={() => tabControl('overview')}
                  style={{
                      borderBottom: current === 'overview' ? '2px solid red' : '' ,
                      color: current === 'overview' ? 'black' : '' 
                    }}
                >Overview</div>

                <div className="tab chat-tab"
                  onClick={() => tabControl('chat')}
                  style={{
                      borderBottom: current === 'chat' ? '2px solid red' : '' ,
                      color: current === 'chat' ? 'black' : '' 
                    }}
                >Live Chat</div>

                <div className="tab attendance-tab" 
                  onClick={() => tabControl('attendance')}
                  style={{ 
                    borderBottom: current === 'attendance' ? '2px solid red' : '', 
                    color: current === 'attendance' ? 'black' : '' 
                  }}
                  >Take Attendance</div> 
              </div>
              {current === 'overview' ? <Overview /> : '' }
              {current === 'chat' ? <Chat /> : '' }
              {current === 'attendance' ? <Attendance /> : '' }
            </div>
          </section>



          {/*============  Right Section  ============*/}

          <section className="right-section">
            <h2>Course Content</h2>
            <div className="Accordion">
              <details className="toggle-accordion" >
                <summary className="head">
                  <div className="left">
                    <div className="counter">1</div>
                    <div className="timeperiod">
                      <h4>The Moon </h4> 
                      <p>23h 55m</p>
                    </div>
                  </div>
                  <div className="right">
                    <i className="fa fa-chevron-down"></i>
                  </div>
                </summary>
                <div className="body">
                  <div className="body-content" onClick={() => playVideo("https://www.youtube.com/embed/tgbNymZ7vqY")}>
                    <div className="left">
                      <i className="fas fa-play-circle"></i>
                      <p>Introduction</p>
                    </div>
                    <div className="right">
                      <p>2m 6s</p>
                    </div>
                  </div>
                  <div className="body-content" onClick={() => playVideo("https://www.youtube.com/embed/LiOzTQAz13Q")}>
                    <div className="left">
                      <i className="fas fa-play-circle"></i>
                      <p>Introduction</p>
                    </div>
                    <div className="right">
                      <p>2m 6s</p>
                    </div>
                  </div>
                  <div className="body-content" onClick={() => playVideo("https://www.youtube.com/embed/9LNaQln11BA")}>
                    <div className="left">
                      <i className="fas fa-play-circle"></i>
                      <p>Introduction</p>
                    </div>
                    <div className="right">
                      <p>2m 6s</p>
                    </div>
                  </div>
                  <div className="body-content">
                    <div className="left">
                      <i className="fas fa-play-circle"></i>
                      <p>Introduction</p>
                    </div>
                    <div className="right">
                      <p>2m 6s</p>
                    </div>
                  </div>
                  <div className="body-content">
                    <div className="left">
                      <i className="fas fa-play-circle"></i>
                      <p>Introduction</p>
                    </div>
                    <div className="right">
                      <p>2m 6s</p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="toggle-accordion">
                <summary className="head">
                  <div className="left">
                    <div className="counter">2</div>
                    <div className="timeperiod">
                      <h4>The Moon </h4> 
                      <p>23h 55m</p>
                    </div>
                  </div>
                  <div className="right">
                    <i className="fa fa-chevron-down"></i>
                  </div>
                </summary>
                <div className="body">
                  <div className="body-content">
                    <div className="left">
                      <i className="fas fa-play-circle"></i>
                      <p>Introduction</p>
                    </div>
                    <div className="right">
                      <p>2m 6s</p>
                    </div>
                  </div>
                </div>
              </details>
              <details className="toggle-accordion">
                <summary className="head">
                  <div className="left">
                    <div className="counter">3</div>
                    <div className="timeperiod">
                      <h4>The Moon </h4> 
                      <p>23h 55m</p>
                    </div>
                  </div>
                  <div className="right">
                    <i className="fa fa-chevron-down"></i>
                  </div>
                </summary>
                <div className="body">
                  <div className="body-content">
                    <div className="left">
                      <i className="fas fa-play-circle"></i>
                      <p>Introduction</p>
                    </div>
                    <div className="right">
                      <p>2m 6s</p>
                    </div>
                  </div>
                </div>
              </details>
              <details className="toggle-accordion">
                <summary className="head">
                  <div className="left">
                    <div className="counter">4</div>
                    <div className="timeperiod">
                      <h4>The Moon </h4> 
                      <p>23h 55m</p>
                    </div>
                  </div>
                  <div className="right">
                    <i className="fa fa-chevron-down"></i>
                  </div>
                </summary>
                <div className="body">
                  <div className="body-content">
                    <div className="left">
                      <i className="fas fa-play-circle"></i>
                      <p>Introduction</p>
                    </div>
                    <div className="right">
                      <p>2m 6s</p>
                    </div>
                  </div>
                </div>
              </details>
              <details className="toggle-accordion">
                <summary className="head">
                  <div className="left">
                    <div className="counter">5</div>
                    <div className="timeperiod">
                      <h4>The Moon </h4> 
                      <p>23h 55m</p>
                    </div>
                  </div>
                  <div className="right">
                    <i className="fa fa-chevron-down"></i>
                  </div>
                </summary>
                <div className="body">
                  <div className="body-content">
                    <div className="left">
                      <i className="fas fa-play-circle"></i>
                      <p>Introduction</p>
                    </div>
                    <div className="right">
                      <p>2m 6s</p>
                    </div>
                  </div>
                </div>
              </details>
              
            </div>
          </section>
        </div>
        <div className="overview-section">
          <section className="tabs">
            <div>Overview</div>
            <div>Live Chat</div>
            <div>Take Attendance</div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Main;
