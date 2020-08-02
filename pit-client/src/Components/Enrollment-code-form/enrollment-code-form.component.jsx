import React, {useState, useRef} from "react"
import Styles from "./enrollment-code-form.module.scss";
import {enrollmentCodeEndpoint} from "../../utilities/vars";
//IMAGES
import Logo from "../../Assets/logo.png"


const EnrollmentCodeForm = ({setConfirmationStatus}) =>{
    let codeInput = useRef(null)
    const [enrollmentCode, setEnrollmentCode] = useState("")

    //FUNCTIONS
    const enrollmentCodeInput = (e) =>{
        setEnrollmentCode(e.target.value)
    }
    const submitCode = async (e) =>{
        e.preventDefault();
        
        const obj ={
            enrollmentCode: enrollmentCode
        }
        await fetch (enrollmentCodeEndpoint,{
            method: "POST",
            mode: "cors",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            if (data === "Verified"){
                setConfirmationStatus(true)
            }else{
                codeInput.style = "border: 3px solid red"
                setEnrollmentCode("Invaid Code")
            }
        })
    }
    
    return(
        <React.Fragment>
            <form className={Styles.enrollmentCode}>
               <div className={Styles.logoContainer}>
                   <img src={Logo} alt="PIT logo" className={Styles.logo}/>
               </div>
               <div className={Styles.formBody}>
                   <div className={Styles.codeFormRow}>
                       <label htmlFor="enrollmentCode" className={Styles.label}>Enrollment Code</label>
                       <input ref={el => codeInput = el} value={enrollmentCode} onChange={enrollmentCodeInput} type="text" className={Styles.input}/>
                   </div>
               </div>
               <div className={Styles.btnContainer}>
                   <button onClick={submitCode} className={Styles.enrollmentBtn}>Submit</button>
               </div>
           </form>
        </React.Fragment>
    )
}

export default EnrollmentCodeForm;