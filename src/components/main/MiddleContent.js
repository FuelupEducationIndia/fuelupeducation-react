import React from 'react'
import ContentBlock from './ContentBlock'
import './middlecontent.scss'
function MiddleContent() {

    let data1 = [
        {
            title:"Nunc Lobortis Mattis",
            time:"JUST NOW"
    },
    {
        title:"Nunc Lobortis Mattis",
        time:"Today - 2:30 PM"
},
, {
    title:"Nunc Lobortis Mattis",
    time:"15 Jan - 9:30 AM"
},
{
    title:"Nunc Lobortis Mattis",
    time:"18 Jan - 9:30 AM"
}
]

let data2 = [
    {
        title:"SS2021-Leccture1-ppt.pdf",
        time:"JUST NOW"
},
{
    title:"SS2021-Leccture1-ppt.pdf",
    time:"Today - 2:30 PM"
},
, {
title:"SS2021-Leccture1-ppt.pdf",
time:"15 Jan - 9:30 AM"
},
{
title:"SS2021-Leccture1-ppt.pdf",
time:"18 Jan - 9:30 AM"
}
]
    return (
        <div className='middle-content'>
              <ContentBlock title={"READING + PODCAST"} data={data1}/>  
              <ContentBlock title={"NOTEBOOKS"} data={data2}/>  
        </div>
    )
}

export default MiddleContent
