import React from 'react'
import EachTeamChat from './EachTeamChat'

function TeamChat() {
    let chats= [
        {
            title:'General',
            memberCount:'3',
            pendingMessages:'4'
        },
        {
            title:'Computer',
            memberCount:'5',
            pendingMessages:'2'
        },
        {
            title:'Biology',
            memberCount:'5',
            pendingMessages:'2'
        },
        {
            title:'Electronic Devices',
            memberCount:'12',
            pendingMessages:'15'
        },
        {
            title:'Maths',
            memberCount:'6',
            pendingMessages:'23'
        }, {
            title:'Computer',
            memberCount:'5',
            pendingMessages:'2'
        },
        {
            title:'Biology',
            memberCount:'5',
            pendingMessages:'2'
        },
        {
            title:'Electronic Devices',
            memberCount:'12',
            pendingMessages:'15'
        },
        {
            title:'Maths',
            memberCount:'6',
            pendingMessages:'23'
        } 
        ,{
            title:'Computer',
            memberCount:'5',
            pendingMessages:'2'
        },
        {
            title:'Biology',
            memberCount:'5',
            pendingMessages:'2'
        },
        {
            title:'Electronic Devices',
            memberCount:'12',
            pendingMessages:'15'
        },
        {
            title:'Maths',
            memberCount:'6',
            pendingMessages:'23'
        }
    ]
    return (
        <div>
            {
                chats.map(chat =><EachTeamChat title={chat.title} memberCount={chat.memberCount} pendingMessages={chat.pendingMessages}/> )
            }
            
        </div>
    )
}

export default TeamChat
