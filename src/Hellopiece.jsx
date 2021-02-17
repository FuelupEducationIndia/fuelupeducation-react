import svg from './svg/welcomeimage.svg'
import { NavLink } from 'react-router-dom'

const Hello = () =>{
    return(
        <>
        <div className="helloclass">
            <div className="Sheetal"  >
                <h1>Welcome Sheela!</h1>
                <p>Check what's up with our schedule...</p>
            </div>
            <div className="sheetalimage">
                <img src={svg} />
            </div>
        </div>
        <div className="middlestart">
            <ul>
                <button>
                <NavLink className="abcd" exact to="BrowseCourse"><h3>Browse Course</h3></NavLink>
                </button>
                <button>
                <NavLink className="abcd" exact to="MyCourses"><h3>My Courses</h3></NavLink>
                </button>
                <button>
                <NavLink className="abcd" exact to="Lectures"><h3>Lectures</h3></NavLink>
                </button>
                <button>
                <NavLink className="abcd" exact to="/Exam"><h3>Exam</h3></NavLink>
                </button>
                <button>
                <NavLink className="abcd" exact to="/Assignments"><h3>Assignments</h3></NavLink>
                </button>
                <button>
                <NavLink className="abcd" exact to="/Attendance"><h3>Attentance</h3></NavLink>
                </button>
                <button>
                <NavLink className="abcd" exact to="/Certificate"><h3>Certificate</h3></NavLink>
                </button>
                
                
            </ul>
        </div>
        
        </>
        
    )
}
export default Hello;