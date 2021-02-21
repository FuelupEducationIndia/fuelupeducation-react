import Select from 'react-select'
import girl from './svg/dancinggirl.svg'
import Question from './quesrion';
import Quesrouting from './Quesrouting'

const Exam = () => {
    const dropdown1data = [
        {
            value : 1,
            label : "Rajasthan board"
        },
        {
            value : 2,
            label : "Rajasthan board"
        },
        {
            value : 3,
            label : "Rajasthan board"
        }
    ]
    const dropdown2data = [
        {
            value : 1,
            label : "Engineering"
        },
        {
            value : 2,
            label : "Micr Organism"
        },
        {
            value : 3,
            label : "IT management"
        }
    ]
    const dropdown3data = [
        {
            value : 1,
            label : "English"
        },
        {
            value : 2,
            label : "Hindi"
        },
        {
            value : 3,
            label : "Urdu"
        }
    ]
    return (
        <>
        <div className="thebloodybigdiv">
            <div className="thebloodydiv">
                <div className="checkbox">
                    <div>
                        <input type="radio"  name="vehicle"  />
                        <label for="vehicle">Dashboard</label><br/>
                    </div>
                    <div> 
                        <input type="radio"  name="vehicle" checked="checked" />
                        <label for="vehicle">Take Exam</label>
                    </div>
                </div>
                <div className="middleform">
                    <div className="board">
                        <h3>Board/University</h3>
                        <div className="select">
                            <Select 
                                options={dropdown1data}
                                placeholder="Board"
                            />
                        </div>
                        <div className="khali"></div>
                    </div>
                    <div className="course">
                        <h3>Course</h3>
                        <div className="select">
                            <Select 
                                options={dropdown2data}
                                placeholder="course"
                            />
                        </div>
                        <div className="khali"></div>
                    </div>
                    <div className="language">
                        <h3>Language</h3>
                        <div className="select">
                            <Select 
                                options={dropdown3data}
                                placeholder="language"
                            />
                        </div>
                        <div className="khali"></div>
                    </div>
                </div>
                <div >
                    <Question /> 
                </div>
            </div>
            <div className="bloodydancinggirl">
                    <img src={girl} />
            </div>
            
            {/* <div>
                <Quesrouting />
            </div> */}
        </div>
            
        </>
    )
}

export default Exam;