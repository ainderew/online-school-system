import React, {useState} from "react"
import Styles from "./enrollment-page.module.scss"


//COMPONENTS
import EnrollmentCodeForm from "../../Components/Enrollment-code-form/enrollment-code-form.component"
import EnrollmentForm from "../../Components/Enrollment-form/enrollment-form.component"
const EnrollmentPage = () =>{
    const [confirmationStatus, setConfirmationStatus] = useState(false)
    

    //FUNCTIONS
   
    return(
        <div className={Styles.screen}>
           {(confirmationStatus) ? <EnrollmentForm /> : <EnrollmentCodeForm setConfirmationStatus={setConfirmationStatus} />}
           {/* <EnrollmentForm /> */}
        </div>
    )
}
export default EnrollmentPage;