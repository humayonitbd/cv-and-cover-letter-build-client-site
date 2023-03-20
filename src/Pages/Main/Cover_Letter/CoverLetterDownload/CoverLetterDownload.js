import React ,{useRef} from 'react';
import { useParams } from 'react-router-dom';
import { useGetDownloadResumeQuery } from '../../../../features/resume/resumeApi';
import { useReactToPrint } from "react-to-print";

const CoverLetterDownload = () => {
    const {id} = useParams();
    console.log(id)
    const {data, isError, isLoading} = useGetDownloadResumeQuery(id);
    console.log(data)

    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
    return (
        <div>
            {data && <div className='p-10'>
            <div className='flex justify-end'><button onClick={handlePrint} className='btn bg-green-500 border-none'>Download PDF</button></div>
            <div ref={componentRef} className='bg-white px-16 pt-20 pb-32 text-lg'>
                <div className='flex justify-end mb-5'>
                    <div className='text-start'>
                    <h3 className='text-xl font-bold'>{data.fullName}</h3>
                    <h3 className='text-md'>{data.address}</h3>
                    <p className='text-md'>Phone: {data.phoneNumber}</p>
                    <p className='text-md'>Email: {data.email}</p>
                    </div>
                </div>
                <div className='mb-5'>
                    <p>Date: {data.date}</p>
                    {data.subject && <p>{data.subject}</p>}
                    <p>{data.signing}</p>
                </div>
                <div className='mb-5'>
                    <p className='mb-6'>{data.opener}</p>
                    <p className='mb-6'>{data.body}</p>
                    <p>{data.typeCloser}</p>
                </div>
                <div>
                    <p>{data.closerSort}</p>
                    <h4>{data.fullName}</h4>
                </div>
            </div>
        </div>}
        </div>
    );
};

export default CoverLetterDownload;