import { createApi } from "@reduxjs/toolkit/query/react";
import CustomFetchBase from "./CustomFetchBase";

export const IndividualNotificationApi = createApi({
  reducerPath: "IndividualNotificationApi",
  baseQuery: CustomFetchBase,
  tagTypes: ["INDIVIDUALNOTIFICATION"],
  endpoints: (build) => ({
    addIndividualNotification: build.mutation({
      query: ({phoneNumber, title, body, image }) => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('image', image);
    
        return {
          url: `admin/sendIndividualNotification/${phoneNumber}`,
          method: "POST",
          body: formData,
          headers: {
           
          },
        };
      },
      invalidatesTags: ["INDIVIDUALNOTIFICATION"],
    }),

    getIndividualNotification: build.query({
        query: ({page,search}) => ({
            url: `/admin/viewIndividualNotifications/${search}?page=${page}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        providesTags: ["INDIVIDUALNOTIFICATION"],
      }),
      getPhoneNumber: build.query({
        query: (search) => ({
          url: `/admin/getPhoneNumbers?search=${search}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        providesTags: ["INDIVIDUALNOTIFICATION"],
      }),
  }),
});

export const { useAddIndividualNotificationMutation,useGetPhoneNumberQuery ,useGetIndividualNotificationQuery} = IndividualNotificationApi;
