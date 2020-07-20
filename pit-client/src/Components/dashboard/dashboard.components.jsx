import React from "react";
import {Link} from "react-router-dom"
import Styles from "./dashboard.module.scss";

import studentImg from "../../Assets/Andrew.jpg"

const Dashboard = () =>{
    return(
        <div className={Styles.dashboard}>
            <div className={Styles.inner}>
                <div className={Styles.row1}>
                    <img src={studentImg} alt="" className={Styles.studentImg}/>
                    <h1 className={Styles.name}>Andrew P.</h1>
                </div>
                <div className={Styles.row2}>
                    <ul className={Styles.ul}>
                        <Link>
                            <li className={Styles.li}>Schedule</li>
                        </Link>
                        <Link>
                            <li className={Styles.li}>Classes</li>
                        </Link>
                        <Link>
                            <li className={Styles.li}>Enrollment</li>
                        </Link>
                    </ul>
                </div>
                <div className={Styles.row3}>
                    <ul className={Styles.ul2}>
                        <li className={Styles.li2}>
                            <div className={Styles.contactContainer}>
                                <h1 className={Styles.email}>Email</h1>
                                <p className={Styles.infoP}>andrewapinon@gmail.com</p>
                            </div>
                        </li>
                        <li className={Styles.li2}>
                            <div className={Styles.contactContainer}>
                                <h1 className={Styles.email}>Phone Number</h1>
                                <p className={Styles.infoP}>096564216</p>
                            </div>
                        </li>
                        <li className={Styles.li2}>
                            <div className={Styles.contactContainer2}>
                                <h1 className={Styles.email}>Guardian</h1>
                                <p className={Styles.infoP}>Papa</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;