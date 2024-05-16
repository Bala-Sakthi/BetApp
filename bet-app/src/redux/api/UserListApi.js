import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const UserListApi = createApi({
    reducerPath: "UserListApi",
    baseQuery: customFetchBase,
    tagTypes: ["USERLIST"],
    endpoints: (build) => ({
      getUserList: build.query({
        query: ({page,search}) => ({
          url: `/admin/viewUsers/${search}?page=${page}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        providesTags: ["USERLIST"],
      }),
     
  
     
    }),
  });


export const { useGetUserListQuery} = UserListApi;
