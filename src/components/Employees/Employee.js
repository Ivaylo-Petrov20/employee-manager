import React, { useState, useContext } from "react";
import Context from "../store/context";

import DetailsModal from "../UI/DetailsModal";
import EmployeeDetails from "./EmployeeDetails";

const Employee = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const employee = props.employee;
  const ctx = useContext(Context);

  const showDetailsHandler = () => {
    ctx.setTaskToFalse();
    setShowDetails(true);
  };

  const hideDetailsHanlder = () => {
    ctx.setTaskToFalse();
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
          />
        </DetailsModal>
      )}
    </li>
  );
};

export default Employee;
