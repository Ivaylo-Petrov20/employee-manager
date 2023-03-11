import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import styles from "./Form.module.css";

const Form = (props) => {
  const [switchForm, setSwitchForm] = useState(false);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const numberInputRef = useRef();
  const dateOfBirthInputRef = useRef();
  const salaryInputRef = useRef();

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const assigneeInputRef = useRef();
  const dueDateInputRef = useRef();

  const SwitchFormHandler = () => {
    setSwitchForm((prevState) => !prevState);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!switchForm) {
      if (
        nameInputRef.current.value.trim().length > 0 &&
        emailInputRef.current.value.trim().length > 0 &&
        numberInputRef.current.value.trim().length > 0 &&
        dateOfBirthInputRef.current.value.trim().length > 0 &&
        salaryInputRef.current.value.trim().length > 0
      ) {
        const employeeData = {
          name: nameInputRef.current.value,
          email: emailInputRef.current.value,
          number: numberInputRef.current.value,
          dateOfBirthInputRef: dateOfBirthInputRef.current.value,
          salaryInputRef: salaryInputRef.current.value,
        };

        props.onAddEmployee(employeeData);
        nameInputRef.current.value = "";
        emailInputRef.current.value = "";
        numberInputRef.current.value = "";
        dateOfBirthInputRef.current.value = "";
        salaryInputRef.current.value = "";
      }
    } else {
      if (
        titleInputRef.current.value.trim().length > 0 &&
        descriptionInputRef.current.value.trim().length > 0 &&
        assigneeInputRef.current.value.trim().length > 0 &&
        dueDateInputRef.current.value.trim().length > 0
      ) {
        const taskData = {
          title: titleInputRef.current.value,
          description: descriptionInputRef.current.value,
          assignee: assigneeInputRef.current.value,
          dueDate: dueDateInputRef.current.value,
        };
        props.onAddTask(taskData);
        titleInputRef.current.value = "";
        descriptionInputRef.current.value = "";
        assigneeInputRef.current.value = "";
        dueDateInputRef.current.value = "";
      }
    }
  };

  return (
    <Card className={styles.container}>
      <form className={styles.form} onSubmit={submitFormHandler}>
        {!switchForm ? (
          <React.Fragment>
            <div>
              <h1>Employee Data</h1>
            </div>
            <div>
              <label>Full Name:</label>
              <input ref={nameInputRef} type="text" required />
            </div>
            <div>
              <label>Email:</label>
              <input ref={emailInputRef} type="email" required />
            </div>
            <div>
              <label>Phone Number:</label>
              <input ref={numberInputRef} required />
            </div>
            <div>
              <label>Date of Birth:</label>
              <input ref={dateOfBirthInputRef} type="date" required />
            </div>
            <div>
              <label>Monthly Salary:</label>
              <input
                ref={salaryInputRef}
                type="number"
                min="1000"
                max="10000"
              />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div>
              <h1>Task Data</h1>
            </div>
            <div>
              <label>Title:</label>
              <input type="text" ref={titleInputRef} required />
            </div>
            <div>
              <label>Description:</label>
              <input type="text" ref={descriptionInputRef} required />
            </div>
            <div>
              <label>Assignee Name:</label>
              <input ref={assigneeInputRef} required />
            </div>
            <div>
              <label>Due Date:</label>
              <input ref={dueDateInputRef} type="date" required />
            </div>
          </React.Fragment>
        )}
        <div className={styles.buttons}>
          <button type="submit">
            {!switchForm ? "Hire Employee" : "Assign Task"}
          </button>
          <button type="button" onClick={SwitchFormHandler}>
            {!switchForm ? "Switch to Task" : "Switch to Employee"}
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
