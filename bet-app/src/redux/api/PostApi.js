import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./CustomFetchBase";

export const PostApi = createApi({
    reducerPath: "PostApi",
    baseQuery: customFetchBase,
    tagTypes: ["POSTAPI"],
    endpoints: (build) => ({
      getPost: build.query({
        query: ({page,search}) => ({
          url: `/admin/viewPosts/${search}?page=${page}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        providesTags: ["POSTAPI"],
      }),
     
  
     
    }),
  });


export const { useGetPostQuery} = PostApi;
