import apiSlice from "../api/apiSlice";

const CVapi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        postCV: builder.mutation({
            query:(data)=>({
                url: '/cv',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: data,
            }),
            invalidatesTags:["cvBuild"],
        }),
        userGetCV: builder.query({
            query:(email)=>({
                url: `/myCV?email=${email}`,
            }),
            providesTags: ["cvBuild"],
        }),
        getDownloadCV: builder.query({
            query:(id)=>({
                url: `/cv/download/${id}`,
            })
        }),
        getDeleteIdCv: builder.mutation({
            query:(id)=>({
                url: `/myCV/${id}`,
                method: "DELETE",
            }),
            invalidatesTags:["cvBuild"],
        }),
        getAllCV: builder.query({
            query:()=>({
                url: `/allCV`,
            }),
            providesTags: ["cvBuild"],
        }),
    })
})

export const {usePostCVMutation, useUserGetCVQuery, useGetDownloadCVQuery, useGetDeleteIdCvMutation, useGetAllCVQuery} = CVapi;
