import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSec4.css';

const HomeSec4 = () => {
    return (
        <div className='homeSec4bg z-10'>
            <div className='text-center' ><h2 className='text-5xl font-semibold  text-white'>Create build your professional CV <br />  and Resume</h2>
            <Link to="/cv-builder/create-cv"><button className='bg-white text-black hover:text-white btn border-none px-16 text-lg mt-8'>Create CV</button></Link></div>
        </div>
    );
};

export default HomeSec4;