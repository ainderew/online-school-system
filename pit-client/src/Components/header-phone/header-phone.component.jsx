import React from "react";
import Styles from "./header-phone.module.scss";

//IMAGES
import menuBtn from "../../Assets/icons/phoneBurger.svg"
const PhoneHeader = () =>{
    return(
        <div className={Styles.header}>
            <h1 className={Styles.h1}>PIT</h1>
            <img src={menuBtn} alt="" className={Styles.menuBtn} />
        </div>
    )
}

export default PhoneHeader;