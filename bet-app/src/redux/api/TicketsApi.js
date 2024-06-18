import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const TicketsApi = createApi({
    reducerPath: "TicketsApi",
    baseQuery: customFetchBase,
    tagTypes: ["TICKETS"],
    endpoints: (build) => ({
      getTickets: build.query({
        query: ({page,search}) => ({
          url: `/admin/viewTickets/${search}?page=${page}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        providesTags: ["TICKETS"],
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
        invalidatesTags: ["TICKETS"],
      }),
     
      editTickets: build.mutation({
        query: ({ id, data }) => ({
          url: `/admin/updateTicket/${id}`,
          method: "PATCH",
          body: data,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["TICKETS"],
      }),
      deleteTickets: build.mutation({
        query: (id) => ({
          url: `/admin/deleteTicket/${id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["TICKETS"],
      }),
     
    }),
  });


export const { useGetTicketsQuery,useDeleteTicketsMutation,useEditTicketsMutation,useSendMailMutation} = TicketsApi;
