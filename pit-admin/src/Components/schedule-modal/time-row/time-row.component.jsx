import React, { useState, useEffect } from "react";
import Styles from "./time-row.module.scss";

const TimeRow = () => {
  const [time, setTime] = useState([]);

  const initializeTime = () => {
    let temp = [];
    let ctr = 7;
    for (let i = 0; i < 28; i++) {
      if (i % 2 === 0) {
        temp.push(`${ctr}:30`);
        ctr++;
      } else {
        temp.push(`${ctr}:00`);
      }

      if (ctr === 13) {
        ctr = 1;
      }
    }
    setTime(temp);
  };

  useEffect(() => {
    initializeTime();
  }, []);

  return (
    <div className={Styles.row}>
        <div className={Styles.cel}></div>
      {time.map((el, index) => {
        return (
          <div key={index} className={Styles.cel}>
            <div className={Styles.celAlign}>{el}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TimeRow;
