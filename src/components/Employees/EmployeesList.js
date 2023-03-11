import React from "react";

import Card from "../UI/Card";
import styles from "./EmployeesList.module.css";
import Employee from "./Employee";

const EmployeesList = (props) => {
  return (
    <Card className={styles.container}>
      <ul>
        <h1>Employees List</h1>
        {props.employees.length === 0 && (
          <p>There are no registered employees in this firm.</p>
        )}
        {props.employees.length > 0 &&
          props.employees.map((employee) => {
            return (
              <Employee onDelete={props.onDelete} key={employee.id} employee={employee}>
              </Employee>
            );
          })}
      </ul>
    </Card>
  );
};

export default EmployeesList;
