import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';

function Row(props) {
    return (
     
            <tr className="table__body">
                <td style={{borderBottom: "1px solid black"}}>{props.course}</td>
                <td style={{borderBottom: "1px solid black"}}>{props.lectureTitle}</td>
                <td style={{borderBottom: "1px solid black"}}>{props.description}</td>
                <td style={{borderBottom: "1px solid black"}}>{props.date}</td>
                <td style={{
                    borderBottom: "1px solid black",
                    }}>
                    <div style={{
                              display: "flex",
                              height: "100%",
                              alignItems: "center"
                          
                    }}>
                      <PlayCircleOutlineIcon />
                      {props.video}
                    </div>
                 
                </td>
                <td style={{
                     borderBottom: "1px solid black"}}>{props.status}</td>
                <td style={{borderBottom: "1px solid black"}}><DeleteIcon /></td>
            </tr>
     
    )
}

export default Row;
