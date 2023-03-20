import React from 'react';
import { Link } from 'react-router-dom';
import { useGetDeleteIdCvMutation } from '../../../features/CV/CVapi';

const MyCvPageDetails = ({cv}) => {
    const {Duration, HSCgpa, HSCpassigYear, Location, Position, SSCgpa, SSCpassigYear, birthDate, careerObj, companyName, nationality, eduTitle, email, fatherName, firstName, gpa, imageLink, inputFields, lastName, marital, motherName, nid, passigYear, phone, presentAddress, refarenceName, refarenceNumber, refarenceRelation, religion, skillField, userEmail, gender, currentAddress, OtherseduTitle, OthersPassigYear, OthersGpa, SSCeduTitle,  ExperianceCompanyName, ExperianceLocation,  ExperiancePosition, ExperienceDuration,  SSCboardName, HSCeduTitle, HSCboardName, OthersBoardName, coursesField, languageField , _id} = cv;

    const parsonalAdress = [
        {
            id:1,
            title: "Name",
            subTitle: `${firstName} ${lastName}`
        },
        {
            id:2,
            title: "Father’s Name",
            subTitle: fatherName
        },
        {
            id:3,
            title: "Mother’s Name",
            subTitle: motherName
        },
        {
            id:4,
            title: "Date of Birth",
            subTitle: birthDate
        },
        {
            id:5,
            title: "Gender",
            subTitle: gender
        },
        {
            id:6,
            title: "Marital Status",
            subTitle: marital
        },
        {
            id:7,
            title: "Nationality",
            subTitle: nationality
        },
        {
            id:8,
            title: "National Id No",
            subTitle: nid
        },
        {
            id:9,
            title: "Religion",
            subTitle: religion
        },
        {
            id:10,
            title: "Permanent Address",
            subTitle: presentAddress
        },
        {
            id:11,
            title: "Current Location",
            subTitle: currentAddress
        },
    ]

    const educationDetails = [
        {
            id: 1,
            passigYear: SSCpassigYear,
            gpa: SSCgpa,
            eduTitle: SSCeduTitle,
            board: SSCboardName

        },
        {
            id: 2,
            passigYear: HSCpassigYear,
            gpa: HSCgpa,
            eduTitle: HSCeduTitle,
            board: HSCboardName

        },
        {
            id: 3,
            passigYear: OthersPassigYear,
            gpa: OthersGpa,
            eduTitle: OtherseduTitle,
            board: OthersBoardName

        },
    ]
    

    const experiance = [
        {
            id:1,
            companyName: ExperianceCompanyName,
            companyPosition: ExperiancePosition,
            companyLocation: ExperianceLocation,
            companyDurotion: ExperienceDuration,
        }
    ]
    const [handlerDelete, {isLoading, isError}] = useGetDeleteIdCvMutation();
    
    return (
        <div className=' p-2  '>
            <div className='overflow-y-scroll h-[400px]'>
            <div className='flex justify-between'>
            <div>
                <h2 className='font-bold text-2xl'> {firstName} {lastName}</h2>
                <p className='font-semibold'>{Position}</p>
                <p className='font-semibold'>Address: {presentAddress}</p>
                <p className='font-semibold'>Phone: {phone}</p>
                <p className='font-semibold'>Email: {email}</p>
            </div>
            <div>
                <div><img src={imageLink} className="h-28  w-28" alt="" /></div>
            </div>
            </div>

            <div className='mt-5'>
                <p className='font-semibold bg-slate-600 text-white px-2 py-1'>CAREER SUMMARY :</p>
                <p>{careerObj}</p>
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
                          skillField?.map((skill, idx) => (
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
                                coursesField?.map(traning => <tr key={traning.id} className=' border-2 '>
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
            <div className='mt-5'>
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

            
            <div className='mt-5'>
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
            </div>
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
                                languageField?.map(language => <tr key={language.id} className=' border-2 '>
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
                    <h4><span className='font-bold'>Name:</span> {refarenceName}</h4>
                    <p><span className='font-bold'>Phone:</span> {refarenceNumber}</p>
                    <p><span className='font-bold'>Relation:</span> {refarenceRelation}</p>
                </div>
            </div>

            <div className='mt-5 flex justify-start'>
                <div className='text-center'><hr  className='border-2 border-t-2 w-32 border-black inline-block'/>
                <p>{`${firstName} ${lastName}`}</p></div>
            </div>
            </div>
            <div className='mt-5 flex justify-between'><button onClick={()=>handlerDelete(_id)} className='btn bg-red-500 border-none mr-2'>Delete</button><Link to={`/dashboard/cv/download/${_id}`}><button className='btn btn-primary border-none'>Download</button></Link></div>
            
        </div>
    );
};

export default MyCvPageDetails;