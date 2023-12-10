import React from 'react';
import logo from '../logoSparts.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaChildren } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

function Sidebar() {
    return (
 
        <div className="sidebar">
            <div className="logo" >
                <img src={logo} alt="" />
                <p className="fontLarger" >Fri,08 Dec</p>
            </div>
            <ul className="textColor  fontLightSmaller" >
                <p className='Seperation  paddingLeft' >Main menu</p>
                <li className='sideBarMembers' ><MdOutlineSignalCellularAlt  className='icons' /><a to="/"> Dashboard</a></li>
                <li className="seperation sideBarMembers" ><LuBuilding2  className='icons'/><a to="/analytics"> Academy management</a></li>
                <p className='Seperation paddingLeft' >More</p>
                <input type="search" id="site-search" name="q" placeholder="Search students by name" />
                <li className='sideBarMembers' ><a to="/reports"><FaChildren className='icons' /> Students</a></li>
                <li className='sideBarMembers' ><a to="/reports"><FaMoneyBillTransfer className='icons' /> Fee payment</a></li>
                <li className='sideBarMembers' ><a to="/reports"><MdPeople className='icons' /> Enquiries</a></li>
                <li className='sideBarMembers' ><a to="/reports"><FaChalkboardTeacher className='icons' /> Coaches</a></li>
                <li className='sideBarMembers' ><a to="/reports"><BsCalendar2CheckFill className='icons' /> Schedule</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;