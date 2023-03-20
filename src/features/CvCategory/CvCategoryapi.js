import apiSlice from "../api/apiSlice";

const CvCategoryapi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getCvCategory: builder.query({
            query:()=>({
                url: `/cvCategory`,
            }),
           
        }),
        getCvCategoryId: builder.query({
            query:(id)=>({
                url: `/cvCategory/${id}`,
            }),
           
        }),
    })
})

export const {useGetCvCategoryQuery, useGetCvCategoryIdQuery} = CvCategoryapi;
