import React from 'react';
import man1 from "../../../../asset/About/team/a10.jpg";
import man2 from "../../../../asset/About/team/a11.jpg";
import man3 from "../../../../asset/About/team/a12.jpg";
import man4 from "../../../../asset/About/team/a13.jpg";
import man5 from "../../../../asset/About/team/Md Humayon Forid (01744687793).jpg";
import man6 from "../../../../asset/About/team/xperson_3.jpg.pagespeed.ic.Cln-jaM1jK.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AboutSec4 = () => {
   const teamMember=[
        {
            id:1,
            img: man1,
            name:"Md Obik Saam",
            title:"Senior Web Developer",
            linkLink:"https://www.linkedin.com/in/humayonitbd/",
            twiLink:"https://www.npmjs.com/package/twitter",
            faceLink:"https://www.facebook.com/humayonitbd",
            insLink:"https://www.instagram.com/humayonitbd/"
        },
        
        {
            id:3,
            img: man3,
            name:"Samira Saman",
            title:"Junior Web Developer",
            linkLink:"https://www.linkedin.com/in/humayonitbd/",
            twiLink:"https://www.npmjs.com/package/twitter",
            faceLink:"https://www.facebook.com/humayonitbd",
            insLink:"https://www.instagram.com/humayonitbd/"
        },
        {
            id:4,
            img: man5,
            name:"Md Humayon Forid",
            title:"CEO Developer",
            linkLink:"https://www.linkedin.com/in/humayonitbd/",
            twiLink:"https://www.npmjs.com/package/twitter",
            faceLink:"https://www.facebook.com/humayonitbd",
            insLink:"https://www.instagram.com/humayonitbd/"
        },
        {
            id:5,
            img: man4,
            name:"Monish Sina",
            title:"Senior HR",
            linkLink:"https://www.linkedin.com/in/humayonitbd/",
            twiLink:"https://www.npmjs.com/package/twitter",
            faceLink:"https://www.facebook.com/humayonitbd",
            insLink:"https://www.instagram.com/humayonitbd/"
        },
        {
            id:2,
            img: man2,
            name:"Jonh Albor",
            title:"Senior Web Developer",
            linkLink:"https://www.linkedin.com/in/humayonitbd/",
            twiLink:"https://www.npmjs.com/package/twitter",
            faceLink:"https://www.facebook.com/humayonitbd",
            insLink:"https://www.instagram.com/humayonitbd/"
        },
        {
            id:6,
            img: man6,
            name:"Buildan Sotha",
            title:"CEO Founder",
            linkLink:"https://www.linkedin.com/in/humayonitbd/",
            twiLink:"https://www.npmjs.com/package/twitter",
            faceLink:"https://www.facebook.com/humayonitbd",
            insLink:"https://www.instagram.com/humayonitbd/"
        },
    ]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='py-20 bg-white'>
            <div className='w-10/12 mx-auto'>
           <div className='text-center mb-10 w-1/2 mx-auto'> <h1 className='text-4xl font-bold mb-2'>Our team member</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur tenetur omnis asperiores vitae, nobis dignissimos aut excepturi odio, id sed itaque libero illo blanditiis sapiente, aperiam eos distinctio maiores.</p></div>
            <div className=''>
            <Carousel responsive={responsive}>
                {
                    teamMember?.map(member => <div className="card card-compact mr-5 bg-base-100 shadow-xl">
                    <img src={member.img} className="h-72" alt="Shoes" />
                    <div className="card-body">
                      <h2 className="card-title font-bold">{member.name}</h2>
                      <p className='text-lg'>{member.title}</p>
                      <div className="card-actions justify-start">
                      <div className='flex'>
                        <a target="_blank"  href={member.faceLink}><FaFacebook className='mr-5 text-2xl text-[#F56600] hover:text-black'/></a>
                        <a target="_blank"  href={member.insLink}><FaInstagram className='mr-5 text-2xl text-[#F56600] hover:text-black'/></a>
                        <a target="_blank"  href={member.twiLink}><FaTwitter className='mr-5 text-2xl text-[#F56600] hover:text-black'/></a>
                        <a target="_blank"  href={member.linkLink}><FaLinkedin className=' text-2xl text-[#F56600] hover:text-black'/></a>
                        </div>
                      </div>
                    </div>
                  </div>)
                }
            </Carousel>;
        </div>
            </div>
        </div>
    );
};

export default AboutSec4;