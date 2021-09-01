import './upcoming.scss';
import Event from './Event';
import { FaRegCalendar } from "react-icons/fa";


export default function Upcoming(){
    return(
        <div className='upcoming'>
            <h2>UPCOMING EVENTS</h2>
            <hr />
            <div className='date-cont'>
                <FaRegCalendar />
                <p>{new Date().toDateString() + ""}</p>
            </div>
            <Event />
            <Event />
            <Event />
        </div>
    );
}