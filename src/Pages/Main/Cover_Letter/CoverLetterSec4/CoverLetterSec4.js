import React from 'react';
import { FcUpRight } from 'react-icons/fc';
import { Link } from 'react-router-dom';


const CoverLetterSec4 = () => {
    return (
        <div className='py-20 lg:py-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-10/12 mx-auto'>
       <div className='flex justify-start items-center'>
        <div>
            <h1 className='text-5xl font-bold'>Create your cover letter <br /> online in 3 simple <br /> steps</h1>
            <p className='text-lg my-5'>Our cover letter builder offers actionable tips, ready-made content, and live previews every step of the way. We make building a perfect cover letter fast and simple. Even if you’ve never written one before.</p>
            <p className='text-lg my-5'>In this tool, you will create a cover letter in 3 simple steps. The entire process won’t take you more than 5 minutes. Here’s all you need to do:</p>
            <Link to="/createCoverLetter"><button className='bg-[#F56600] btn border-none px-12 text-lg'>Create your cover letter</button></Link>
        </div>
       </div>
       <div className='flex justify-start items-start'>
        <div>
           <div className='flex justify-start my-5'>
            <p><FcUpRight className='inline-block text-4xl mr-2' /> </p>
            <p className='text-xl font-semibold'> Enter your contact details and the job title you are applying for.</p>
            </div>
           <div className='flex justify-start my-5'>
            <p><FcUpRight className='inline-block text-4xl mr-2' /></p>
             <p className='text-xl font-semibold'>The wizard will generate a ready-made cover letter for you in just a few moments. You can easily edit it and tailor the content to a specific job offer.</p>
             </div>
            <div className='flex justify-start my-5'>
                <p><FcUpRight className='inline-block text-4xl mr-2' /> </p>
                <p className='text-xl font-semibold'> Change the look of your cover letter as you like, download it in PDF or DOC and apply for a job without wasting time.</p>
                </div>
            </div>
       </div>
    </div>
    </div>
    );
};

export default CoverLetterSec4;