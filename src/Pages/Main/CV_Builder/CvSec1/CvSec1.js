import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../../asset/CvPage/cv-builder-hero-lg@1x.png';

const CvSec1 = () => {
    return (
        <div className='bg-[#f3f3f396] py-20'>
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
           <div className='flex justify-start items-center'>
            <div>
            <div className='relative mb-10'><span className='absolute top-0 h-2 w-24 bg-[#F56600]'></span></div>
                <h1 className='text-5xl font-bold'>Fast and Simple Online CV Builder</h1>
                <p className='text-lg my-5'>With the website CV creator, you’ll create a CV in just a couple of minutes. Use one of our professional templates and fill it in.</p>
                <Link to="/cv-builder/create-cv"><button className='bg-[#F56600] btn border-none px-14 text-lg'>Create A CV</button></Link>
            </div>
           </div>
           <div className='flex justify-end items-center'><div><img src={img} alt="" /></div></div>
        </div>
        </div>
    );
};

export default CvSec1;