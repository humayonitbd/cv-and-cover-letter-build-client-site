import React from 'react';
import { TfiWrite } from "react-icons/tfi";
import { RiFileSearchFill } from "react-icons/ri";
import { GrDocumentPdf } from "react-icons/gr";
import { MdOutlineBrightness7 } from "react-icons/md";
import { Link } from 'react-router-dom';

const CoverLetterSec2 = () => {
    const coverLetterBuild = [
        {
            id: 1,
            icon: <RiFileSearchFill />,
            step: "Choose from 20+ templates created by HR experts",
            details: "n our professional cover letter builder, you will find templates designed by a team of career experts, hiring managers and graphic designers. Choosing the right template for your cover letter shows recruiters that you understand the current recruitment standards."
        },
        {
            id: 2,
            icon: <TfiWrite />,
            step: "Make your cover letter using pre-written content",
            details: "You don’t need to have to be an expert in building a cover letter online to make a great one. Our cover letter generator has ready-made content tailored to every industry and role. All you need to do is pick the content that suits you most and edit it to your liking."
        },
        {
            id: 3,
            icon: <GrDocumentPdf />,
            step: "Build a cover letter online and download as PDF or DOC",
            details: "Our cover letter creator lets you choose your favourite format. You can quickly create your document using our feature-packed online cover letter maker and download it as a flexible PDF or in editable MS Word format."
        },
        {
            id: 4,
            icon: <MdOutlineBrightness7 />,
            step: "Create a cover letter that gets you hired",
            details: "The LiveCareer cover letter creator gives you all the tools you need to write a job-winning cover letter. Our unique combination of professional templates, expert hints and ready-made content makes the most daunting parts of job-hunting a breeze."
        },
    ]
    return (
        <div className='bg-white py-20'>
            <div className='w-10/12 mx-auto'>
            <h2 className='text-center text-5xl font-semibold'>Why in this website cover letter builder?</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-x-44 lg:gap-x-56 gap-y-10 mt-20'>
            {coverLetterBuild?.map(({icon, step, details, id}) =><div key={id} className='flex '>
                <p className='mr-5 text-6xl'>{icon}</p>
                <div className=''>
                <h3 className='text-2xl font-bold'>{step}</h3>
                <p className='text-lg mt-3'>{details}</p>
                </div>
            </div>)}
            

           </div>
           <div className='text-center mt-10 lg:mt-20 '><Link to="/createCoverLetter"><button className='bg-[#F56600] btn border-none px-12 text-lg'>Create A cover letter</button></Link></div>
            </div>
        </div>
    );
};

export default CoverLetterSec2;