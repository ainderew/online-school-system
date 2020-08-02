import React,{useState} from "react";
import Styles from "./create-class.module.scss";

//COMPONENTS
import CreateClassForm from "../../Components/create-class-form/create-class-form.component"
import Dashboard from "../../Components/dashboard/dashboard.components";
import ScheduleModal from "../../Components/schedule-modal/schedule-modal.component"

const CreateClassPage = () =>{
    const [modalState, setModalState] = useState(false) 
    const [input, setInput] = useState({
        search: ""
    })
    const onInput = (e) =>{
        setInput({
            [e.target.name]: e.target.value
        })
    }
    const modalToggle = () =>{
        setModalState(prevState => !prevState)
    }
    return(
        <div className={Styles.screen}>
            <div className={Styles.inner}>
                <Dashboard />
                <div className={Styles.rightCol}>
                    {(modalState) ? <ScheduleModal modalToggle={modalToggle} /> : null}
                    <CreateClassForm ScheduleModal={modalToggle} />
                    <div className={Styles.search}>
                        <form className={Styles.searchForm}>
                            <div className={Styles.row}>
                                <label htmlFor="search" className={Styles.label}>Search Subject</label>
                                <input value={input.search} onChange={onInput} type="search" name="search" className={Styles.searchInput}/>
                            </div>
                            <button className={Styles.searchBtn}>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateClassPage;