import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function EditTask({ open, toggle, updateTask, taskObj }) {

  const [taskName, setTaskName] = useState(" ");
    const [description, setDescription] = useState(" ");
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[])

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["Description"] = description;
    updateTask(tempObj)
  };

  return (
    <>
      <Modal
        open={open}
        toggle={toggle}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 400,
            justifyContent: "center",
            // textAlign: "center",
            alignItems: "center",
            backgroundColor: "#f2f2f2",
            padding: "20px",
            "@media (max-width: 768px)": {
              // flexDirection: "column",
              // textAlign: "center",
            },
          }}
        >
          <h2 id="child-modal-title">Update Task</h2>
          <div id="child-modal-description">
            <form>
              <div className="form-group mt-2">
                <label>Task Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={taskName}
                  onChange={handleChange}
                  name="taskName"
                />
              </div>
              <div className="form-group mt-2">
                <label>Description</label>
                <textarea
                  rows="5"
                  className="form-control"
                  value={description}
                  onChange={handleChange}
                  name="description"
                ></textarea>
              </div>
            </form>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button className="btn btn-primary mt-2" onClick={handleUpdate}>
              Update
            </button>
            <span style={{ marginLeft: "10px" }}></span>
            <button className="btn btn-primary mt-2" onClick={toggle}>
              Cancel
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
