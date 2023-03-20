import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
const ContactSec2 = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_banjmrj', 'template_7nilc3p', form.current, 'fF1Gb1UK-6c2QbJFr')
          .then((result) => {
              console.log(result.text);
              toast.success('message send succsessfull..')
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return (
        <div className='py-20 lg:py-32 bg-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-10/12 mx-auto'>
                <div>
                    <h2 className='text-5xl font-bold'>Contact us</h2>
                    <p className='text-lg my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo itaque error accusantium necessitatibus non ullam facilis illum enim totam deserunt!</p>
                    <p className='text-lg my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sapiente vero maxime placeat laborum nobis voluptatem nemo. Debitis, architecto eius.</p>
                    <p className='text-lg my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sapiente vero maxime placeat laborum nobis voluptatem nemo. Debitis, architecto eius.</p>
                   
                </div>
                <div className='px-20'>
                    <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="name type here" className="input w-full mb-10 border-2 border-[#d3d3d3]" /><br />
                    <input type="email" name="user_email" placeholder="email type here" className="input w-full mb-10 border-2 border-[#d3d3d3]" /><br />
                    <textarea name='message' className="textarea border-[#d3d3d3] w-full h-32 mb-5" placeholder="Details type here"></textarea>
                    <input type="submit" name="" id="" className='btn w-full bg-[#F56600] border-none' value="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSec2;