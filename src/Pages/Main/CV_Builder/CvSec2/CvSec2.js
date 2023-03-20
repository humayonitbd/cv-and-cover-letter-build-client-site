import React from 'react'; 
import { Link } from 'react-router-dom';
import cv1 from '../../../../asset/CvPage/cv1.png';
import cv2 from '../../../../asset/CvPage/cv2.png';
import cv3 from '../../../../asset/CvPage/cv3.png';
import SmallLoading from '../../../../components/Loading/SmallLoading';
import { useGetCvCategoryQuery } from '../../../../features/CvCategory/CvCategoryapi';
import './CvSec2.css';

const CvSec2 = () => {
    const {data, isLoading, isError} = useGetCvCategoryQuery();
    const cvCategory =[
        {
            id:1,
            name: "Create CV",
            img: cv1
        },
        {
            id:2,
            name: "Create CV",
            img: cv2
        },
        {
            id:3,
            name: "Create CV",
            img: cv3
        },
    ]
    return (
        <div className='bg-[#f566004a] py-20'>
           <div className='w-10/12 mx-auto'>
            <h2 className='text-5xl font-bold text-center'>The best online CV maker to help <br /> you land a dream job</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-20'>
                {
                   data?.length === 0 ?  <SmallLoading /> : <>{ data?.map(({_id, name, shortCv, cvImg}) =><>
                   <div className='mainSec shadow-xl' key={_id}>
                       <div className=''><img src={shortCv} className="w-full h-[450px]" alt="" />
                       </div>
                       <div className='text_content'>
                           <div className='cartText'><Link to={`/cv-builder/cv-header/${_id}`}><h4 className='text-2xl py-5 bg-black lowercase   font-bold'>{name}</h4></Link></div>
                       </div>
                   </div>
                   </>)}</>
                }
            </div>
           </div>
        </div>
    );
};

export default CvSec2;