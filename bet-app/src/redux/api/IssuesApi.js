import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const IssuesApi = createApi({
  reducerPath: "IssuesApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["ISSUES"],
  endpoints: (build) => ({
    getIssue: build.query({
      query: ({page,search}) => ({
        url: `/admin/viewIssues/${search}?page=${page}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["ISSUES"],
    }),
   
   
    editIssue: build.mutation({
      query: ({ id, data }) => ({
        url: `/admin/updateStation/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["ISSUES"],
    }),
    deleteIssue: build.mutation({
      query: (id) => ({
        url: `/admin/deleteIssue/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["ISSUES"],
    }),
  }),
});

export const { useGetIssueQuery,useDeleteIssueMutation,useEditIssueMutation
} = IssuesApi;
