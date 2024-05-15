import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../redux/userSlice";
import { AuthApi } from "./api/AuthApi";
import { UserListApi } from "./api/UserListApi";
import { PostApi } from "./api/PostApi";
import { DashboardApi } from "./api/DashboardApi";
import { IssuesApi } from "./api/IssuesApi";
import { FeedbackApi } from "./api/FeedBackApi";







export const store = configureStore({
  reducer: {
    User: UserReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [UserListApi.reducerPath]:UserListApi.reducer,
    [PostApi.reducerPath]:PostApi.reducer,
    [DashboardApi.reducerPath]:DashboardApi.reducer,
    [IssuesApi.reducerPath]:IssuesApi.reducer,
    [FeedbackApi.reducerPath]:FeedbackApi.reducer,
  
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      AuthApi.middleware,
      UserListApi.middleware,
      PostApi.middleware,
      DashboardApi.middleware,
      IssuesApi.middleware,
      FeedbackApi.middleware,

    ]),
});
