import apiSlice from "../api/apiSlice";

const adminApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        adminGetUser: builder.query({
            query:(email)=>({
                url: `/admin/role?email=${email}`,
            }),
        }),
    })
})

export const {useAdminGetUserQuery} = adminApi;
