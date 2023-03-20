import React from 'react'; 
import cvImg from '../../../../asset/HomePageImg/home-cv-builder-lg@1x.png';
import coverLetterImg from '../../../../asset/HomePageImg/home-cover-letter-lg@1x.png';
import { Link } from 'react-router-dom';

const HomeSec3 = () => {
    return (
        <div className='bg-white py-20'>
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-16'>
            <div className='flex justify-end items-center'>
                <div>
                <div className='relative'><span className='absolute  h-2 w-24 bg-[#F56600]'></span></div>
                <h1 className='text-4xl font-bold mt-10'>Easy-to-use CV builder</h1>
                <p className='my-5 text-lg'>With in this website, you can quickly create a CV that will attract any recruiter’s attention. Explore our professional templates, use tips from CV writing experts, adapt our sample CVs for your purposes. Give your application a boost.</p>
                <Link to="/cv-builder/create-cv"><button className='bg-[#F56600] btn border-none px-14 text-lg'>Create my CV</button></Link>
                </div>
            </div>
            <div className='flex justify-end items-center w-full'><div ><img src={cvImg} alt="" /></div></div>
        </div>
        {/* //section 2 start */}
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-20'>
            <div className='flex justify-start items-center w-full bg-[#D1E0F2]'><div ><img src={coverLetterImg} alt="" /></div></div>
            <div className='flex justify-end items-center'>
                <div>
                <div className='relative'><span className='absolute  h-2 w-24 bg-[#F56600]'></span></div>
                <h1 className='text-4xl font-bold mt-10'>Cover letter builder</h1>
                <p className='my-5 text-lg'>Thanks to website creator, you’ll have a professional cover letter ready in just a few clicks. Cover letters aren’t a thing of the past—over 80% of recruiters consider them important for their hiring decisions.</p>
                <Link to="/createCoverLetter"><button className='bg-[#F56600] btn border-none px-14 text-lg'>Create Cover letter</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HomeSec3;