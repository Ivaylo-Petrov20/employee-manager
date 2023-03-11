import React from "react";

import styles from "./TaskDetails.module.css";

const TaskDetails = (props) => {
  return (
    <div className={styles.container}>
      <p>
        Title: <span>{props.task.title}</span>
      </p>
      <p>
        Descripion: <span>{props.task.descripion}</span>
      </p>
      <p>
        Assignee: <span>{props.task.assignee}</span>
      </p>
      <p>
        Due Date: <span>{props.task.dueDate}</span>
      </p>
    </div>
  );
};

export default TaskDetails;
