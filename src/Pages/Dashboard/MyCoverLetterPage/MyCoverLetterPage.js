import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useUserGetResumeQuery } from '../../../features/resume/resumeApi';
import MyCoverLetterDetails from './MyCoverLetterDetails';

const MyCoverLetterPage = () => {
    const {user} = useContext(AuthContext)
    const {data, isError, isLoading} = useUserGetResumeQuery(user?.email);
   
    console.log(data)
    return (
        <div className='py-10'>
            <h2 className='text-2xl font-bold text-center mb-10'>My cover letter</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {data?.map((resume) => <MyCoverLetterDetails key={resume._id}  resume={resume}></MyCoverLetterDetails>)}
            </div>
        </div>
    );
};

export default MyCoverLetterPage;