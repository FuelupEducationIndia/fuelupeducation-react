import { NavLink} from 'react-router-dom'
import Card from './Card'
import image from './images/Student - exam - 2nd.png'

const Question =() =>{
    
    return(
        <>
        <div className="startques">
            <div className="quesclass">
                <NavLink exact to='/Card'  className="gol">
                </NavLink>
                <p>Question 1</p>
            </div>
            <div className="line"></div>    
            <div className="quesclass">
                <NavLink exact to='Card' className="gol1">
                    </NavLink>
                    <p>Question 2</p>
            </div>
            <div className="line1"></div>    
            <div className="quesclass">
                <NavLink exact to='Card' className="gol1">
                </NavLink>
                <p>Question 3</p>
            </div>
            <div className="line1"></div>    
            <div className="quesclass">
                <NavLink exact to='Card' className="gol1">
                </NavLink>
                <p>Question 4</p>
            </div>
            <div className="line1"></div>    
            <div className="quesclass">
                <NavLink exact to='Card' className="gol1">
                </NavLink>
                <p>Question 5</p>
            </div>
            <div className="line1"></div>    
            <div className="quesclass">
                <NavLink exact to='Card' className="gol1">
                </NavLink>
                <p>Question 6</p>
            </div>
            <div className="line1"></div>    
            <div className="quesclass">
                <NavLink exact to='Card' className="gol1">
                </NavLink>
                <p>Question 6</p>
            </div>
        </div>
        <div>
            <Card />
        </div>
        {/* <div>
            <img src={image} />
        </div> */}

        </>
    )
}

export default Question;