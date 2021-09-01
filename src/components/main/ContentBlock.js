import React from 'react'
import EachInnerContent from './EachInnerContent'

function ContentBlock({data,title}) {

    return (
        <div className='content-block'>
        
            <h3 className='content-heading'>
                {title}
            </h3>
            <div className='block-divider'></div>
       {data.map(item => <EachInnerContent title={item.title} time={item.time}/>)}
         
           
        </div>
    )
}

export default ContentBlock
