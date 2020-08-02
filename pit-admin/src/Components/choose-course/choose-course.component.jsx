import React,{useState, useEffect} from "react";
import Styles from "./choose-course.module.scss";

const ChooseCourse = ({ SetCourseFunction, SetBufferFunction}) =>{
    const [select,setSelect] = useState({
        course: "",
        gender: ""
    })
    
    const onSelect = (e) =>{
        setSelect({
            ...select,
            [e.target.name]: e.target.value
        })
    }
    const onChoose = (e) =>{
        e.preventDefault();
        if (select.course === ""){
            alert("Please Choose Course")
        }else{
            SetBufferFunction(false) 
        }
    }
    
    useEffect(() => {
        SetCourseFunction(select)
    }, [select]);
    
    return(
        <div className={Styles.container}>
            <div className={Styles.section1}>
                <h1 className={Styles.h1}>Create Prospectus</h1>
            </div>
            <div className={Styles.section2}>
                <div className={Styles.row}>
                   <div className={`${Styles.inputContainer} ${Styles.ChooseCourse}`}>
                        <label htmlFor="course" className={Styles.label}>Choose Course</label>
                        <select onChange={onSelect} value={select.course} name="course" className={`${Styles.select} `}>
                            <option value="" className=""></option>
                            <option value="Grade11" className="">Grade 11</option>
                            <option value="Grade12" className="">Grade 12</option>
                        </select>
                   </div>
                   <div className={Styles.inputContainer}>
                        <label htmlFor="gender" className={Styles.label}>Gender</label>
                        <select onChange={onSelect} value={select.gender} name="gender" className={`${Styles.select}`}>
                            <option value="" className=""></option>
                            <option value="Male" className="">Male</option>
                            <option value="Female" className="">Female</option>
                        </select>
                   </div>
                    
                    
                </div>
               
                <button onClick={onChoose} className="">Choose</button>
            </div>
        </div>
    )
}

export default ChooseCourse;