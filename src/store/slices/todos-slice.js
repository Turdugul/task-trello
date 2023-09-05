import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todosSlice",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodos: (state, action) => {
      state.todos.push(action.payload);
      console.log("action name", action);
    },
    removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      },
    addCard: (state, action) => {
      state.todos.forEach((item) => {
        if (item.id === action.payload.parentId) {
          if (Object.hasOwn(item, "children")) {
            item.children.push(action.payload)
          }else{
            item.children =[];
            item.children.push(action.payload)
          }
        }
      });
      console.log("action name", action, state.list);
    },
  },
});
export const { addTodos, addCard, removeTodo } = todosSlice.actions;
