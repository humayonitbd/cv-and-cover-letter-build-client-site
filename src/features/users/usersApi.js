import apiSlice from "../api/apiSlice";

const usersApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        postUsers: builder.mutation({
            query:(data)=>({
                url: '/users',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: data,
            }),
            invalidatesTags:["users"],
        }),
        deleteUsers: builder.mutation({
            query:(id)=>({
                url: `/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags:["users"],
        }),
        getUsers: builder.query({
            query:()=>({
                url: `/allUsers`,
            }),
            providesTags:["users"]
        }),
    })
})

export const {usePostUsersMutation, useGetUsersQuery, useDeleteUsersMutation} = usersApi;
