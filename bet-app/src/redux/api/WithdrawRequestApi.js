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
     
  
     
    }),
  });


export const { useGetWithdrawRequestQuery} = WithdrawRequestApi;
