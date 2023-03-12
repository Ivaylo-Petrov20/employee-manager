import React, { useState } from "react";

import styles from "./App.module.css";
import EmployeesList from "./components/Employees/EmployeesList";
import Form from "./components/Form/Form";
import LeaderBoard from "./components/LeaderBoard.js/LeaderBoard";
import Context from "./components/store/context";
import TaskList from "./components/Tasks/TasksList";

const DUMMY_EMPLOYEES = JSON.parse(localStorage.getItem("employees") || "[]");
const DUMMY_TASKS = JSON.parse(localStorage.getItem("tasks") || "[]");

function App() {
  const [employeeList, setEmployeeList] = useState(DUMMY_EMPLOYEES);
  const [taskList, setTaskList] = useState(DUMMY_TASKS);
  const [isTask, setIsTask] = useState(false);
  const [showLeaderBoard, setShowLeaderBoard] = useState(false);

  const empoyeesListCopy = [...employeeList];
  const sortedEmployees = empoyeesListCopy
    .sort((a, b) => b.tasksCompleted - a.tasksCompleted)
    .slice(0, 5);

  const onAddEmployeeHandler = (employeeData) => {
    const employee = {
      id: Math.random(),
      fullName: employeeData.name,
      email: employeeData.email,
      phoneNumber: employeeData.number,
      dateOfBirth: employeeData.dateOfBirthInputRef,
      salary: employeeData.salaryInputRef,
      tasksCompleted: 0,
    };
    setEmployeeList((prevEmployeeList) => {
      const modifiedEmployeeArr = [employee, ...prevEmployeeList];
      localStorage.setItem("employees", JSON.stringify(modifiedEmployeeArr));
      return modifiedEmployeeArr;
    });
  };

  const onAddTaskHandler = (taskData) => {
    const task = {
      id: Math.random(),
      title: taskData.title,
      descripion: taskData.description,
      assignee: taskData.assignee,
      dueDate: taskData.dueDate,
    };
    setTaskList((prevTaskList) => {
      const modifiedTaskList = [task, ...prevTaskList];
      localStorage.setItem("tasks", JSON.stringify(modifiedTaskList));
      return modifiedTaskList;
    });
  };

  const deleteTaskHandler = (event) => {
    const taskTitle =
      event.target.parentNode.parentNode.children[0].children[0].children[0]
        .children[0].textContent;
    setTaskList((prevTaskList) => {
      const updatedTaskList = prevTaskList.filter(
        (task) => task.title !== taskTitle
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
      return updatedTaskList;
    });
  };

  const deleteEmployeeHandler = (event) => {
    const employeeName =
      event.target.parentNode.parentNode.children[0].children[0].children[0]
        .children[0].textContent;
    setEmployeeList((prevEmployeeList) => {
      const updatedEmployeeList = prevEmployeeList.filter(
        (employee) => employee.fullName !== employeeName
      );
      localStorage.setItem("employees", JSON.stringify(updatedEmployeeList));
      return updatedEmployeeList;
    });
  };

  const completeTaskHandler = (event) => {
    const taskAssignee =
      event.target.parentNode.parentNode.children[0].children[0].children[2]
        .children[0].textContent;
    const taskTitle =
      event.target.parentNode.parentNode.children[0].children[0].children[0]
        .children[0].textContent;

    setTaskList((prevTaskList) => {
      const updatedTaskList = prevTaskList.filter(
        (task) => task.title !== taskTitle
      );
      return updatedTaskList;
    });

    setEmployeeList((prevEmployeeList) => {
      const employeeArr = prevEmployeeList.map((employee) => {
        if (employee.fullName === taskAssignee) {
          employee.tasksCompleted += 1;
        }
        return employee;
      });
      return [...employeeArr];
    });
  };

  const setTaskToTrue = () => {
    setIsTask(true);
  };

  const setTaskToFalse = () => {
    setIsTask(false);
  };

  const showLeaderboardHandler = () => {
    setShowLeaderBoard(true);
  };

  const hideLeaderBoardHandler = () => {
    setShowLeaderBoard(false);
  };

  return (
    <Context.Provider
      value={{
        isTask: isTask,
        setTaskToTrue,
        setTaskToFalse,
      }}
    >
      {showLeaderBoard && (
        <LeaderBoard
          employees={sortedEmployees}
          onClick={hideLeaderBoardHandler}
        />
      )}
      <section className={styles.form}>
        <Form
          onShowLeaderboard={showLeaderboardHandler}
          onAddEmployee={onAddEmployeeHandler}
          onAddTask={onAddTaskHandler}
        />
      </section>
      <div className={styles.lists}>
        <section className={styles.employees}>
          <EmployeesList
            onDelete={deleteEmployeeHandler}
            employees={employeeList}
          />
        </section>
        <section className={styles.tasks}>
          <TaskList
            onComplete={completeTaskHandler}
            onDelete={deleteTaskHandler}
            tasks={taskList}
          />
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
