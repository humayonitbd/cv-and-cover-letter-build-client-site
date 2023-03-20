import apiSlice from "../api/apiSlice";

const resumeApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        postResume: builder.mutation({
            query:(data)=>({
                url: '/resume',
                method: "POST",
                // headers: {
                //     'Content-Type': 'application/json',
                //   },
                body: data,
            }),
            invalidatesTags:["coverLetter"],
        }),
        userGetResume: builder.query({
            query:(email)=>({
                url: `/myCoverLetter?email=${email}`,
            }),
            providesTags: ["coverLetter"],
        }),
        getDownloadResume: builder.query({
            query:(id)=>({
                url: `/download/${id}`,
            })
        }),
        getDeleteIdResume: builder.mutation({
            query:(id)=>({
                url: `/myCoverLetter/${id}`,
                method: "DELETE",
            }),
            invalidatesTags:["coverLetter"],
        }),
        getResume: builder.query({
            query:()=>({
                url: `/allCoverLetter`,
            }),
            providesTags: ["coverLetter"],
        }),
    })
})

export const {usePostResumeMutation, useUserGetResumeQuery, useGetResumeQuery, useGetDownloadResumeQuery, useGetDeleteIdResumeMutation} = resumeApi;
