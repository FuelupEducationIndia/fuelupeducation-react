import React from 'react'

function EachChat() {
    return (
        <div className="each-chat">
        <div className='chat-img'>
         <img src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <div className='online-dot'></div>
       </div> 
         <div className='each-chat-content'>
              <h4>Jessi Smith</h4>
              <p>We will discuss tomorrow</p>
              <span>10m ago</span>
             </div>
             <div className='chat-count'>
                 5
                 </div>
         </div>
    )
}

export default EachChat
