import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const UserListDetailsApi = createApi({
    reducerPath: "UserListDetailsApi",
    baseQuery: customFetchBase,
    tagTypes: ["USERLISTDETALS"],
    endpoints: (build) => ({
      getUserListPostDetails: build.query({
        query: ({phonenumber,page,search}) => ({
            url: `/admin/viewUsersPosts/${search}?phoneNumber=${phonenumber}&page=${page} `,
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        providesTags: ["USERLISTDETALS"],
      }),

      getUserListRequestDetails: build.query({
        query: ({phonenumber,search,page}) => ({
          url: `/admin/viewUsersRequests/${search}?phoneNumber=${phonenumber}&page=${page} `,
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        providesTags: ["USERLISTDETALS"],
      }),
     
  
     
    }),
  });


export const { useGetUserListPostDetailsQuery,useGetUserListRequestDetailsQuery} = UserListDetailsApi;
