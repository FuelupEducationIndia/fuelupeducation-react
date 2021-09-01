import React from 'react'

function EachTeamChat({title,memberCount,pendingMessages}) {

    let profileImages =[
        "https://images.unsplash.com/photo-1510832198440-a52376950479?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ]
    return (
        <div className="each-team-chat">
               <div className='team-chat-content'>
                   <h2>#{title}</h2>
                   <span>Created on Jan 20th, 2021</span>
                   <div className='profile-images'>
                          {profileImages.map(eachImg => <img src={eachImg} />)}  
                          <div className="team-member-count">{memberCount}+</div>
                       </div>
                   </div> 
                   <div className="team-chat-count">{pendingMessages}</div>
        </div>
    )
}

export default EachTeamChat
