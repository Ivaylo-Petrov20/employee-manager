import React from "react";

import styles from "./EmployeeDetails.module.css";

const EmployeeDetails = (props) => {
  return (
    <div className={styles.container}>
      <p>
        Full Name: <span>{props.name}</span>
      </p>
      <p>
        Email: <span>{props.email}</span>
      </p>
      <p>
        Phone Number: <span>{props.number}</span>
      </p>
      <p>
        Date of Birth: <span>{props.dateOfBirth}</span>
      </p>
      <p>
        Salary: <span>${props.salary}</span>
      </p>
      <p>
        Tasks Completed: <span>{props.tasksCompleted}</span>
      </p>
    </div>
  );
};

export default EmployeeDetails;
