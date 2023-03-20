import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { useGetDownloadCVQuery } from '../../../../features/CV/CVapi';

const CVDownloadPage = () => {
    const {id} = useParams();
    console.log(id)
    const {data, isError, isLoading} = useGetDownloadCVQuery(id);
    console.log(data)
    // const { HSCgpa, HSCpassigYear,  Position, SSCgpa, SSCpassigYear, birthDate, careerObj, nationality,  email, fatherName, firstName,  imageLink, inputFields, lastName, marital, motherName, nid,  phone, presentAddress, refarenceName, refarenceNumber, refarenceRelation, religion, skillField,  gender, currentAddress, OtherseduTitle, OthersPassigYear, OthersGpa, SSCeduTitle, CoursesDuration1, CoursesDuration2, ExperianceCompanyName, ExperianceLocation,  ExperiancePosition, ExperienceDuration,  coursesInstitute1,  coursesInstitute2, coursesName1, coursesName2, coursesYear1, coursesYear2, SSCboardName, HSCeduTitle, HSCboardName, OthersBoardName,_id} = data;

    const parsonalAdress = [
        {
            id:1,
            title: "Name",
            subTitle: `${data?.firstName} ${data?.lastName}`
        },
        {
            id:2,
            title: "Father’s Name",
            subTitle: data?.fatherName
        },
        {
            id:3,
            title: "Mother’s Name",
            subTitle: data?.motherName
        },
        {
            id:4,
            title: "Date of Birth",
            subTitle: data?.birthDate
        },
        {
            id:5,
            title: "Gender",
            subTitle: data?.gender
        },
        {
            id:6,
            title: "Marital Status",
            subTitle: data?.marital
        },
        {
            id:7,
            title: "Nationality",
            subTitle: data?.nationality
        },
        {
            id:8,
            title: "National Id No",
            subTitle: data?.nid
        },
        {
            id:9,
            title: "Religion",
            subTitle: data?.religion
        },
        {
            id:10,
            title: "Permanent Address",
            subTitle: data?.presentAddress
        },
        {
            id:11,
            title: "Current Location",
            subTitle: data?.currentAddress
        },
    ]

    const educationDetails = [
        {
            id: 1,
            passigYear: data?.SSCpassigYear,
            gpa: data?.SSCgpa,
            eduTitle: data?.SSCeduTitle,
            board: data?.SSCboardName

        },
        {
            id: 2,
            passigYear: data?.HSCpassigYear,
            gpa: data?.HSCgpa,
            eduTitle: data?.HSCeduTitle,
            board: data?.HSCboardName

        },
        {
            id: 3,
            passigYear: data?.OthersPassigYear,
            gpa: data?.OthersGpa,
            eduTitle: data?.OtherseduTitle,
            board: data?.OthersBoardName

        },
    ]
    const traningDetails = [
        {
            id: 1,
            coursesName: data?.coursesName1,
            courcesInstitute: data?.coursesInstitute1,
            coursesDuration: data?.CoursesDuration1,
            coursesYear: data?.coursesYear1

        },
        {
            id: 2,
            coursesName: data?.coursesName2,
            courcesInstitute: data?.coursesInstitute2,
            coursesDuration: data?.CoursesDuration2,
            coursesYear: data?.coursesYear2

        },
        
        
    ]

    const experiance = [
        {
            id:1,
            companyName: data?.ExperianceCompanyName,
            companyPosition: data?.ExperiancePosition,
            companyLocation: data?.ExperianceLocation,
            companyDurotion: data?.ExperienceDuration,
        }
    ]

    const handlerDelete =()=>{

    }

    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    return (
        <div>
            {data && <div className=' px-10 py-16  '>
            <div className='flex justify-end'><button onClick={handlePrint} className='btn bg-green-500 border-none'>Download PDF</button></div>
                <div ref={componentRef} className='bg-white py-16 px-14'>
                <div className='flex justify-between'>
                <div>
                    <h2 className='font-bold text-2xl'> {data?.firstName} {data?.lastName}</h2>
                    <p className='font-semibold'>{data?.Position}</p>
                    <p className='font-semibold'>Address: {data?.presentAddress}</p>
                    <p className='font-semibold'>Phone: {data?.phone}</p>
                    <p className='font-semibold'>Email: {data?.email}</p>
                </div>
                <div>
                    <div><img src={data?.imageLink} className="h-28  w-28" alt="" /></div>
                </div>
                </div>
    
                <div className='mt-5'>
                    <p className='font-semibold bg-slate-600 text-white px-2 py-1'>CAREER SUMMARY :</p>
                    <p>{data?.careerObj}</p>
                </div>
                <div className='mt-5'>
                    <p className='font-semibold bg-slate-600 text-white px-2 py-1'>PERSONAL DETAILS :</p>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <tbody>
                                {
                                    parsonalAdress?.map(parsonalAdds => <tr key={parsonalAdds.id} className=''>
                                    <td className='p-0 m-0 font-semibold'>{parsonalAdds.title}</td>
                                    <td className='p-0 m-0'>:{parsonalAdds.subTitle}</td>
                                    
                                </tr>)
                                }
                           
                            </tbody>
                        </table>
                        </div>
                </div>
                <div className='mt-5'>
                    <p className='font-semibold bg-slate-600 text-white px-2 py-1'>My Skill : </p>
                    <div>
                        <ol className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                            {
                              data?.skillField?.map((skill, idx) => (
                                <li className='font-bold'>{idx + 1}. {skill.skill}</li>
                              ))  
                            }
                        </ol>
                    </div>
                </div>
    
                {/* //traning details */}
                <div className='mt-5'>
                    <p className='font-semibold bg-slate-600 text-white px-2 py-1'>TRAINING SUMMARY : </p>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                        <thead>
                            <tr className='bg-red-500'>
                                <th className='text-center'>Title</th>
                                <th className='text-center'>Institute</th>
                                <th className='text-center'>Year</th>
                                <th className='text-center'>Duration</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.coursesField?.map(traning => <tr key={traning.id} className=' border-2 '>
                                    <td className='p-2 m-0 text-center'>{traning.coursesName1}</td>
                                    <td className='p-2 m-0 text-center'>{traning.coursesInstitute1}</td>
                                    <td className='p-2 m-0 text-center'>{traning.coursesYear1}</td>
                                    <td className='p-2 m-0 text-center'>{traning.CoursesDuration1} months</td>
                                    
                                </tr>)
                                }
                           
                            </tbody>
                        </table>
                        </div>
                </div>
                <div className='mt-14'>
                    <p className='font-semibold bg-slate-600 text-white px-2 py-1'>EDUCATIONAL DETAILS : </p>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                        <thead>
                            <tr className='bg-red-500'>
                                <th className='text-center'>Title</th>
                                <th className='text-center'>Passing year</th>
                                <th className='text-center'>Board</th>
                                <th className='text-center'>G.P.A</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    educationDetails?.map(eduDetails => <tr key={eduDetails.id} className=' border-2 '>
                                    <td className='p-2 m-0 text-center'>{eduDetails.eduTitle}</td>
                                    <td className='p-2 m-0 text-center'>{eduDetails.passigYear}</td>
                                    <td className='p-2 m-0 text-center'>{eduDetails.board}</td>
                                    <td className='p-2 m-0 text-center'>{eduDetails.gpa}</td>
                                </tr>)
                                }
                           
                            </tbody>
                        </table>
                        </div>
                </div>
    
                
                {experiance.length &&  <div className='mt-5'>
                    <p className='font-semibold bg-slate-600 text-white px-2 py-1'>Work Experiance : </p>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                        <thead>
                            <tr className='bg-red-500'>
                                <th className='text-center'>COMPANY NAME</th>
                                <th className='text-center'>COMPANY POSITION</th>
                                <th className='text-center'>COMPANY LOCATION</th>
                                <th className='text-center'>COMPANY DURETION</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    experiance?.map(experianc => <tr key={experianc.id} className=' border-2 '>
                                    <td className='p-2 m-0 text-center'>{experianc.companyName}</td>
                                    <td className='p-2 m-0 text-center'>{experianc.companyPosition}</td>
                                    <td className='p-2 m-0 text-center'>{experianc.companyLocation}</td>
                                    <td className='p-2 m-0 text-center'>{experianc.companyDurotion}</td>
                                    
                                </tr>)
                                }
                           
                            </tbody>
                        </table>
                        </div>
                </div> }
                <div className='mt-5'>
                    <p className='font-semibold bg-slate-600 text-white px-2 py-1'>LANGUAGE PROFICIENCY : </p>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                        <thead>
                            <tr className='bg-red-500'>
                                <th className='text-center'>LANGUAGE</th>
                                <th className='text-center'>Speaking</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.languageField?.map(language => <tr key={language.id} className=' border-2 '>
                                    <td className='p-2 m-0 text-center'>{language.language}</td>
                                    <td className='p-2 m-0 text-center'>Good</td>
                                    
                                </tr>)
                                }
                           
                            </tbody>
                        </table>
                        </div>
                </div>
                <div className='mt-5'>
                    <p className='font-semibold bg-slate-600 text-white px-2 py-1'> REFERENCE : </p>
                    <div>
                        <h4><span className='font-bold'>Name:</span> {data?.refarenceName}</h4>
                        <p><span className='font-bold'>Phone:</span> {data?.refarenceNumber}</p>
                        <p><span className='font-bold'>Relation:</span> {data?.refarenceRelation}</p>
                    </div>
                </div>
    
                <div className='mt-5 flex justify-start'>
                    <div className='text-center'><hr  className='border-2 border-t-2 w-32 border-black inline-block'/>
                    <p>{`${data?.firstName} ${data?.lastName}`}</p></div>
                </div>
                </div>
                
                
            </div>
            }
        </div>
    );
};

export default CVDownloadPage;