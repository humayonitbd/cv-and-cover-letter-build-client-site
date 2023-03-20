import { useStepperContext } from "../../contexts/CvStepperContext";

export default function Step2() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  console.log(userData)
  return (
    <div className="flex flex-col ">
      <form>
      <div>
        <h4 className="font-bold text-xl">SSC Educatin Details:</h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
          <div>
          <label htmlFor="" className='font-semibold '>Education title</label><br />
          <select 
        onChange={handleChange}
        value={userData["SSCeduTitle"] || ""}
        name="SSCeduTitle"
        className="select select-bordered w-full ">
        <option selected>Seleted title</option>
        <option >SSC</option>
        </select>
        </div>
        <div>
        <label htmlFor="" className='font-semibold '>Board Name</label><br />
        <select 
        onChange={handleChange}
        value={userData["SSCboardName"] || ""}
        name="SSCboardName"
        className="select select-bordered w-full ">
        <option selected>Seleted Board</option>
        <option >Rajshahi</option>
        <option>Dhaka</option>
        <option>Jessore</option>
        <option>Chittagong</option>
        <option>Cumilla</option>
        <option>Dinajpur</option>
        </select>
        </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
          <div>
          <label htmlFor="" className='font-semibold '>Passing year</label><br />
          <input 
          type="text" 
          onChange={handleChange}
          value={userData["SSCpassigYear"] || ""}
          name="SSCpassigYear"
          className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
          placeholder='passing year type'/>
          </div>
          <div>
          <label htmlFor="" className='font-semibold '>G.P.A</label><br />
          <input 
          type="text" 
          onChange={handleChange}
          value={userData["SSCgpa"] || ""}
          name="SSCgpa"
          className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
          placeholder='G.P.A type'/>
          </div>
          
      
    </div>
      </div>
      <div>
        <h4 className="font-bold text-xl">HSC/diploma Educatin Details:</h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
          <div>
          <label htmlFor="" className='font-semibold '>Education title</label><br />
          <select 
        onChange={handleChange}
        value={userData["HSCeduTitle"] || ""}
        name="HSCeduTitle"
        className="select select-bordered w-full ">
        <option selected>Seleted title</option>
        <option >HSC</option>
        <option >Diploma Enginnering</option>
        </select>
        </div>
        <div>
        <label htmlFor="" className='font-semibold '>Board Name</label><br />
        <select 
        onChange={handleChange}
        value={userData["HSCboardName"] || ""}
        name="HSCboardName"
        className="select select-bordered w-full ">
        <option  selected>Seleted Board</option>
        <option  >Rajshahi</option>
        <option>Dhaka</option>
        <option>Jessore</option>
        <option>Chittagong</option>
        <option>Cumilla</option>
        <option>Dinajpur</option>
        </select>
        </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
          <div>
          <label htmlFor="" className='font-semibold '>Passing year</label><br />
          <input 
          type="text" 
          onChange={handleChange}
          value={userData["HSCpassigYear"] || ""}
          name="HSCpassigYear"
          className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
          placeholder='passing year type'/>
          </div>
          <div>
          <label htmlFor="" className='font-semibold '>G.P.A</label><br />
          <input 
          type="text" 
          onChange={handleChange}
          value={userData["HSCgpa"] || ""}
          name="HSCgpa"
          className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
          placeholder='G.P.A type'/>
          </div>
          
      
    </div>
      </div>
      <div>
        <h4 className="font-bold text-xl">Others Education Details:</h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
          <div>
          <label htmlFor="" className='font-semibold '>Education title</label><br />
          <select 
        onChange={handleChange}
        value={userData["OtherseduTitle"] || ""}
        name="OtherseduTitle"
        className="select select-bordered w-full ">
        <option  selected>Others Seleted title</option>
        <option>B.S.C</option>
        <option>B.A</option>
        <option>M.A</option>
        <option>M.S.C</option>
        </select>
        </div>
        <div>
        <label htmlFor="" className='font-semibold '>Board Name</label><br />
        <select 
        onChange={handleChange}
        value={userData["OthersBoardName"] || ""}
        name="OthersBoardName"
        className="select select-bordered w-full ">
        <option  selected>Seleted Board</option>
        <option  >Rajshahi</option>
        <option>Dhaka</option>
        <option>Jessore</option>
        <option>Chittagong</option>
        <option>Cumilla</option>
        <option>Dinajpur</option>
        </select>
        </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
          <div>
          <label htmlFor="" className='font-semibold '>Passing year</label><br />
          <input 
          type="text" 
          onChange={handleChange}
          value={userData["OthersPassigYear"] || ""}
          name="OthersPassigYear"
          className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
          placeholder='passing year type'/>
          </div>
          <div>
          <label htmlFor="" className='font-semibold '>G.P.A</label><br />
          <input 
          type="text" 
          onChange={handleChange}
          value={userData["OthersGpa"] || ""}
          name="OthersGpa"
          className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
          placeholder='G.P.A type'/>
          </div>
          
      
    </div>
      </div>
      </form>
      
    </div>
  );
}