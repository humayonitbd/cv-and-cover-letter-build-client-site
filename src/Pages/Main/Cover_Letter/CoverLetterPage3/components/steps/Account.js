import { useStepperContext } from "../../contexts/StepperContext";

export default function Account() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    
  };
console.log(userData);
  return (
    <div className="flex flex-col ">
      <form>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
                        <div>
                        <label htmlFor="" className='font-semibold '>full NAME</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["fullName"] || ""}
                        name="fullName"
                         className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                         placeholder='full name type'/>
                        </div>
                        <div>
                        <label htmlFor="" className='font-semibold '>ADDRESS NAME</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["address"] || ""}
                        name="address"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='last name type'/>
                        </div>
                        </div>
                        
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4'>
                        <div>
                        <label htmlFor="" className='font-semibold '>PHONE</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["phoneNumber"] || ""}
                        name="phoneNumber"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='+0124796522'/>
                        </div>
                        <div>
                        <label htmlFor="" className='font-semibold '>EMAIL</label><br />
                        <input 
                        type="email" 
                        onChange={handleChange}
                        value={userData["email"] || ""}
                        name="email"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='@email type'/>
                        </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
                        <div>
                        <label htmlFor="" className='font-semibold '>DATE</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["date"] || ""}
                        name="date"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='date type'/>
                        </div>
                        <div className=''>
                        <div>
                        <label htmlFor="" className='font-semibold uppercase'>Signing </label><br />
                        <select 
                        className="select select-bordered w-full max-w-xs"
                        onChange={handleChange}
                        value={userData["signing"] || ""}
                        name="signing"
                        >
                        <option selected>Dear Sir</option>
                        <option>Dear Hiring Manager</option>
                        <option>Dear Madam</option>
                        <option>Dear HR</option>
                        </select>
                        </div>
                        </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
                        <div>
                        <label htmlFor="" className='font-semibold'>DISCRIBE POSITION</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["position"] || ""}
                        name="position"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='your position..'/>
                        </div>
                        <div>
                        <label htmlFor="" className='font-semibold '>Experiance year</label><br />
                        <select 
                        className="select select-bordered w-full max-w-xs"
                        onChange={handleChange}
                        value={userData["experiance"] || ""}
                        name="experiance"
                        >
                        <option selected>6 months</option>
                        <option>1 year</option>
                        <option>2 year</option>
                        <option>2 - 3 year</option>
                        <option>3 - 5 year</option>
                        <option>5+ year</option>
                        </select>
                        </div>
                        </div>
                        <div className='grid grid-cols-1 gap-5 mb-4'>
                        <div>
                        <label htmlFor="" className='font-semibold '>Type your subject </label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["subject"] || ""}
                        name="subject"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='type your subject or position'/>
                        </div>
                        
                        </div>
                    </form>                  
    </div>
  );
}