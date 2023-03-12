import React from "react";
import Card from "../UI/Card";

import styles from "./LeaderBoard.module.css";

const LeaderBoard = (props) => {
  return (
    <Card className={styles.card} onConfirm={props.onClick}>
      <div className={styles.container}>
        {props.employees.map((employee, index) => (
          <p key={employee.id}>
            {index + 1}. {employee.fullName}
          </p>
        ))}
        <button onClick={props.onClick}>Hide LeaderBoard</button>
      </div>
    </Card>
  );
};

export default LeaderBoard;
