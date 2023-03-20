import React, { useEffect, useState } from 'react';
import { useStepperContext } from "../../contexts/CvStepperContext";

import uniqid from "uniqid";
import { FiTrash } from 'react-icons/fi';
const Step4 = () => {
  let uniqID = uniqid();
    const { userData, setUserData } = useStepperContext();
    const [languagestate, setLanguagestate] = useState("");
  const [languageField, setLanguageField] = useState([]);

  useEffect(()=>{
    setUserData({...userData,languageField})

  },[languageField,userData,setUserData])
  
  const addLanguage = (e) => {
    e.preventDefault()
    const form = e.target;

    const newdata = {
      language: languagestate,
      id: uniqID,
    };
    let data = [...languageField, newdata];
    setLanguageField(data);
    setUserData({...userData, languageField})
 form.reset()
    
  };

  const removeLanguage = (id) => {
    const newLanguage = [...languageField];
    const setLanguage = newLanguage.filter((skill, ) => skill.id !== id);
    console.log(setLanguage);
    setLanguageField(setLanguage);
   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  console.log( userData);
    return (
        <div className="flex flex-col ">
          <div className="text-center font-semibold text-xl my-2"><hr className="inline-block border-2 w-32"/><span className="px-10">Language</span><hr className="inline-block border-2 w-32"/></div>
          
          <div className="my-5">
        <label htmlFor="" className="font-semibold mb-2 text-lg inline-block ">
        Add your language:
        </label>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-5">
       {languageField?.map((input, index) => {
          return (
            <div key={index} className="flex items-center justify-between pl-2 gap-3 mb-5 bg-slate-200 rounded-xl">
              <p>{input.language}</p>
              <button
                onClick={() => removeLanguage(input.id)}
                type="button"
                className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-8 w-8 group transition-all hover:bg-red-500"
              >
                <FiTrash
                  className="text-red-500 group-hover:text-white transition-all"
                  size="16"
                />
              </button>
            </div>
          );
        })}
       </div>
        <form onSubmit={addLanguage} className="text-center">
          <input
            name="skill"
            className="border-[#656565] border-2 p-2 mb-2 rounded-full mt-1  !w-full"
            placeholder="type your skill ..."
            onChange={(event) => setLanguagestate(event.target.value)}
          />

          <button
          type="submit"
            className="btn btn-primary border-none rounded-full px-8 mt-5  py-1"
         
          >
            Add Skill..
          </button>
        </form>
      </div>
          
          <div className="text-center font-semibold my-10 text-xl"><hr className="inline-block border-2 w-32"/><span className="px-10">Refarence</span><hr className="inline-block border-2 w-32"/></div>
             <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 mb-8'>
          <div>
          <label htmlFor="" className='font-semibold '>FULL NAME</label><br />
          <input 
          type="text" 
          onChange={handleChange}
          value={userData["refarenceName"] || ""}
          name="refarenceName"
          className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
          placeholder='type your name'/>
        </div>
        <div>
        <label htmlFor="" className='font-semibold '>Phone no</label><br />
        <input 
          type="text" 
          onChange={handleChange}
          value={userData["refarenceNumber"] || ""}
          name="refarenceNumber"
          className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
          placeholder='type your mobile number'/>
        </div>
        <div>
        <label htmlFor="" className='font-semibold '>Relation</label><br />
        <input 
          type="text" 
          onChange={handleChange}
          value={userData["refarenceRelation"] || ""}
          name="refarenceRelation"
          className='border-[#656565] border-2 p-1 rounded mt-1 w-full' 
          placeholder='type your relation'/>
        </div>
        </div>
    </div>
    );
};

export default Step4;