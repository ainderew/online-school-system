import React from "react";
import {useHistory} from "react-router-dom"
import Styles from "./header.module.scss";

import Logo from "../../Assets/logo.png"
import StudentPhoto from "../../Assets/Andrew.jpg"

const Header = () =>{
    let history = useHistory();
    return(
        <header className={Styles.header}>
            <div className={Styles.headerInner}>
                <div className={Styles.row1}>
                    <img src={Logo} alt="Pit logo" className={Styles.logo}/>
                    <div className={Styles.textContainer}>
                        <h1 className={Styles.h1}>PALOMPON INSTITUTE OF TECHNOLOGY</h1>
                        <p className={Styles.p}>A Charter State College since 1972</p>
                    </div>
                </div>
                <div className={Styles.row2}>
                    <ul className={Styles.ul}>
                            <li onClick={()=>history.push("/home")} className={Styles.li}>Home</li>
                            <li onClick={()=>history.push("/home")} className={Styles.li}>Announcements</li>
                    </ul>
                </div>
                <div className={Styles.row3}>
                    {/* <div className={Styles.row3inner}> */}
                        <h2 className={Styles.name}>Andrew P</h2>
                        <img src={StudentPhoto} alt="" className={Styles.studentImg}/>
                    {/* </div> */}
                </div>
            </div>
        </header>
    )
}
export default Header;