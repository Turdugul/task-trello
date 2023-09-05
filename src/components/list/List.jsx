import React, { useState } from "react";
import Card from "./Card";
import NewItems from "./NewItems";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../store/slices/todos-slice";
import MenuIcon from "@mui/icons-material/Menu";

const List = () => {
  const todo = useSelector((store) => store.todosSlice.todos);

  const dispatch = useDispatch();
  const deleteTodoHandler = (todoId) => {
    dispatch(removeTodo(todoId));
  };
  return (
    <>
      {(todo.length &&
        todo.map((todos) => (
          <MyList sx={{ boxShadow: 3 }} key={todos.id}>
            <div className="title-box" key={todos.id}>
              <Typography className="todo-title" variant="h4">
                {" "}
                {todos.title}
              </Typography>
              <div className="icon-box">
                <MenuIcon onClick={() => deleteTodoHandler(todos.id)} />
              </div>
            </div>

            <div className="card">
              {(todos.children?.length > 0 &&
                todos.children.map((children) => (
                  <Card key={children.id} cardInfo={children} />
                ))) ||
                []}
            </div>

            <div className="add-todo">
              <NewItems type="card" parentId={todos.id} />
            </div>
          </MyList>
        ))) ||
        []}

      <MyList>
        <NewItems />
      </MyList>
    </>
  );
};

const MyList = styled(Box)({
  color: "black",
  backgroundColor: "#63687211",
  padding: "0.8rem",
  width: "31.333333%",

  "& .title-box": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1rem",
  },
  "& .icon-box": {
    padding: "1rem 0",
  },
  "& > *": {
    flex: "1",
  },
  "& .todo-title": {
    padding: "0.8rem",
  },
  "& .card": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "0.2rem",
  },
});
export default List;
