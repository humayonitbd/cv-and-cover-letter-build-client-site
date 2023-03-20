import React from 'react';
import { useGetDeleteIdResumeMutation, useGetResumeQuery } from '../../../features/resume/resumeApi';

const AllCoverLetterPage = () => {
    const {data, isLoading, isError} = useGetResumeQuery();
    const [allCoverLetterDelete, {isLoading:loading, isError:error}] = useGetDeleteIdResumeMutation();
    
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
                        data?.map((coverLetter, idx) => <tr>
                            <th>{idx}</th>
                            <td>{coverLetter.fullName}</td>
                            <td>{coverLetter.userEmail}</td>
                            <td>{coverLetter.position}</td>
                            <td>{coverLetter.phoneNumber}</td>
                            <td><button
                             onClick={()=> allCoverLetterDelete(coverLetter._id)} 
                            className='btn bg-red-500 border-none'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllCoverLetterPage;