import React from 'react'; 
import { Link } from 'react-router-dom';
import coverLetter from '../../../../asset/cover-letter-page/cl-builder-hero-lg@1x.png';

const CoverLetterSec1 = () => {
    return (
        <div className='py-10 bg-[#f7f7f77a]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-10/12 mx-auto'>
           <div className='flex justify-start items-center'>
            <div>
                <h1 className='text-5xl font-bold'>Quick and Easy Online Cover Letter Creator</h1>
                <p className='text-lg my-5'>With the amazing in this website cover letter creator, you’ll make your cover letter in minutes. Choose from 2+ professional templates for your cover letter, fill in your details, and you’re done.</p>
                <Link to="/createCoverLetter"><button className='bg-[#F56600] btn border-none px-12 text-lg'>Create A cover letter</button></Link>
                
            </div>
           </div>
           <div className='flex justify-end items-center'>
            <div><img src={coverLetter} alt="" /></div>
           </div>
        </div>
        </div>
    );
};

export default CoverLetterSec1;