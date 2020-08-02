import React, {useState, useEffect} from "react";
import Styles from "./home-page.module.scss";
import {useSelector} from "react-redux"
//COMPONENTS
import Dashboard from "../../Components/dashboard/dashboard.components";
//IMAGES
import Grade11Batch1 from "../../Assets/schedules/Grade11_Batch1.png";
import Grade11Batch2 from "../../Assets/schedules/Grade11_Batch2.png";
import Grade12Batch1 from "../../Assets/schedules/Grade12_Batch1.png";
import Grade12Batch2 from "../../Assets/schedules/Grade12_Batch2.png";


const HomePage = () =>{
    const initializeDate = new Date()
    const time = initializeDate.getHours();
    const userData = useSelector(state => state.userData)
    const {name,gender,yearLevel} = userData
    const [greetings, setGreetings] = useState();
    const [schedule, setSchedule] = useState()
    
    //FUNCTIONS
    const scheduleChecker = () =>{
            switch (gender && yearLevel){
                case "male" && "Grade11":
                    console.log("male grade11")
                    break;
                default:
                    break;
            }
    }
    
    useEffect(() => {
        
        //CHECKS TIME FOR GREETINGS
        if (time < 11){
            setGreetings("Good Morning")
        }
        else if(time > 11 && time < 18){
            setGreetings("Good Afternoon")
        }else{
            setGreetings("Good Evening")
        }
        
        scheduleChecker()
        
    }, []);
    
    
    
    return(
        <div className={Styles.screen}>
            <div className={Styles.inner}>
                <Dashboard />
                <div className={Styles.rightContainer}>
                    <div className={`${Styles.container}`}>
                        <h1 className={Styles.h1}>
                            {greetings},  <span className={Styles.span}>{name}</span> here are your updates.
                         </h1>
                    </div>
                    <div className={Styles.ScheduleContainer}>
                        <img src={schedule} alt="Schedule" className={Styles.scheduleImg} />
                        <a href={Grade12Batch1} className={Styles.downloadBtn} download="Schedule">Download Schedule</a>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default HomePage;