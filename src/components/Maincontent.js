import React, { PureComponent } from 'react';
import { BarChart, Bar, PieChart, Pie, XAxis, YAxis, Sector, ResponsiveContainer, Cell } from 'recharts';
import { FaRupeeSign } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import face from '../face.jpg';

const data1 = [
    { name: 'Amount Received', value: 624000, color: '#495a62' },
    { name: 'Amount Pending', value: 334000, color: '#ec7571' },
];
const data2 = [
    {
        name: 'Jun23',
        uv: 2000,
        pv: 2400,
        amt: 2290,
    },
    {
        name: 'Jul23',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Aug23',
        uv: 4000,
        pv: 9800,
        amt: 2400,
    },
];
const data3 = [
    {
        name: 'Jun23',
        uv: 2000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Jul23',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Aug23',
        uv: 4000,
        pv: 9800,
        amt: 2290,
    },
];
export default function Maincontent() {
    return (
        <div className="mainContent" >
            <div className="full firstRow" >
                <div className='firstRowFirst' >
                    <h1>Welcome Cynthia,</h1>
                    <h4>Here is a summary of your business</h4>
                </div>
                <div className='firstRowSecond' >
                    <button><IoSettingsOutline /></button>
                    <button><IoMdNotifications /></button>
                </div>
                <div className='firstRowThird' >
                    <img src={face} width="35px" height="42px" />
                    <div>
                        <h2>Cynthia John</h2>
                        <h4>cj@example.com</h4>
                    </div>
                </div>
            </div>
            <div className="half secondRow secondRowFirst fontSmaller" >
                <div className='fontLightGray' >
                    <p>ACTIVE STUDENTS</p>
                    <p>ACTIVE COACHES</p>
                </div>
                <div className='secondRowFirstSecond' >
                    <p>5,000</p>
                    <p>5</p>
                </div>
            </div>
            <div className="half secondRow secondRowSecond fontSmaller" >
                <div className='secondRowSecondFirst fontLightGray'><p>QUICK ACTIONS</p></div>
                <div className='secondRowSecondSecond' >
                    <button>+ Add new student</button>
                    <button>Collect Fees</button>
                    <button>+ Add new enquiry</button>
                </div>

            </div>
            <div className="half thirdRow thirdRowFirst " >
                <div className='thirdRowFirstFirst' >
                    <p>FEE PAYMENT SUMMARY</p>
                    <select name="payment" id="payment" className='customSelect' >
                        <option value="one">Last 30 days</option>
                        <option value="two">Last 60 days</option>
                        <option value="three">Last 90 days</option>
                        <option value="four">Last 120 days</option>
                    </select>
                </div>
                <ResponsiveContainer width="100%" height="60%">
                    <PieChart width={300} height={300}>
                        <Pie
                            // activeIndex={0}
                            data={data1}
                            cx="50%"
                            cy="50%"
                            innerRadius={25}
                            outerRadius={80}
                            fill="blue"
                            dataKey="value"
                        >
                            {data1.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className='thirdRowFirstThird' >
                    <div className='thirdRowFirstThirdMembers' >
                        <p className='fontLightGray fontSmaller' >AMOUNT RECEIVED</p>
                        <p><FaRupeeSign /><span className='fontLarger fontWeight' >624,000</span><span className='fontSmaller' > by 400 students</span></p>
                    </div>
                    <div  className='thirdRowFirstThirdMembers'>
                        <p className='fontLightGray fontSmaller' >AMOUNT PENDING</p>
                        <p><FaRupeeSign /><span className='fontLarger fontWeight' >334,000</span> <span className='fontSmaller' >by 123 students</span></p>
                    </div>
                </div>
            </div>
            <div className="half thirdRow thirdRowSecond" >
                <div className='thirdRowSecondFirst' >
                    <p>MONTH-ON-MONTH GROWTH</p>
                    <select name="payment" id="payment" className='customSelect' >
                        <option value="one">Last 3 months</option>
                        <option value="two">Last 6 months</option>
                        <option value="three">Last 9 months</option>
                        <option value="four">Last 12 months</option>
                    </select>
                </div>
                <ResponsiveContainer width="40%" height="70%" className="barContainer" >
                    <p className='fontSmaller padding' >Revenue</p>
                    <BarChart width={150} height={40} data={data2}>
                        <XAxis dataKey="name" className='fontSmaller' />
                        <YAxis />
                        <Bar dataKey="uv" fill="#505f66" />
                    </BarChart>
                    <p className='fontSmaller textAlign' >FEE RECEIVED</p>

                </ResponsiveContainer>
                <ResponsiveContainer width="40%" height="70%" className="barContainer" >
                    <p className='fontSmaller padding' >Students</p>
                    <BarChart width={150} height={40} data={data3}>
                        <XAxis dataKey="name" className='fontSmaller' />
                        <YAxis />
                        <Bar dataKey="uv" fill="#6e7b83" />
                    </BarChart>
                    <p className='fontSmaller textAlign ' >ACTIVE STUDENTS</p>

                </ResponsiveContainer>
            </div>
            <div className="full fourthRow" >
                <div className='fourthRowFirst' >
                    <div>
                        <p>UPCOMING SCHEDULE</p>
                    </div>
                    <div className='fourthRowFirstButtons'>
                        <button>All</button>
                        <button>Classes</button>
                        <button>Meetings</button>
                        <button>Events</button>
                    </div>
                    <div>
                        <p><HiDotsHorizontal /></p>
                    </div>
                </div>
                <div className='fourthRowSecond' >
                    <div className='fourthRowSecondList' >
                        <div className='fourthRowSecondListFirst' >
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='' />
                            <button className='' >C</button>
                        </div>
                        <p className='fourthRowSecondListthird'   >Fri, 01 Sep</p>
                        <p className='fourthRowSecondListFourth'   >3:00 PM - 4:00 PM</p>
                        <p className='fourthRowSecondListFifth'   >Beginners Badminton Class</p>
                        <p className='fourthRowSecondListSixth'   >Jonas</p>
                        <a className='fourthRowSecondListSeventh' href='/' >View</a>
                    </div>
                    <div className='fourthRowSecondList' >
                        <div className='fourthRowSecondListFirst' >
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='' />
                            <button className='' >C</button>
                        </div>
                        <p className='fourthRowSecondListthird'   >Fri, 01 Sep</p>
                        <p className='fourthRowSecondListFourth'   >6:00 PM - 7:30 PM</p>
                        <p className='fourthRowSecondListFifth'   >Intermediate Badminton Class</p>
                        <p className='fourthRowSecondListSixth'   >Jonas</p>
                        <a className='fourthRowSecondListSeventh' href='/' >View</a>
                    </div>
                    <div className='fourthRowSecondList' >
                        <div className='fourthRowSecondListFirst' >
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='' />
                            <button className='' >C</button>
                        </div>
                        <p className='fourthRowSecondListthird'   >Fri, 02 Sep</p>
                        <p className='fourthRowSecondListFourth'   >6:00 AM - 7:30 AM</p>
                        <p className='fourthRowSecondListFifth'   >Staff meeting</p>
                        <p className='fourthRowSecondListSixth'   >Jonas</p>
                        <a className='fourthRowSecondListSeventh' href='/' >View</a>
                    </div>
                    <div className='fourthRowSecondList' >
                        <div className='fourthRowSecondListFirst' >
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='' />
                            <button className='' >C</button>
                        </div>
                        <p className='fourthRowSecondListthird'   >Sat, 01 Sep</p>
                        <p className='fourthRowSecondListFourth'   >4:00 PM - 5:00 PM</p>
                        <p className='fourthRowSecondListFifth'   >Yoga Competition @Academy</p>
                        <p className='fourthRowSecondListSixth'   >Jonas</p>
                        <a className='fourthRowSecondListSeventh' href='/' >View</a>
                    </div>
                </div>
            </div>
        </div>
    );
}