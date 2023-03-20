import React from 'react';
import { Link } from 'react-router-dom';

const AboutSec5 = () => {
    return (
        <div className=' bg-[#f5660063] mb-10 '>
            <div className='flex justify-between w-10/12 mx-auto items-center h-60 '>
                <div><h3 className='text-5xl mb-2 font-bold'>Need Help ?</h3><p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit <br /> Sunt aperiam rem temporibus eum ipsam nihil.</p></div>
                <div><Link to="/contact"><button className='btn bg-black px-10'>Contact us</button></Link> </div>
            </div>
        </div>
    );
};

export default AboutSec5;