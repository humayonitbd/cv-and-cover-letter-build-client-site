import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black py-16'>
           <div className='w-10/12 mx-auto '>
           <footer className="footer text-neutral-content">
            <div>
                <span className="footer-title">Services</span> 
               <Link to="/cv-builder" className="link link-hover">CV Build</Link>
               <Link to="/coverLetter" className="link link-hover">Cover Letter Build</Link>
               <Link to="/cv-builder" className="link link-hover">CV Template</Link>
               <Link to="/coverLetter" className="link link-hover">Cover Letter Template</Link>
               <Link to="/cv-builder" className="link link-hover">Create Professional CV</Link>
            </div> 
            <div>
                <span className="footer-title">page link</span> 
               <Link to="/" className="link link-hover">Home</Link>
               <Link to="/about" className="link link-hover">Aboute </Link>
               <Link to="/cv-builder" className="link link-hover">CV Builder</Link>
               <Link to="/coverLetter" className="link link-hover">Cover Letter</Link>
               <Link to="/contact" className="link link-hover">Contact</Link>
            </div>
            <div>
                <span className="footer-title">CONTACT SERVICE</span> 
               <Link to="/about" className="link link-hover">About us</Link>
               <Link to="/contact" className="link link-hover">Contact</Link>
               <Link to="/contact" className="link link-hover">CV Contact</Link>
               <Link to="/contact" className="link link-hover">Company Contact</Link>
            </div> 
            <div>
                <span className="footer-title">language</span> 
               <Link className="link link-hover">English</Link>
               <Link className="link link-hover">Bangla</Link>
            </div>
            </footer>
            <hr className='border-t-2 text-white my-10' />

            <div className='text-white flex justify-between'>
                <p>© Copyright Humayon Forid -2023.</p>
                <div className='flex'>
                    <a target="_blank"  href="https://www.facebook.com/humayonitbd"><FaFacebook className='mr-5 text-2xl'/></a>
                    <a target="_blank"  href="https://www.instagram.com/humayonitbd/"><FaInstagram className='mr-5 text-2xl'/></a>
                    <a target="_blank"  href="https://www.npmjs.com/package/twitter"><FaTwitter className='mr-5 text-2xl'/></a>
                    <a target="_blank"  href="https://www.linkedin.com/in/humayonitbd/"><FaLinkedin className=' text-2xl'/></a>
                </div>
            </div>
           </div>
            
        </div>
    );
};


export default Footer;