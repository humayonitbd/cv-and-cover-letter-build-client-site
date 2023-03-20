import React from 'react';
import teamImage from '../../../../asset/About/software-team_BB-853x470.jpg';

const AboutSec2 = () => {
    return (
        <div className='py-20 lg:py-28 bg-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-10/12 mx-auto'>
           <div className='flex justify-start items-center'>
            <div>
                <h1 className='text-5xl font-bold'>About our company</h1>
                <p className='text-lg my-5'>Over the past 14 years, LiveCareer has helped more than 10 million job seekers, build stronger resumes, discover their career paths, interview with confidence, and boost their chances of finding the right job faster.</p>
                <p className='text-lg my-5'>With our world-class resume and cover letter builders, professional writing services, interview tips, millions of job listings, and a convenient mobile app, LiveCareer is here for your job search and career management every step of the way.</p>
               <a target="_blank" href="https://stackoverflow.com/"><button className='bg-[#F56600] btn border-none px-12 text-lg'>read more</button></a> 
            </div>
           </div>
           <div className='flex justify-end items-center'>
            <div><img src={teamImage} className="rounded-2xl w-full" alt="" /></div>
           </div>
        </div>
        </div>
    );
};

export default AboutSec2;