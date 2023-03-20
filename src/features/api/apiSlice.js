import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
    }),
    tagTypes:["coverLetter", "users", "cvBuild"],
    endpoints:(builder)=>({}),
})

export default apiSlice;