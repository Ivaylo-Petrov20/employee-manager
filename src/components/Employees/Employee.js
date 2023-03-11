import React, { useState } from "react";

import DetailsModal from "../UI/DetailsModal";
import EmployeeDetails from "./EmployeeDetails";

const Employee = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const employee = props.employee;

  const showDetailsHandler = () => {
    setShowDetails(true);
  };

  const hideDetailsHanlder = () => {
    setShowDetails(false);
  };

  return (
    <li>
      {employee.fullName}
      <button onClick={showDetailsHandler}>Details</button>
      {showDetails && (
        <DetailsModal
          onDelete={props.onDelete}
          onConfirm={hideDetailsHanlder}
          employee={props.employee}
        >
          <EmployeeDetails
            name={employee.fullName}
            email={employee.email}
            number={employee.phoneNumber}
            dateOfBirth={employee.dateOfBirth}
            salary={employee.salary}
            tasksCompleted={employee.tasksCompleted}
          />
        </DetailsModal>
      )}
    </li>
  );
};

export default Employee;
