import React from 'react';
import contactImg from '../../../../asset/Contact-image/contact-introduction@3x.jpg';

const ContactSec1 = () => {
    return (
        <div className='bg-[#18518D]'>
            <div className='grid grid-cols-1  md:grid-cols-3'>
                <div className=' text-white col-span-2 md:pl-16 pl-5 lg:pl-40 md:pr-5 lg:pr-16'>
                    <h3 className='text-5xl font-bold mt-16 mb-5'>Contact Us</h3>
                    <p className='text-xl'>We've got live, friendly people standing by, ready to help you. Whether it's a question about building your CV, getting the most out of our services, or managing your account, we're here to help.</p>
                </div>
                <div>
                    <img src={contactImg} className="w-full block" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactSec1;