import React from "react";
import Styles from "./home-page.module.scss";
//COMPONENTS
import Dashboard from "../../Components/dashboard/dashboard.components";

const HomePage = () =>{
    return(
        <div className={Styles.screen}>
            <div className={Styles.inner}>
                <Dashboard />
            </div>
         </div>
    )
}

export default HomePage;