import React, { useEffect, useState } from "react";
import Card from "./Card";
import ModalBox from "./ModalBox";

export default function TodoList() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr); //string to arr
      setTaskList(obj);
    }
  }, []); // if we don't pass an empty array then useEffect will run everytime

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const [taskList, setTaskList] = useState([]);

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList)); //convert array to string and store
    setTaskList(tempList);
    setOpen(false);
  };

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setOpen(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList.map((obj, index) => (
          <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />
        ))}
      </div>
      <ModalBox toggle={toggle} open={open} save={saveTask} />
    </>
  );
}

//modal - open
//toggle
