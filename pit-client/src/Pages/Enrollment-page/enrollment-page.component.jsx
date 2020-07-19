import React, {useState} from "react"
import Styles from "./enrollment-page.module.scss"

//IMAGES
// import Logo from "../../Assets/logo.png"
//COMPONENTS
import EnrollmentCodeForm from "../../Components/Enrollment-code-form/enrollment-code-form.component"
const EnrollmentPage = () =>{
    const [confirmationStatus, setConfirmationStatus] = useState(false)
    

    //FUNCTIONS
   
    return(
        <div className={Styles.screen}>
           {(confirmationStatus) ? null : <EnrollmentCodeForm setConfirmationStatus={setConfirmationStatus} />}
        </div>
    )
}
export default EnrollmentPage;