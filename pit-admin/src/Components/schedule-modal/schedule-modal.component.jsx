import React, { useState, useEffect } from "react";
import Styles from "./schedule-modal.module.scss";

//COMPONENTS
import Row from "./row/row.component";
import TimeRow from "./time-row/time-row.component";

const ScheduleModal = ({ modalToggle }) => {
  const [submitState, setSubmitState] = useState(false);

  const onSubmit = () => {
    setSubmitState(true);
    //
  };
  useEffect(() => {
    setSubmitState(false);
    console.log(submitState);
  }, []);
  return (
    <div className={Styles.modal}>
      <div className={Styles.scheduleModal}>
        <TimeRow />
        <Row day="Monday" submitState={submitState} />
        <Row day="Tuesday" submitState={submitState} />
        <Row day="Wednesday" submitState={submitState} />
        <Row day="Thursday" submitState={submitState} />
        <Row day="Friday" submitState={submitState} />
        <Row day="Saturday" submitState={submitState} />
        <Row day="Sunday" submitState={submitState} />
      </div>

      <div className={Styles.btnContainer}>
        <button onClick={modalToggle} className={Styles.btn}>
          Close
        </button>
        <button onClick={onSubmit} className={Styles.btn}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ScheduleModal;
