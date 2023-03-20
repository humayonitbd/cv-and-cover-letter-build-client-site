import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useUserGetCVQuery } from '../../../features/CV/CVapi';
import MyCoverLetterDetails from '../MyCoverLetterPage/MyCoverLetterDetails';
import MyCvPageDetails from './MyCvPageDetails';

const MyCvPage = () => {
    const {user} = useContext(AuthContext)
    const {data, isError, isLoading} = useUserGetCVQuery(user?.email);
    console.log(data)
    return (
        <div className='py-10 px-5'>
            <h2 className='text-2xl font-bold text-center mb-10'>My CV</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {data?.map((cv) => <MyCvPageDetails key={cv._id}  cv={cv}></MyCvPageDetails>)}
            </div>
        </div>
    );
};

export default MyCvPage;