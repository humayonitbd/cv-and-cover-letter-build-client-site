import React from 'react';
import { Link } from 'react-router-dom';
import cvImg from '../../../../asset/HomePageImg/outstanding_10.png';

const HomeSec5 = () => {
    return (
        <div className='bg-white py-24'>
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-24 '>
            <div className='flex justify-end items-center'>
                <div>
                <div className='relative'><span className='absolute  h-2 w-24 bg-[#F56600]'></span></div>
                <h1 className='text-4xl font-bold mt-10'>Free CV tips from HR professionals</h1>
                <p className='my-5 text-lg'>Stop worrying about how to write a CV that’s efficient and effective. Our CV writing guides will show you exactly how to highlight your strengths and meet all the requirements of the recruitment process.</p>
                <Link to="/cv-builder/create-cv"><button className='bg-[#F56600] btn border-none px-14 text-lg'>Create my CV</button></Link>
                </div>
            </div>
            <div className='flex justify-center items-center w-full bg-[#D1E0F2]'><div className='py-10'><img src={cvImg} alt="" className='w-80' /></div></div>
        </div>
        </div>
    );
};

export default HomeSec5;