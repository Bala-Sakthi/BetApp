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
     
      editPost: build.mutation({
        query: ({ id, data }) => ({
          url: `/admin/updatePost/${id}`,
          method: "PATCH",
          body: data,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }),
        invalidatesTags: ["POSTAPI"],
      }),
     
    }),
  });


export const { useGetPostQuery,useEditPostMutation} = PostApi;
