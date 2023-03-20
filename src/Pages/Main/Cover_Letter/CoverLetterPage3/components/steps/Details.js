import { useStepperContext } from "../../contexts/StepperContext";

export default function Details() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  console.log(userData)
  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          your letter opener
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <textarea 
        onChange={handleChange}
        value={userData["opener"] || ""}
        name="opener"
        className="textarea text-gray-800 textarea-bordered w-full h-32" placeholder="type your cover letter opernar.."
        ></textarea>
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Opernar example
        </div>
        <div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <div>
            <h5 className="font-bold">Friend Referral :</h5>
            <p>[Friend Name] told me about your opening for a new Sales Assistant, and they suggested I apply. So I would like to present my work history and background for your review.</p>
          </div>
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <div>
            <h5 className="font-bold">Strong Candidate :</h5>
            <p>I am contacting you to apply for the Web Developer role at [Target Company]. After reviewing the job description, I believe that my background makes me a strong candidate for this position.</p>
          </div>
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <div>
            <h5 className="font-bold">Ready to Succeed :</h5>
            <p>It is with great pleasure that I submit my application to be considered for Web Developer with [Target Company]. I have been seeking a position like this and believe I possess all the experience and skills to make this role a success.</p>
          </div>
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <div>
            <h5 className="font-bold">Expression of Interest :</h5>
            <p>I want to express my interest in the Web Developer position. I am a self-motivated and progress-driven professional with an extensive background in this industry. I believe I have experiences and skills that will bring value to [Target Company].</p>
          </div>
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <div>
            <h5 className="font-bold">Track Record of Success :</h5>
            <p>I want to be considered for the Web Developer at [Target Company]. My track record of successfully delivering quality work on time makes me a good fit for this role.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}