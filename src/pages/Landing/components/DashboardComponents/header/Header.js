import React from 'react'
import './header.scss'

export default function Header() {
  return (
    <div className="header">
      <div className="welcome">
        <h2>Welcome Sheela!</h2>
        <p>Check Whatsup with your Schedule...</p>
      </div>

      <div className="certificates">
        <h2>CERTIFICATES</h2>
        <hr />
        <p>You have created 5 Certificates</p>
        <button type="button" className="cert-btn">
          Create
        </button>
      </div>
    </div>
  )
}
