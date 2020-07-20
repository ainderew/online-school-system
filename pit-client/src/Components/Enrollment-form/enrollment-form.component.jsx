import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import Styles from "./enrollment-form.module.scss";

//IMAGES
import Illustration from "../../Assets/enrollment-illustration.svg";

const endpoint = "http://localhost:5000/enrollmentForm/submitEnrollmentForm"
const EnrollmentForm = () =>{
    const history = useHistory();
    const [inputs, setInputs] = useState({
        name: "",
        idNumber: "",
        email: "",
        messengerName: "",
        yearLevel: "",
        guardianName: "",
        internetConnection: ""
    })
    
    const onInput = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    
    const resetInputs = (e) =>{
        e.preventDefault()
        setInputs({
            name: "",
            idNumber: "",
            email: "",
            messengerName: "",
            yearLevel: "",
            guardianName: "",
            internetConnection: ""
        })
    }
    
    const submit = (e) =>{
        e.preventDefault();
        fetch(endpoint, {
            method: "POST",
            mode: "cors",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputs)
        })
        .then(response => response.json())
        .then(data => {
            if (data === "Successful"){
                console.log("success")
                history.push("/home")
            }else{
                alert("not successful")
            }
        })
    }
    
    return(
        <div className={Styles.container}>
            <div className={Styles.left}>
                <img src={Illustration} alt="Online Classes" className={Styles.img}/>
            </div>
            <form className={Styles.form}>
                <div className={Styles.row}>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="name" className={Styles.label}>Name</label>
                        <input value={inputs.name} name="name" onChange={onInput} type="text" className={Styles.nameInput}/>
                    </div>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="idNumber" className={Styles.label}>Id Number/LRN</label>
                        <input value={inputs.idNumber} name="idNumber" onChange={onInput} type="text" className={Styles.nameInput}/>
                    </div>
                </div>
                <div className={Styles.row}>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="email" className={Styles.label}>Email Address</label>
                        <input value={inputs.email} name="email" onChange={onInput} type="text" className={Styles.nameInput}/>
                    </div>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="messengerName" className={Styles.label}>Facebook Name</label>
                        <input value={inputs.messengerName} name="messengerName" onChange={onInput} type="text" className={Styles.nameInput}/>
                    </div>
                </div>
                <div className={Styles.row}>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="yearLevel" className={Styles.label}>Grade Level</label>
                        <select value={inputs.yearLevel} name="yearLevel" onChange={onInput} type="text" className={Styles.nameInput}>
                            <option value="Grade 11">SHS Grade 11</option>
                            <option value="Grade 12">SHS Grade 12</option>
                        </ select>
                    </div>
                </div>
                <div className={Styles.row}>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="guardianName" className={Styles.label}>Parent/Guardian's Name</label>
                        <input value={inputs.guardianName} name="guardianName" onChange={onInput} placeholder="Enter Parent/Guardian's Name" type="text" className={Styles.nameInput}/>
                    </div>
                </div>
                <div className={Styles.row}>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="internetConnection" className={Styles.label}>Rate your internet connection</label>
                        <select value={inputs.internetConnection} name="internetConnection" onChange={onInput} type="text" className={Styles.nameInput}>
                            <option value="none">No internet and/or No computer</option>
                            <option value="bad/slow/not-stable">Slow and/or unstable internet onnection</option>
                            <option value="fast">Average/Fast internet connection</option>
                        </ select>
                    </div>
                </div>
                <div className={Styles.btnContainer}>
                    <button onClick={resetInputs} type="reset" className={Styles.reset}>Reset</button>
                    <button onClick={submit} type="submit" className={Styles.submit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EnrollmentForm;