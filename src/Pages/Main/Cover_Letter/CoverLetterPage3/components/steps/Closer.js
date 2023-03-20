import React from 'react';
import { usePostResumeMutation } from '../../../../../../features/resume/resumeApi';
import { useStepperContext } from '../../contexts/StepperContext';

const Closer = () => {
    const { userData, setUserData } = useStepperContext();
const [postResume, {isLoading, isError}] = usePostResumeMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
   
  };
  // postResume(userData);
 
    return (
        <div className="flex flex-col ">
            {/* <div className='grid grid-cols-1 gap-5 mb-8'>
            <div>
             <label htmlFor="" className='font-semibold '>Select your Closer</label><br />
            <select 
            className="select select-bordered w-full mt-2"
             onChange={handleChange}
            value={userData["closerSort"] || ""}
            name="closerSort"
            >
            <option selected>Sincerely</option>
            <option>Expectations</option>
            <option>Best Regards</option>
            <option>Expression</option>
            <option>Thank you</option>
            <option>Kind regards</option>
            </select>
            </div>
            </div> */}
            <div className='grid grid-cols-1 gap-5 mb-8'>
            <div>
             <label htmlFor="" className='font-semibold '>Type your Closer</label><br />
             <textarea 
              onChange={handleChange}
              value={userData["typeCloser"] || ""}
              name="typeCloser"
              className="textarea text-gray-800 textarea-bordered w-full mt-2  h-24"      placeholder="type your cover letter closer.."
              ></textarea>
              <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Closer example
        </div>
        <div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <div>
            <h5 className="font-bold">Quick Chat :</h5>
            <p>Please let me know if you have time for a quick chat over the next couple of days.</p>
          </div>
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <div>
            <h5 className="font-bold">Thank You :</h5>
            <p>Thank you for your time in reviewing my CV and this letter. I look forward to speaking soon.</p>
          </div>
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <div>
            <h5 className="font-bold">Looking forward :</h5>
            <p>I can be reached via the included mobile number and email, and I look forward to hearing from you.</p>
          </div>
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <div>
            <h5 className="font-bold">Happy to expand :</h5>
            <p>Please reach out with any questions about my work history and capabilities. I'll be happy to expand on any experience, skills and how I can meet your needs.</p>
          </div>
        </div>
        
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <div>
            <h5 className="font-bold">Suitable :</h5>
            <p>I appreciate you taking the time to evaluate my suitability for the open position and hope to speak soon for a phone chat or to set up an interview.</p>
          </div>
        </div>
        
        </div>
      </div>
            </div>
            </div>
    </div>
    );
};

export default Closer;