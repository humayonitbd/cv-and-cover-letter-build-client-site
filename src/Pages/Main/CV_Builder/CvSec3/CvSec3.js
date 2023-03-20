import React from 'react';
import img from "../../../../asset/CvPage/cv-builder-download-lg@1x.png";
import img2 from "../../../../asset/CvPage/cv-builder-builder-lg@1x.png";
import { Link } from 'react-router-dom';

const CvSec3 = () => {
    return (
        <div className='bg-[#f3f3f396] py-20'>
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='flex justify-start items-center'><div><img src={img2} alt="" /></div></div>
           <div className='flex justify-start items-center'>
           
            <div>
            <div className='relative mb-10'><span className='absolute top-0 h-2 w-24 bg-[#F56600]'></span></div>
                <h1 className='text-5xl font-bold'>Make your CV online step-by-step</h1>
                <p className='text-lg my-5'>Our CV builder offers expert tips, sample content, and live template previews every step of the way. Thanks to them, building a perfect CV is fast and simple. Even when you’re about to make a CV for the first time ever.</p>
                <Link to="/cv-builder/create-cv"><button className='bg-[#F56600] btn border-none px-14 text-lg'>make my cv now</button></Link>
            </div>
           </div>
        </div>
        {/* second step  */}
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
           <div className='flex justify-start items-center'>
            <div>
            <div className='relative mb-10'><span className='absolute top-0 h-2 w-24 bg-[#F56600]'></span></div>
                <h1 className='text-5xl font-bold'>Build a CV online and download it as a PDF or DOC</h1>
                <p className='text-lg my-5'>Our CV maker brings the best of both worlds. You can quickly create a document using our feature-packed online CV app and download it in a safe PDF or editable MS Word file format. Make your CV online. Free yourself from file format restraints.</p>
                <Link to="/cv-builder/create-cv"><button className='bg-[#F56600] btn border-none px-14 text-lg'>make my cv now</button></Link>
            </div>
           </div>
           <div className='flex justify-end items-center'><div><img src={img} alt="" /></div></div>
        </div>
        </div>
    );
};

export default CvSec3;