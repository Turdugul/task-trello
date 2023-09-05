import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./slices/todos-slice";

export const store = configureStore({
    reducer:{
[todosSlice.name]:todosSlice.reducer
    }
})