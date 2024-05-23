import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../redux/userSlice";
import { AuthApi } from "./api/AuthApi";
import { UserListApi } from "./api/UserListApi";
import { PostApi } from "./api/PostApi";
import { DashboardApi } from "./api/DashboardApi";
import { IssuesApi } from "./api/IssuesApi";
import { FeedbackApi } from "./api/FeedBackApi";
import { GeneralNotificationApi } from "./api/GeneralNotificationApi";
import { IndividualNotificationApi } from "./api/IndividualNotificationApi";
import { WithdrawRequestApi } from "./api/WithdrawRequestApi";
import { GroupNotificationApi } from "./api/GroupNotificationApi";
import { RatingsApi } from "./api/RatingApi";
import { TransactionhistoryApi } from "./api/TransactionHistoryApi";
import { GroupApi } from "./api/GroupApi";
import { UserListDetailsApi } from "./api/UserDetailsApi";








export const store = configureStore({
  reducer: {
    User: UserReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [UserListApi.reducerPath]:UserListApi.reducer,
    [PostApi.reducerPath]:PostApi.reducer,
    [DashboardApi.reducerPath]:DashboardApi.reducer,
    [IssuesApi.reducerPath]:IssuesApi.reducer,
    [FeedbackApi.reducerPath]:FeedbackApi.reducer,
    [GeneralNotificationApi.reducerPath]:GeneralNotificationApi.reducer,
    [IndividualNotificationApi.reducerPath]:IndividualNotificationApi.reducer,
    [WithdrawRequestApi.reducerPath]:WithdrawRequestApi.reducer,
    [GroupNotificationApi.reducerPath]:GroupNotificationApi.reducer,
    [RatingsApi.reducerPath]:RatingsApi.reducer,
    [TransactionhistoryApi.reducerPath]:TransactionhistoryApi.reducer,
    [GroupApi.reducerPath]:GroupApi.reducer,
    [UserListDetailsApi.reducerPath]:UserListDetailsApi.reducer,
  
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
      GeneralNotificationApi.middleware,
      IndividualNotificationApi.middleware,
      WithdrawRequestApi.middleware,
      GroupNotificationApi.middleware,
      RatingsApi.middleware,
      TransactionhistoryApi.middleware,
      GroupApi.middleware,
      UserListDetailsApi.middleware,
    ]),
});
