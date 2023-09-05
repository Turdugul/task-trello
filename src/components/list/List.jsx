import React from "react";
import Card from "./Card";
import NewItems from "./NewItems";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const List = () => {
  const todo = useSelector((store) => store.todosSlice.todos);

  return (
    <>
      {(todo.length &&
        todo.map((todos) => (
          <MyList sx={{ boxShadow: 3 }}  key={todos.id} >
            <div key={todos.id}>
              <Typography  className="todo-title" variant="h4"> {todos.title}</Typography>
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
        {/* <Card /> */}
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
  "& > *": {
    flex: "1",
  },
  '& .todo-title':{
    padding:"0.8rem",
  },
  "& .card": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding:"0.2rem",
  },
  
});
export default List;
