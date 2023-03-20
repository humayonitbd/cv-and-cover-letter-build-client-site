import React from 'react';
import { Link } from 'react-router-dom';
import coverLetter from "../../../../asset/cover-letter-page/cl-builder-bottom-lg@3x.png";
import bgCover from "../../../../asset/cover-letter-page/sprawdz-kreator-listu-motywacyjnego-md@3x.jpg";
import './CoverLetterSec5.css';

const CoverLetterSec5 = () => {
    return (
        <div className='pt-10 pb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 w-10/12 mx-auto'>
           <div className='flex justify-start items-center lg:pr-10 bg-[#006370] p-16 text-white'>
            <div>
                <h1 className='text-5xl font-bold'>Try the LiveCareer cover letter builder for free</h1>
                <p className='text-lg my-5'>In this website cover letter maker was created by experts to help you get the job. You do not believe? Try our online cover letter generator for free. Use ready-made content and built-in tips to create a professional cover letter faster than ever!</p>
                <Link to="/createCoverLetter"><button className='bg-[#F56600] btn border-none px-10 text-lg'>Build your cover letter free</button></Link>
            </div>
           </div>
           <div className={`flex justify-center items-center p-20 md:h-[500px]  bgImage`}>
            <div><img src={coverLetter} className="w-80" alt="" /></div>
           </div>
        </div>
        </div>
    );
};

export default CoverLetterSec5;