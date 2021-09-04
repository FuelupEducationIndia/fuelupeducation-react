import React, { useState } from 'react'
import './discussion.scss'
import DmChat from './DmChat'

import TeamChat from './TeamChat'

function Discussion() {
  const [chatType, setChatType] = useState('team')

  return (
    <div className="discussion">
      <div className="top-discussion">
        <h5>DISCUSSIONS</h5>
        <select
          onChange={e => setChatType(e.target.value)}
          className="dropdown"
        >
          <option value="dms">DMs</option>
          <option value="team">Teams</option>
        </select>
      </div>
      <span className="divider" />
      <div className="discussion-content">
        {chatType === 'dms' && <DmChat />}
        {chatType === 'team' && <TeamChat />}
      </div>
    </div>
  )
}

export default Discussion
