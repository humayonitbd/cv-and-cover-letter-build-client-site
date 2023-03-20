import apiSlice from "../api/apiSlice";

const CoverLetterCategoryapi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getCoverLetterCategory: builder.query({
            query:()=>({
                url: `/coverLetterCategory`,
            }),
           
        }),
        getCoverLetterCategoryId: builder.query({
            query:(id)=>({
                url: `/coverLetterCategory/${id}`,
            }),
           
        }),
    })
})

export const {useGetCoverLetterCategoryQuery, useGetCoverLetterCategoryIdQuery} = CoverLetterCategoryapi;
