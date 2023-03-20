import React from 'react';
import { Link } from 'react-router-dom';
import { useGetDeleteIdResumeMutation } from '../../../features/resume/resumeApi';


const MyCoverLetterDetails = ({resume}) => {
    const {address, body, date, email, experiance, fullName, opener, phoneNumber, position, signing, typeCloser, userEmail, subject, closerSort, _id} = resume;
    console.log(fullName);

    const [handlerDelete, {isLoading, isError}] = useGetDeleteIdResumeMutation();
// console.log(show)

    return (
        <div className='p-2'>
            <div className='bg-white px-5 md:px-2 lg:px-5 py-5 overflow-y-scroll h-[400px] md:h-[400px] text-sm'>
                <div className='flex justify-end'>
                    <div className='text-start'>
                    <h3 className='text-xl font-bold'>{fullName}</h3>
                    <h3 className='text-md'>{address}</h3>
                    <p className='text-md'>Phone: {phoneNumber}</p>
                    <p className='text-md'>Email: {email}</p>
                    </div>
                </div>
                <div className='mb-2'>
                    <p>Date: {date}</p>
                    {subject && <p>{subject}</p>}
                    <p>{signing}</p>
                </div>
                <div className='mb-2'>
                    <p className='lg:mb-4 md:mb-2'>{opener}</p>
                    <p className='lg:mb-4 md:mb-2'>{body}</p>
                    <p>{typeCloser}</p>
                </div>
                <div>
                    <p>{closerSort}</p>
                    <h4>{fullName}</h4>
                </div>
            </div>
            <div className='mt-5 flex justify-between'><button onClick={()=>handlerDelete(_id)} className='btn bg-red-500 border-none mr-2'>Delete</button><Link to={`/dashboard/download/${_id}`}><button className='btn btn-primary border-none'>Download</button></Link></div>
        </div>
    );
};

export default MyCoverLetterDetails;

