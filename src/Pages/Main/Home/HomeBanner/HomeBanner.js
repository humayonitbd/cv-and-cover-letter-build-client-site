import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className='homeBackground z-10 '>
            <div className='w-10/12 mx-auto flex justify-center'>
            <div className='text-black text-center'>
                    <h1 className='text-5xl font-bold'>Build your cv and get jobs</h1>
                    <p className='my-8 text-lg mx-36'>Standing out. Professional. Recruiter-approved. Ready in minutes with our step-by-step builder.you’ll have a professional cover letter ready in just a few clicks. Cover letters aren’t a thing of the past—over 80% of recruiters consider them important for their hiring decisions.</p>
                    <Link to="/cv-builder/create-cv"><button className='bg-[#F56600] btn border-none px-5 mr-5 text-lg'>Create CV</button></Link>
                    <Link to="/createCoverLetter"><button className='bg-black hover:bg-[#F56600] btn border-none px-5 text-lg'> Cover Letter</button></Link>
                </div>
               
            </div>
        </div>
    );
};

export default HomeBanner;