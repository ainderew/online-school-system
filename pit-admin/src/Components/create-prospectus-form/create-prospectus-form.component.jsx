import React, {useState,useEffect} from "react";
import Styles from "./create-prospectus-from.module.scss";
import {createProspectusEndpoint} from "../../utilities/vars";

const CreateProspectus = ({courseDetails}) => {
    useEffect(() => {
        console.log(courseDetails)
    }, []);
    const [firstSemester, setFirstSemester] = useState([])
    const [secondSemester, setSecondSemester] = useState([])
    const [input, setInput] = useState({
        firstSemName: "",
        firstSemCode: "",

        secondSemName: "",
        secondSemCode: ""
    })
    
    const onInput = (e) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    const onAdd = (semester,e) =>{
        e.preventDefault();
        if (semester === 1){
            const obj = {
                subjectName: input.firstSemName,
                subjectCode: input.firstSemCode
            }
            setFirstSemester([
                ...firstSemester,
                obj
            ])
        }else{
            const obj = {
                subjectName: input.secondSemName,
                subjectCode: input.secondSemCode
            }
            setSecondSemester([
                ...secondSemester,
                obj
            ])
        }
        clearInput()
    }
    
    const onDelete = (semester,index) =>{
        console.log(index)
        if (semester === 1){
            let temp = [...firstSemester] 
            temp.splice(index,1)
            setFirstSemester(temp)
        }else{
            let temp = [...secondSemester] 
            temp.splice(index,1)
            setSecondSemester(temp)
        }
    }
    
    const clearInput = () =>{
        setInput({
            firstSemName: "",
            firstSemCode: "",
            secondSemName: "",
            secondSemCode: ""
        })
    }
    
    
    const onCreate = (e) =>{
        e.preventDefault();
        const obj = {
            courseName: courseDetails.course,
            gender: courseDetails.gender,
            subjects: {
                firstSemester: firstSemester,
                secondSemester: secondSemester
            }
        }
        fetch(createProspectusEndpoint,{
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    
  return (
    <form className={Styles.form}>
      <div className={Styles.row}>
        <label htmlFor="" className={Styles.semesterLabel}>
          First Semester
        </label>
        <div className={Styles.labelDiv}>
            <h1 className={Styles.rowLabel}>Subject Code</h1>
            <h1 className={Styles.rowLabel}>Subject Name</h1>
        </div>
        {firstSemester.map((el,index) => {
            return <div key={index} className={Styles.subjectContainer}>
                 <h1 className={Styles.subject}>{el.subjectCode}</h1>
                 <h1 className={Styles.subject}>{el.subjectName}</h1>
                 <div className={Styles.deleteContainer}>
                     <span onClick={ () => onDelete(1,index)} className={Styles.deleteSubject}>delete</span>
                 </div>
            </div>
        })}
        <div className={Styles.inputContainer}>
          <input value = {input.firstSemCode} onChange={onInput} type="text" name="firstSemCode" placeholder="Subject Code" className={Styles.codeInput} />
          <input value = {input.firstSemName} onChange={onInput} type="text" name="firstSemName" placeholder="Subject Name" className={Styles.input} />
          <button onClick={ (e) => onAdd(1,e) } className={Styles.addBtn}>Add Subject</button>
        </div>
      </div>
      
      <div className={Styles.row}>
        <label htmlFor="" className={Styles.semesterLabel}>
          Second Semester
        </label>
        <div className={Styles.labelDiv}>
            <h1 className={Styles.rowLabel}>Subject Code</h1>
            <h1 className={Styles.rowLabel}>Subject Name</h1>
        </div>
        {secondSemester.map((el,index) => {
            return <div key={index} className={Styles.subjectContainer}>
                 <h1 className={Styles.subject}>{el.subjectCode}</h1>
                 <h1 className={Styles.subject}>{el.subjectName}</h1>
                 <div className={Styles.deleteContainer}>
                     <span onClick={ () => onDelete(2,index)} className={Styles.deleteSubject}>delete</span>
                 </div>
            </div>
        })}
        <div className={Styles.inputContainer}>
          <input value = {input.secondSemCode} onChange={onInput} type="text" name="secondSemCode" placeholder="Subject Code" className={Styles.codeInput} />
          <input value = {input.secondSemName} onChange={onInput} type="text" name="secondSemName" placeholder="Subject Name" className={Styles.input} />
          <button onClick={ (e) => onAdd(2,e) } className={Styles.addBtn}>Add Subject</button>
        </div>
      </div>
      <div className={Styles.btnContainer}>
          <button onClick={onCreate} className={Styles.createBtn}>Create Prospectus</button>
      </div>
    </form>
  );
};

export default CreateProspectus;