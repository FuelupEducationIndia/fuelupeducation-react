import React from 'react'
import EachGraphInfo from './EachGraphInfo'
import './info.scss'
import PieChartDG from './PieChartDG'

function EachInfo({title}) {
    return (
        <div className='each-info'>
              <div className='each-info-container'>
                  <h3>{title}</h3>
                    <span className='line'></span>
                  <div className='graph'>
                    <PieChartDG />
                      </div>
                      <div className='graph-info'>
                       <EachGraphInfo title={"Uploaded Lectures"} color="#380885"/>
                       <EachGraphInfo title={"Live Lectures"} color="#D1D6FF"/>
                       <EachGraphInfo title={"Upcoming Lectures"} color="#F16600"/>
                          </div>
                  </div>  
        </div>
    )
}

export default EachInfo
