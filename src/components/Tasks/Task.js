import React, { useState, useContext } from "react";

import Context from "../store/context";
import DetailsModal from "../UI/DetailsModal";
import TaskDetails from "./TaskDetails";

const Task = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const task = props.task;
  const ctx = useContext(Context);

  const showDetailsHandler = () => {
    ctx.setTaskToTrue();
    setShowDetails(true);
  };

  const hideDetailsHandler = () => {
    ctx.setTaskToFalse();
    setShowDetails(false);
  };

  return (
    <li>
      {task.title}
      <button onClick={showDetailsHandler}>Details</button>
      {showDetails && (
        <DetailsModal
          onComplete={props.onComplete}
          onDelete={props.onDelete}
          onConfirm={hideDetailsHandler}
        >
          <TaskDetails task={task} />
        </DetailsModal>
      )}
    </li>
  );
};

export default Task;
