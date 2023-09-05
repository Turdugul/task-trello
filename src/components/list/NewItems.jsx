import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos, addCard } from "../../store/slices/todos-slice";

const NewItems = ({type, parentId}) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  // console.log('type' , type);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if(type ){
      dispatch(addCard({ id: Math.random(), title: enteredTask, parentId:parentId }));
    }else{
      dispatch(addTodos({ id: Math.random(), title: enteredTask }));
    }
    setEnteredTask('')
  };
  const taskValueChangeHandler = (e) => {
    setEnteredTask(e.target.value);
  };
  const showForm = () => {
    setIsFormVisible(true);
  };
  const hideForm = () => {
    setIsFormVisible(false);
  };
  const isSubmitDisabled = enteredTask.trim().length === 0;

  return (
    <div>
      <Button onClick={showForm}> + Add { type? "a card" : "another list"}</Button>
      {isFormVisible && (
        <StyledBox component={"form"} onSubmit={submitHandler}>
          <div>
            <TextField
              className="input"
          placeholder={type? "Enter Card Name":"Enter List Name"}
              type="text"
              value={enteredTask}
              onChange={taskValueChangeHandler}
            />
          </div>
          <div className="btn">
            <Button variant="contained" onClick={hideForm}>
              X
            </Button>
            <Button
              onClick={submitHandler}
              type="submit"
              variant="contained"
              className="submit"
              disabled={isSubmitDisabled}
            >
              Save
            </Button>
          </div>
        </StyledBox>
      )}
    </div>
  );
};
const StyledBox = styled(Box)(() => ({
  padding: "0.1rem ",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  "& .submit": {
    borderRadius: "0.2rem",
  },
  "& .btn": {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
  },
  "& .input": {
    backgroundColor: "white",
    "&::focus": {
      border: "5px solid black",
    },
  },
}));
export default NewItems;
