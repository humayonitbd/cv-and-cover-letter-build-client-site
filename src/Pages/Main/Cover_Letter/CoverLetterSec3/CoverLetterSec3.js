import React from 'react'; 
import { Link } from 'react-router-dom';
import coverLetter1 from "../../../../asset/cover-letter-page/cover-letter-1.png"
import coverLetter2 from "../../../../asset/cover-letter-page/humayon-cover-letter.png";
import coverLetter3 from "../../../../asset/cover-letter-page/cover-letter-3.png"
import { useGetCoverLetterCategoryQuery } from '../../../../features/CoverLetterCategory/CoverLetterCategoryapi';

const CoverLetterSec3 = () => {
    const {data, isLoading, isError} = useGetCoverLetterCategoryQuery();
    console.log(data)
    return (
        <div className='bg-[#006370] py-20'>
        <div className='w-10/12 mx-auto'>
         <h2 className='text-5xl font-bold text-center text-white'>Choose a template and create <br /> your cover letter in 5 minutes.</h2>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-20'>
             {
                 data?.map(({_id, name, coverLetterImg}) =><>
                 <div className='mainSec shadow-xl' key={_id}>
                     <div className=''><img src={coverLetterImg} className="w-full h-[500px] block" alt="" />
                     </div>
                     <div className='text_content'>
                         <div className='cartText'><Link to={`/coverLetter/${_id}`}><h4 className='text-2xl py-5 bg-black lowercase   font-bold'>{name}</h4></Link></div>
                     </div>
                 </div>
                 </>)
             }
         </div>
        </div>
     </div>
    );
};

export default CoverLetterSec3;