import React from 'react';
import Row from './Row';

function Table() {
    return (
        <div style={{"overflow-x": "auto"}}>
        <div className="table">
            <h3>Lectures Summary</h3>
            <table>
                
            <tr className="table__header">
                <th style={{width: "180px"}}>Course</th>
                <th>Lecture Title</th>
                <th style={{width: "400px"}}>Description</th>
                <th>Date</th>
                <th>Video</th>
                <th>Status</th>
                <th></th>
            </tr>
            
            <Row 
               course={"SS2021 - The Solar System"}
               lectureTitle={"The Moon"}
               description={"Excepteur dolore in minim laborum. Labore ea officia ea quis fugiat qui ea non culpa qui. Ut laboris est nostrud incididunt et id aute dolore duis dolor. Aliquip do magna mollit minim enim consectetur culpa aliquip amet sunt."}
               date={"Jan 10,2021"}
               video={"SS201-Lec-Themoon.mp4"}
               status={"Pending"}
            />

            <Row 
               course={"SS2021 - The Solar System"}
               lectureTitle={"The Moon"}
               description={"Excepteur dolore in minim laborum. Labore ea officia ea quis fugiat qui ea non culpa qui. Ut laboris est nostrud incididunt et id aute dolore duis dolor. Aliquip do magna mollit minim enim consectetur culpa aliquip amet sunt."}
               date={"Jan 10,2021"}
               video={"SS201-Lec-Themoon.mp4"}
               status={"Pending"}
            />
            
         
            </table>
        </div>
        </div>
    )
}

export default Table;
