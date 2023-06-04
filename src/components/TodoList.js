import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ModalBox from "./ModalBox";



export default function TodoList() {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
  
    const [taskList, setTaskList] = useState([]);
    const saveTask = (taskObj) => {
      let tempList = taskList;
      tempList.push(taskObj);
      setTaskList(tempList);
      setOpen(false);
    };

   

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={handleOpen}>
          Create Task
        </button>   
      </div>
      <div className="task-container">
        {taskList.map((obj) => (
          <li>{obj.Name}</li>
        ))}
      </div>
      <ModalBox open={open} onClose={handleClose} save={saveTask} />
    </>
  );
}

//modal - open
//toggle
