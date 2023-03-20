import { useEffect, useState } from "react";
import { useStepperContext } from "../../contexts/CvStepperContext";
import { FiTrash } from "react-icons/fi";
import uniqid from "uniqid";
export default function Step3() {
  let uniqID = uniqid();
  const { userData, setUserData } = useStepperContext();
  const [skillstate, setskillstate] = useState("");
  const [skillField, setSkillField] = useState([]);
  const [coursesField, setCoursesField] = useState([]);


  useEffect(()=>{
    setUserData({...userData,skillField,coursesField})

  },[skillField,coursesField,userData,setUserData])

  const addSkills = (e) => {
    e.preventDefault()
    const form = e.target;

    const newdata = {
      skill: skillstate,
      id: uniqID,
    };
    let data = [...skillField, newdata];
    setSkillField(data);
    setUserData({...userData, skillField})
    
  form.reset()
    
  };
  
  const removeSkill = (id) => {
    const newSkill = [...skillField];
    const setSkill = newSkill.filter((skill, ) => skill.id !== id);
    console.log(setSkill);
    setSkillField(setSkill);
    //  console.log(skillField);
  };


  const hanldeCourseDelete= (id)=>{
    const courses = [...coursesField];
    const filteredCourses = courses.filter((course) => course.id !== id);
    setCoursesField(filteredCourses);
  }

const handleAddcourses = e=>{
  e.preventDefault()
  const form = e.target
  const coursesName1 = form.coursesName1.value
  const coursesInstitute1 = form.coursesInstitute1.value
  const CoursesDuration1 = form.CoursesDuration1.value
  const coursesYear1 = form.coursesYear1.value
const newdata ={
  id:uniqID,
  coursesName1,
  coursesInstitute1,
  CoursesDuration1,
  coursesYear1 

}
  let data = [...coursesField, newdata];
  setCoursesField(data)
  setUserData({...userData, coursesField})
  console.log(data)
form.reset()
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  console.log(userData);
  return (
    <div className="flex flex-col">
      <div className="text-center font-semibold text-xl my-2">
        <hr className="inline-block border-2 w-32" />
        <span className="px-10">skill</span>
        <hr className="inline-block border-2 w-32" />
      </div>
      <div className="my-5">
       <label className="font-semibold mb-2 text-lg inline-block">Add your Skill:</label>
        <br />
       <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-5">
       {skillField?.map((input, index) => {
          return (
            <div key={index} className="flex items-center justify-between pl-1 gap-3 mb-5 bg-slate-200 rounded-xl">
              <p>{input.skill}</p>

              <button
                onClick={() => removeSkill(input.id)}
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
        <form onSubmit={addSkills} className="text-center">
          <input
            name="skill"
            className="border-[#656565] border-2 p-2 mb-2 rounded-full mt-1  !w-full"
            placeholder="type your skill ..."
            onChange={(event) => setskillstate(event.target.value)}
          />

          <button
          type="submit"
            className="btn btn-primary border-none rounded-full px-8 mt-5  py-1"
         
          >
            Add Skill..
          </button>
        </form>
      </div>

        <div className="text-center font-semibold text-xl mt-2">
          <div className="mb-10">
          <hr className="inline-block border-2 w-32" />
          <span className="px-10">Courses</span>
          <hr className="inline-block border-2 w-32" />
          </div>
        <div className="text-left mb-2"><label className="font-semibold text-lg  inline-block">Add your Courses:</label></div>
        <div className="">
        {
          coursesField.map(course =>
            <div className="bg-slate-200 pb-2 rounded-xl mb-2">
              <div className="flex justify-end">
              <button
               onClick={()=>hanldeCourseDelete(course.id)}
                type="button"
                className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-8 w-8 group transition-all hover:bg-red-500 "
              >
                <FiTrash
                  className="text-red-500 group-hover:text-white transition-all"
                  size="16"
                />
              </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
              <p className="text-md font-normal text-start pl-2">name: <span className="font-normal">{course.coursesName1}</span></p>
              <p className="text-md font-normal text-start pl-2">ins: <span className="font-normal">{course.coursesInstitute1}</span> </p>
              <p className="text-md font-normal text-start pl-2">dura: <span className="font-normal">{course.CoursesDuration1}</span> </p>
              <p className="text-md font-normal text-start pl-2">year: <span className="font-normal">{course.coursesYear1}</span> </p>
              </div>
            
          </div>)
        }
        </div>
        
        </div>
      <form onSubmit={handleAddcourses}>
        <div>
      
              <div >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  <div>
                    <label htmlFor="" className="font-semibold ">
                      Courses Name
                    </label>
                    <br />
                    <input
                      type="text"
                      // onChange={handleChange}
                      // value={userData["coursesName1"] || ""}
                      name="coursesName1"
                      className="border-[#656565] border-2 p-1 rounded mt-1 w-full"
                      placeholder="type your courses Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="font-semibold ">
                      Institute / it name
                    </label>
                    <br />
                    <input
                      type="text"
                     
                      name="coursesInstitute1"
                    
                      className="border-[#656565] border-2 p-1 rounded mt-1 w-full"
                      placeholder="type your courses institute"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  <div>
                    <label htmlFor="" className="font-semibold ">
                      Duration-(months)
                    </label>
                    <br />
                    <input
                      type="number"
                   
                      name="CoursesDuration1"
                    
                      className="border-[#656565] border-2 p-1 rounded mt-1 w-full"
                      placeholder="type your Duration"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="font-semibold ">
                      Courses Year
                    </label>
                    <br />
                    <input
                      type="text"
                      // onChange={handleChange}
                      // value={userData["coursesYear1"] || ""}
                      name="coursesYear1"
                    
                     
                      className="border-[#656565] border-2 p-1 rounded mt-1 w-full"
                      placeholder="type your Location"
                    />
                  </div>
                </div>
              </div>

          <div className="text-center">
            <button
              className="btn btn-primary border-none rounded-full px-8 mt-5  py-1"
            type="submit"
            >
              Add Courses..
            </button>
          </div>
        </div>
        
      </form>
      <form>
        <div className="text-center font-semibold text-xl mt-8 mb-2">
          <hr className="inline-block border-2 w-32" />
          <span className="px-10">Experiance</span>
          <hr className="inline-block border-2 w-32" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <div>
            <label htmlFor="" className="font-semibold ">
              Company Name
            </label>
            <br />
            <input
              type="text"
              onChange={handleChange}
              value={userData["ExperianceCompanyName"] || ""}
              name="ExperianceCompanyName"
              className="border-[#656565] border-2 p-1 rounded mt-1 w-full"
              placeholder="type your Company Name"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold">
              Position
            </label>
            <br />
            <input
              type="text"
              onChange={handleChange}
              value={userData["ExperiancePosition"] || ""}
              name="ExperiancePosition"
              className="border-[#656565] border-2 p-1 rounded mt-1 w-full"
              placeholder="type your Position"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <div>
            <label htmlFor="" className="font-semibold ">
              Duration
            </label>
            <br />
            <input
              type="text"
              onChange={handleChange}
              value={userData["ExperienceDuration"] || ""}
              name="ExperienceDuration"
              className="border-[#656565] border-2 p-1 rounded mt-1 w-full"
              placeholder="type your Duration"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold ">
              Location
            </label>
            <br />
            <input
              type="text"
              onChange={handleChange}
              value={userData["ExperianceLocation"] || ""}
              name="ExperianceLocation"
              className="border-[#656565] border-2 p-1 rounded mt-1 w-full"
              placeholder="type your Location"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
