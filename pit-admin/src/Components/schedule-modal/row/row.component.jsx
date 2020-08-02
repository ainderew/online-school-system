import React, { useState, useEffect } from "react";
import Styles from "./row.module.scss";
import { initializeScheduleRow } from "../../../utilities/";
import { useDispatch, useSelector } from "react-redux";
import { ScheduleDataAction } from "../../../redux_actions";

const Row = ({ day, submitState }) => {
  const scheduleData = useSelector(state => state.scheduleData);
  const dispatch = useDispatch();
  const [rowState, setRowState] = useState([]);

  //INITIALIZES ROWS FOR ROWSTATE
  useEffect(() => {
      if (Object.entries(scheduleData).length !== 0){
        switch(day){
          case "Monday":
            setRowState(scheduleData[0].Monday)
            break;
          case "Tuesday":
            setRowState(scheduleData[1].Tuesday)
            break
          case "Wednesday":
            setRowState(scheduleData[2].Wednesday)
            break;
          case "Thursday":
            setRowState(scheduleData[3].Thursday)
            break
          case "Friday":
            setRowState(scheduleData[4].Friday)
            break;
          case "Saturday":
            setRowState(scheduleData[5].Saturday)
            break
          case "Sunday":
            setRowState(scheduleData[6].Sunday)
            break
          default:
            break;
        }
          
      }else{
        setRowState(initializeScheduleRow);
      }
    
  }, []);

  //SUBMITS SCHEDULE DATA TO REDUCER WHEN SUBMIT IS PERSSED ON THE SHEDULE MODAL
  useEffect(() => {
    if (submitState) {
      dispatch(ScheduleDataAction(rowState,day))
      console.log("submitted row data")
    }
  }, [submitState]);

  const c = index => {
    let placeHolder = [...rowState];
    const on = {
      state: true
    };
    const off = {
      state: false,
    };
    if (rowState[index].state) {
      placeHolder.splice(index, 1, off);
    } else {
      placeHolder.splice(index, 1, on);
    }
    setRowState(placeHolder);
  };

  return (
    <div className={Styles.row}>
      <div className={`${Styles.cel} ${Styles.dayCel}`}>{day}</div>
      {rowState.map((el, index) => {
        return (
          <div
            onClick={() => c(index)}
            key={index}
            className={
              rowState[index].state === true ? Styles.active : Styles.cel
            }></div>
        );
      })}
    </div>
  );
};

export default Row;
