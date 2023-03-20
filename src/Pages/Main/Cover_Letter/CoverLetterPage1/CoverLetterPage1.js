import React from 'react';
import { GrDuplicate } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const CoverLetterPage1 = () => {
    return (
        <div className='py-20 bg-white min-h-screen'>
           <div className='w-5/12 mx-auto'>
           <div className=' shadow p-10 rounded'>
            <Link to="/coverLetter/selected">
            <div className='border-4 rounded border-[#F56600] bg-[#ffffff]  p-10 flex justify-start items-center'>
                <GrDuplicate className='text-5xl text-[#F56600] mr-5'/>
               <div> 
                <h2 className='text-2xl font-bold '>Create a new cover letter</h2>
                <p>We'll go through each section together</p>
                </div>
            </div>
            </Link>
           </div>
           <div className='text-center flex justify-between mt-10'><Link to="/home"><button className='btn px-10 bg-[#000000] border-none'>Back</button></Link><Link to="/coverLetter/selected"><button className='btn px-10 bg-[#F56600] border-none hover:bg-[#F56600]'>Continue</button></Link></div>
           </div>
        </div>
    );
};

export default CoverLetterPage1;