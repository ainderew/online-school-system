import React, {useState} from "react";
import Styles from "./prospectus-page.module.scss";
//COMPONENTS
import Dashboard from "../../Components/dashboard/dashboard.components";
import CreateProspectus from "../../Components/create-prospectus-form/create-prospectus-form.component";
import ChooseCourse from "../../Components/choose-course/choose-course.component";

const ProspectusPage = () =>{
    const [courseDetails, setCourseDetails] = useState()
    const [buffer, setBuffer] = useState(true)
    
    return(
        <div className={Styles.screen}>
             <div className={Styles.inner}>
                <Dashboard /> 
                <div className={Styles.rightContainer}>
                   {(buffer) ? <ChooseCourse  SetCourseFunction={setCourseDetails} SetBufferFunction={setBuffer} /> : <CreateProspectus courseDetails={courseDetails}/>}
                </div>
            </div>
        </div>
    )
}

export default ProspectusPage