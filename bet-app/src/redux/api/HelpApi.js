import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const HelpApi = createApi({
    reducerPath: "HelpApi",
    baseQuery: customFetchBase,
    tagTypes: ["HELP"],
    endpoints: (build) => ({
      getHelp: build.query({
        query: ({page,search}) => ({
          url: `/admin/viewTickets/${search}?page=${page}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        providesTags: ["HELP"],
      }),

      SendMail: build.mutation({
        query: (data) => ({
          url: `/admin/sendEmail`,
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["HELP"],
      }),
     
      editHelp: build.mutation({
        query: ({ id, data }) => ({
          url: `/admin/updateTicket/${id}`,
          method: "PATCH",
          body: data,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["HELP"],
      }),
      deleteHelp: build.mutation({
        query: (id) => ({
          url: `/admin/deleteTicket/${id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["HELP"],
      }),
     
    }),
  });


export const { useGetHelpQuery,useDeleteHelpMutation,useEditHelpMutation,useSendMailMutation} = HelpApi;
