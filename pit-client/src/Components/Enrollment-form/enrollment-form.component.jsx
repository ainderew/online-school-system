import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import Styles from "./enrollment-form.module.scss";
import {enrollmentEndpoint} from "../../utilities/vars"
//IMAGES
import Illustration from "../../Assets/enrollment-illustration.svg";


const EnrollmentForm = () =>{
    const history = useHistory();
    const [inputs, setInputs] = useState({
        name: "",
        idNumber: "",
        email: "",
        messengerName: "",
        yearLevel: "",
        guardianName: "",
        internetConnection: "",
        phoneNumber: "",
        guardianPhoneNumber: "",
        gender: ""
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
            internetConnection: "",
            phoneNumber: "",
            guardianPhoneNumber: "",
            gender: ""
        })
    }
    
    const submit = (e) =>{
        e.preventDefault();
        fetch(enrollmentEndpoint, {
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
                alert(data)
                console.log(data)
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
                        <label htmlFor="email" className={Styles.label}>Phone Number</label>
                        <input value={inputs.phoneNumber} name="phoneNumber" onChange={onInput} type="text" className={Styles.nameInput}/>
                    </div>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="messengerName" className={Styles.label}>Guardian's Phone Number</label>
                        <input value={inputs.guardianPhoneNumber} name="guardianPhoneNumber" onChange={onInput} type="text" className={Styles.nameInput}/>
                    </div>
                </div>
                <div className={Styles.row}>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="yearLevel" className={Styles.label}>Grade Level</label>
                        <select value={inputs.yearLevel} name="yearLevel" onChange={onInput} className={Styles.nameInput}>
                            <option value=""></option>
                            <option value="Grade11">SHS Grade 11</option>
                            <option value="Grade12">SHS Grade 12</option>
                        </ select>
                    </div>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="gender" className={Styles.label}>Gender</label>
                        <select value={inputs.gender} name="gender" placeholder="Gender will affect schedule" onChange={onInput} className={Styles.nameInput}>
                            <option value=""></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
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