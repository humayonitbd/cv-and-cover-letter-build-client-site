import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSec1.css';

const AboutSec1 = () => {
    return (
        <div className='aboutBackgrund h-96 flex justify-center items-center'>
            <div className='z-10 text-center text-white'>
                <h2 className='text-5xl font-bold'>About Us</h2>
                <p className='text-lg my-3'>We provide the resources, knowledge, and expert advice you need to land the job you want.</p>
                <div className='mt-5'>
                   <Link to="/cv-builder"><button className='btn bg-transparent text-white border-white border-2 hover:bg-white hover:text-black mr-5'>Create CV</button></Link> 
                   <Link to="/coverLetter"><button className='btn bg-transparent text-white border-white border-2 hover:bg-white hover:text-black'>Create Cover Letter</button></Link> 
                    
                </div>
            </div>
        </div>
    );
};

export default AboutSec1;