import React from 'react';
import './AboutSec3.css';

const AboutSec3 = () => {
    return (
        <div className='backgroundEmage'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 z-10'>
                <div className=' text-white text-center'><div className='md:mt-24 mt-4'><h3 className='text-5xl font-bold mb-2'>3+</h3><p className='text-xl'>Experience</p></div></div>
                <div className=' text-white text-center'><div className='md:mt-28 mt-4'><h3 className='text-5xl font-bold mb-2'>2K+</h3><p className='text-xl'>CV Build</p></div></div>
                <div className=' text-white text-center'><div className='md:mt-24 mt-4'><h3 className='text-5xl font-bold mb-2'>1.5k+</h3><p className='text-xl'>Cover Letter Build</p></div></div>
            </div>
        </div>
    );
};

export default AboutSec3;