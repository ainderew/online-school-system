import React, {useState} from "react";
import Styles from "./create-class-form.module.scss";
import {createSubjectEndpoint} from "../../utilities/vars";
import {useSelector} from "react-redux"

const CreateClassForm = ({ScheduleModal}) =>{
    const scheduleData = useSelector(state => state.scheduleData)
    const [input, setInput] = useState({
        subjectName: "",
        subjectCode: "",
        numberOfHours: "",
        instructor: "",
        semester: "",
        year: "",
        schedule: scheduleData
    })
    const onInput = (e) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const onCreate = (e) =>{
        e.preventDefault()
        fetch(createSubjectEndpoint,{
            method: "POST",
            mode: "cors",
            headers:{
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(input)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    return(
        <form className={Styles.form}>
            <div className={`${Styles.row} ${Styles.row1}`}>
                <div className={`${Styles.inputContainer} ${Styles.nameContainer}`}>
                    <label htmlFor="subjectName" className={Styles.label}>Subject Name</label>
                    <input value={input.name} onChange={onInput} name="subjectName" type="text" className={Styles.input}/>
                </div>
                <div className={Styles.inputContainer}>
                    <label htmlFor="subjectCode" className={Styles.label}>Subject Code</label>
                    <input value={input.subjectCode} onChange={onInput} name="subjectCode" type="text" className={Styles.input}/>
                </div>
                <div className={Styles.inputContainer}>
                    <label htmlFor="numberOfHours" className={Styles.label}>Number of Hours</label>
                    <input value={input.numberOfHours} onChange={onInput} name="numberOfHours" type="text" className={Styles.input}/>
                </div>
            </div>
            
            <div className={`${Styles.row} ${Styles.row2}`}>
                <div className={`${Styles.inputContainer} ${Styles.instructorInput}`}>
                    <label htmlFor="Instructor" className={Styles.label}>Instructor</label>
                    <input value={input.Instructor} onChange={onInput} name="instructor" type="text" className={Styles.input}/>
                </div>
                <div className={Styles.inputContainer}>
                    <label htmlFor="semester" className={Styles.label}>Semester</label>
                    <select value={input.semester} onChange={onInput} name="semester" className={Styles.select}>
                        <option value=""></option>
                        <option value="First Semester">First Semester</option>
                        <option value="Second Semester">Second Semester</option>
                        <option value="Summer">Summer</option>
                    </select>
                </div>
                <div className={Styles.inputContainer}>
                    <label htmlFor="Year" className={Styles.label}>Year</label>
                    <input value={input.Year} onChange={onInput} name="year" type="text" className={Styles.input}/>
                </div>
            </div>
            <div className={`${Styles.row} ${Styles.btnContainer}`}>
                <button onClick={ScheduleModal} type="button" className={`${Styles.btn}`}>Set Schedule</button>
                <button onClick={onCreate} type="submit" className={`${Styles.btn} ${Styles.createBtn}`}>Create</button>
            </div>
        </form>
    )
}

export default CreateClassForm;