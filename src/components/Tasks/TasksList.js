import React from "react";

import Card from "../UI/Card";
import Task from "./Task";
import styles from "./TasksList.module.css";

const TaskList = (props) => {
  return (
    <Card className={styles.container}>
      <ul>
        <h1>Daily Tasks</h1>
        {props.tasks.length === 0 && <p>There are no active tasks.</p>}
        {props.tasks.length > 0 &&
          props.tasks.map((task) => {
            return (
              <Task
                onComplete={props.onComplete}
                onDelete={props.onDelete}
                task={task}
                key={task.id}
              ></Task>
            );
          })}
      </ul>
    </Card>
  );
};

export default TaskList;
