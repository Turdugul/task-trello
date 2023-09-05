import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./slices/todos-slice";
import { userSlice } from "./slices/user-slice";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [todosSlice.name]: todosSlice.reducer,
  },
});
