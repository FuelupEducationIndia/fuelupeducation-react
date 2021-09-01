import './topbar.scss'
import { MdAddAlert } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import Logo from '../../images/fuelup.jpg'
import { useEffect, useState } from 'react';


export default function Topbar(){

    const[istablet,setTablet] = useState(false)

    useEffect(() => {
        let list = document.querySelector(".topbarItems");

        window.addEventListener('resize', () => {
           
            if(window.innerWidth < 950){
                    if(list.style.display === "none")
                         list.style.display = "flex"
                // list.style.display = "none"
            }
                 
        });
    
    }, [])
    const handleClostClick = () => {
        setTablet(false);
        let list = document.querySelector(".topbarItems");
        list.style.display = "none"
    }

    const handleMenuClick = () => {
        setTablet(true)
        let list = document.querySelector(".topbarItems");
        list.style.display = "flex"
    }

    return(

        <div className='topbar'>
            <div className='logo'>
                <img className='compLogo' src={Logo} alt="" />
                {
                    istablet ? ( <MdClose className='closeBtn' onClick={handleClostClick}/>):
                    (<MdMenu className='menuBtn' onClick={handleMenuClick}/>)
                }
            </div>

        

                <div className='topbarItems'>

                    <ul className='topbarList'>

                        <li className='topbarListItem'><a href="">Dashboard</a></li>
                        <li className='topbarListItem'><a href="">Courses</a></li>
                        <li className='topbarListItem'><a href="">Schedule</a></li>
                        <li className='topbarListItem'><a href="">Study Groups</a></li>
                        <li className='topbarListItem'><a href="">Tickets</a></li>
                        <li className='topbarListItem'><a href="">Profile</a></li>

                    </ul>

                    <div className='topbarProfileItems'>
                        <ul className='profileList'>
                            <li className='topbarIcons'><MdAddAlert /></li>
                            <li className='topbarIcons'><MdSettings /></li>
                            <li className='topbarIcons'><MdAccountCircle /></li>
                        </ul>
                    </div>

                </div>
          
            
        </div>
    );
}