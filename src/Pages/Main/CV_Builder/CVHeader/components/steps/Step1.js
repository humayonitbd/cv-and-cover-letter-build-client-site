import { useState } from "react";
import { useStepperContext } from "../../contexts/CvStepperContext";

export default function Step1() {
  const { userData, setUserData } = useStepperContext();
  const [imageLink, setImageLink] = useState(); 
  const imageHandeler = (e)=>{
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image)
    console.log(formData)
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_API}`
    fetch(url,{
      method: "POST",
      body: formData,
    })
    .then(res => res.json())
    .then(data => {
      setImageLink(data.data.display_url);
      
    })
  }
  console.log(imageLink)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value, imageLink });
  };

console.log(userData);
  return (
    <div>
      <div className="flex flex-col ">
      <form>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
                        <div>
                        <label htmlFor="" className='font-semibold '>FIRST NAME</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["firstName"] || ""}
                        name="firstName"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='first name type' required/>
                        </div>
                        <div>
                        <label htmlFor="" className='font-semibold '>LAST NAME</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["lastName"] || ""}
                        name="lastName"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='last name type' required/>
                        </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
                        <div>
                        <label htmlFor="" className='font-semibold '>FATHERS NAME</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["fatherName"] || ""}
                        name="fatherName"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='first name type' required/>
                        </div>
                        <div>
                        <label htmlFor="" className='font-semibold '>MOTHERS NAME</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["motherName"] || ""}
                        name="motherName"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='last name type' required/>
                        </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
                        <div>
                        <label htmlFor="" className='font-semibold '>Date of Birth</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["birthDate"] || ""}
                        name="birthDate"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='first name type' required/>
                        </div>
                        <div>
                        <label htmlFor="" className='font-semibold '>National Id No </label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["nid"] || ""}
                        name="nid"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='last name type' required/>
                        </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
                        <div>
                        <label htmlFor="" className='font-semibold '>Marital Status</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["marital"] || ""}
                        name="marital"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='first name type' required/>
                        </div>
                        <div>
                        <label htmlFor="" className='font-semibold '>Religion</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["religion"] || ""}
                        name="religion"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='last name type' required/>
                        </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
                        <div>
                        <div className=''>
                        <div>
                        <label htmlFor="" className='font-semibold '>Professinal Photo </label><br />
                        <input 
                        onChange={(e)=>imageHandeler(e)} 
                        type="file" 
                        name="image"
                        className="mt-2 bg-green-500 p-2 rounded text-white"
                        required/>
                        </div>
                        </div>
                        </div>
                        <div className='grid grid-cols-2 gap-5'>
                        <div>
                        <label htmlFor="" className='font-semibold '>Select Gender</label><br />
                        <select 
                        onChange={handleChange}
                        value={userData["gender"] || ""}
                        name="gender"
                        className="select select-bordered w-full ">
                        <option selected>Selected Gender</option>
                        <option >Male</option>
                        <option>Female</option>
                        <option>Others</option>
                        </select>
                        </div>
                        <div><label htmlFor="" className='font-semibold '>Nationality</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["nationality"] || ""}
                        name="nationality"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='natinality type' required/></div>
                        </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
                        <div>
                        <label htmlFor="" className='font-semibold '>Present Address</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["presentAddress"] || ""}
                        name="presentAddress"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='current address ..' required/>
                        </div>
                        <div className=''>
                        <div>
                        <label htmlFor="" className='font-semibold '>Current Address</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["currentAddress"] || ""}
                        name="currentAddress"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='country type' required/>
                        </div>
                        </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4'>
                        <div>
                        <label htmlFor="" className='font-semibold '>PHONE</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["phone"] || ""}
                        name="phone"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='+0124796522' required/>
                        </div>
                        <div>
                        <label htmlFor="" className='font-semibold '>EMAIL</label><br />
                        <input 
                        type="text" 
                        onChange={handleChange}
                        value={userData["email"] || ""}
                        name="email"
                        className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
                        placeholder='@email type' required/>
                        </div>
                        </div>
                        
                        <div className='grid grid-cols-1 mb-4'>
                        <div>
                        <label htmlFor="" className='font-semibold '>CAREER OBJECTIVE</label><br />
                        <textarea 
                        className="textarea textarea-bordered w-full h-24 mt-1" 
                        onChange={handleChange}
                        value={userData["careerObj"] || ""}
                        name="careerObj" placeholder="type your CAREER OBJECTIVE" required></textarea>
                        <h5>Example:</h5>
                        <p>To obtain a position with opportunities to utilize my technical, branding and marketing experiences, skill, talent, creativity, sincerity for the better achievement of the organization.</p>
                        </div>
                        </div>
                    </form> 
    </div>
    </div>
  );
}