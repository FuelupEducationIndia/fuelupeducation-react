/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
import React from 'react'
import printerIcon from 'assets/images/printer.png'
import searchIcon from 'assets/images/search.png'
import certificateIcon from 'assets/images/download.jpg'
import './Certificate.scss'

const Certificate = () => {
  return (
    <form>
      <div classsName="search">
        <input type="text" name="name" placeholder="Serch Certificate" />
        <img
          src={searchIcon}
          style={{
            width: '30px',
            height: '30px',
            position: 'absolute',
            border: '1px solid #000',
            borderLeft: 'none',
            borderRadius: '0px 4px 4px 0px',
          }}
          className="searchIcon"
        />
      </div>
      <br />
      <div className="cerificate">
        <img src={certificateIcon} alt="Certificate" />
      </div>
      <div className="button">
        <button className="download" type="button">
          Download
        </button>
        <button className="print" type="button">
          <img src={printerIcon} alt="Print" />
        </button>
      </div>
    </form>
  )
}

export default Certificate
