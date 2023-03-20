import React from 'react';
import { useDeleteUsersMutation, useGetUsersQuery } from '../../../features/users/usersApi';

const UsersPage = () => {
    const {data, isError, isLoading} = useGetUsersQuery();
    console.log(data)
    const [userDelete, {isError: error, isLoading: loading}] = useDeleteUsersMutation();
    return (
        <div>
            <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data?.map((user, idx) => <tr>
                            <th>{idx}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button onClick={()=> userDelete(user._id)} className='btn bg-red-500 border-none'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default UsersPage;