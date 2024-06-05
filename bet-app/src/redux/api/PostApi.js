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
     
      addPost: build.mutation({
        query: ({ userName, sport, matchDetails, matchDate,betAmount,image,placeOfMatch,phoneNumber }) => {
          const formData = new FormData();
          formData.append('userName', userName);
          formData.append('sport', sport);
          formData.append('matchDetails', matchDetails);
          formData.append('matchDate', matchDate);
          formData.append('betAmount', betAmount);
          formData.append('placeOfMatch', placeOfMatch);
          formData.append('image', image);
      
          return {
            url: `/post/addPost/${phoneNumber}`,
            method: "POST",
            body: formData,
            headers: {
             
            },
          };
        },
        invalidatesTags: ["POSTAPI"],
      }),


      addBulkPost: build.mutation({
        query: ({file }) => {
          const formData = new FormData();
          formData.append('file', file);
          return {
            url: `/post/bulkPosts`,
            method: "POST",
            body: formData,
            headers: {
             
            },
          };
        },
        invalidatesTags: ["POSTAPI"],
      }),


    }),
  });


export const { useGetPostQuery,useEditPostMutation,useAddPostMutation,useAddBulkPostMutation} = PostApi;
