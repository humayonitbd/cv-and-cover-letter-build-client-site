import React from 'react';
import { FaDelicious, FaJoomla, FaArrowsAlt, FaClone } from "react-icons/fa";

const HomeSec2 = () => {
    const cvBuild = [
        {
            id: 1,
            icon: <FaDelicious />,
            step: "Step-by-step builder",
            details: "Easy to use step-by-step builder enables you to create a well-polished, professional CV in minutes. Impress. Save time."
        },
        {
            id: 2,
            icon: <FaJoomla />,
            step: "Pre-written content",
            details: "Make your CV more sophisticated. Select from thousands of pre-written bullet points for hundreds of jobs and careers. Just click and insert them directly into your CV!"
        },
        {
            id: 3,
            icon: <FaArrowsAlt />,
            step: "Expert tips & guidance",
            details: "Get detailed CV-building tips and advice every step of the way. CV pro or beginner - we've got you covered."
        },
        {
            id: 4,
            icon: <FaClone />,
            step: "Unlimited CVs & Downloads",
            details: "No limit on the number of CVs you can create. Unlimited printing, sharing and downloading in PDF, Word, plain text or image formats. Limitless creativity."
        },
    ]
    return (
        <div className='bg-white py-20'>
            <div className='w-10/12 mx-auto'>
            <h2 className='text-center text-5xl font-semibold'>Easiest and most feature-packed <br /> CV builder available</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-x-44 lg:gap-x-56 gap-y-10 mt-20'>
            {cvBuild?.map(({icon, step, details, id}) =><div key={id} className='flex '>
                <p className='mr-5 text-6xl'>{icon}</p>
                <div className=''>
                <h3 className='text-2xl font-bold'>{step}</h3>
                <p className='text-lg mt-3'>{details}</p>
                </div>
            </div>)}
            

           </div>
            </div>
        </div>
    );
};

export default HomeSec2;