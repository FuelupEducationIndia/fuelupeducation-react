import logo from './images/logo.png'
import profile from './images/ellipse-284@2x.png'
import alert from './svg/notification.svg'
import setting from './svg/setting.svg'
import dropdown from './svg/dropdownarrow.svg'
import Routing2 from './Routing2'
import picture from './heading.jpg';

const Header = () => {
    return (
        <>
        <div className="header">
            <div className="head-image">
                <img src={logo} />
            </div>
            <div className="header-names">
                <ul>
                    <button><h2>Dashboard</h2></button>
                    <button>
                    <h2>Courses
                    <img src={dropdown} /></h2>
                    </button>
                    <button><h2>Schedule</h2></button>
                    <button><h2>Study Groups </h2></button>
                    <button><h2>Tickets</h2></button>
                    <button>
                        <h2>Profile
                        <img src={dropdown} /></h2>
                    </button>
                </ul>
            </div>
            <div className="header-profile">
                <button>
                    <img src={alert} />
                </button>
                <button>
                    <img src ={setting} />
                </button>
                <button>
                    <img src={profile} />
                </button>
            </div>
            {/* <div className="headingpic">
                <img src= {picture} />
            </div> */}
        </div>
        
        <div className="classsheetal">
            <Routing2 />
        </div>

        </>
    );
};

export default Header;