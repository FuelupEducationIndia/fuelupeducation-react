import React from 'react';

const Chat = () => {

  let image = require('../../../assets/images/pic1.png');

  return (
    <div>
      <div className="chatBox">
        <h2>Live Chat <i class="fas fa-comments"></i></h2>
        <div className="chats">
          <div className="messageProfile">
            <div className="profileImage">
              <img src={image.default} alt="" />
            </div>
            <div className="messageText">
              <span><b>Michael T.</b> <i>•</i> 10:49AM</span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="messageProfile">
            <div className="profileImage">
              <img src={image.default} alt="" />
            </div>
            <div className="messageText">
              <span><b>Michael T.</b> <i>•</i> 10:49AM</span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="messageProfile">
            <div className="profileImage">
              <img src={image.default} alt="" />
            </div>
            <div className="messageText">
              <span><b>Michael T.</b> <i>•</i> 10:49AM</span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="messageProfile">
            <div className="profileImage">
              <img src={image.default} alt="" />
            </div>
            <div className="messageText">
              <span><b>Michael T.</b> <i>•</i> 10:49AM</span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="messageProfile">
            <div className="profileImage">
              <img src={image.default} alt="" />
            </div>
            <div className="messageText">
              <span><b>Michael T.</b> <i>•</i> 10:49AM</span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="messageProfile">
            <div className="profileImage">
              <img src={image.default} alt="" />
            </div>
            <div className="messageText">
              <span><b>Michael T.</b> <i>•</i> 10:49AM</span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="messageProfile">
            <div className="profileImage">
              <img src={image.default} alt="" />
            </div>
            <div className="messageText">
              <span><b>Michael T.</b> <i>•</i> 10:49AM</span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="messageProfile">
            <div className="profileImage">
              <img src={image.default} alt="" />
            </div>
            <div className="messageText">
              <span><b>Michael T.</b> <i>•</i> 10:49AM</span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="messageProfile">
            <div className="profileImage">
              <img src={image.default} alt="" />
            </div>
            <div className="messageText">
              <span><b>Michael T.</b> <i>•</i> 10:49AM</span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="typeInfo">
          <div className="inputBox">
            <input type="text" placeholder="type a message" />
          </div>
          <div className="sendOptions">
            <i class="far fa-hand-paper"></i>
            <i class="fas fa-paperclip"></i>
            <i class="fas fa-paper-plane"></i>
          </div>
        </div>
        <p id="typing">Michael T. is typing..</p>
      </div>
    </div>
  );
}

export default Chat;
