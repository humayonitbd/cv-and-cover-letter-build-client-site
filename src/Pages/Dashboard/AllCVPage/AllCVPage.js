import React from 'react';
import { useGetAllCVQuery, useGetDeleteIdCvMutation } from '../../../features/CV/CVapi';

const AllCVPage = () => {
    const {data} = useGetAllCVQuery();
    const [allcvDelete, {isError, isLoading}] = useGetDeleteIdCvMutation();
    // console.log(data)
    return (
        <div>
           
            <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>User Email</th>
                    <th>Position</th>
                    <th>Phone</th>
                    <th>Favorite Color</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data?.map((cv, idx) => <tr>
                            <th>{idx}</th>
                            <td>{cv.firstName}{cv.LastName}</td>
                            <td>{cv.userEmail}</td>
                            <td>{cv.position}</td>
                            <td>{cv.phoneNumber}</td>
                            <td><button
                             onClick={()=> allcvDelete(cv._id)} 
                             className='btn bg-red-500 border-none'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllCVPage;