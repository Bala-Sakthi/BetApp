import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const WithdrawRequestApi = createApi({
    reducerPath: "WithdrawRequestApi",
    baseQuery: customFetchBase,
    tagTypes: ["WITHDRAWREQUEST"],
    endpoints: (build) => ({
      getWithdrawRequest: build.query({
        query: ({page,search}) => ({
          url: `/admin/viewWithdrawRequests/${search}?page=${page}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        providesTags: ["WITHDRAWREQUEST"],
      }),
     
      editWithdrawrequest: build.mutation({
        query: ({ id, data }) => ({
          url: `/admin/updateWithdrawRequest/${id}`,
          method: "PATCH",
          body: data,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["WITHDRAWREQUEST"],
      }),
      deleteWithdrawrequest: build.mutation({
        query: (id) => ({
          url: `/admin/deleteWithdrawRequests/${id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["WITHDRAWREQUEST"],
      }),
     
    }),
  });


export const { useGetWithdrawRequestQuery,useDeleteWithdrawrequestMutation,useEditWithdrawrequestMutation,} = WithdrawRequestApi;
