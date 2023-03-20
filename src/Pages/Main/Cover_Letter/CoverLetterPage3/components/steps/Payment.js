import { useStepperContext } from "../../contexts/StepperContext";

export default function Payment() {
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
        Body Details
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <textarea 
        onChange={handleChange}
        value={userData["body"] || ""}
        name="body"
        className="textarea text-gray-800 textarea-bordered w-full h-60" placeholder="type your cover letter body......"
        ></textarea>
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Body Details example
        </div>
        <div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <div>
            <h5 className="font-bold">Ready to Succeed :</h5>
            <p>During my studies and early work experience, I acquired a valuable understanding of the [Type] industry and developed essential skills in communication, motivation and leadership. I have worked hard to prepare for this role and am excited to build a long and successful career in the field.</p>
          </div>
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <div>
            <h5 className="font-bold">Passion for Industry :</h5>
            <p>I have always had a passion for working in the [Industry] field; during my previous position as Web Developer, I quickly developed skills in communication and feedback from my managers backs this up. In addition, the work experience I gained has enabled me to build and practice skills in essential areas such as motivation and leadership.I have an excellent work ethic, am attentive to detail and am a consummate professional. I believe my skills and experience will allow me to contribute substantially to your team and goals.</p>
          </div>
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <div>
            <h5 className="font-bold">Ambitious Manager :</h5>
            <p>I am an ambitious professional adept at running efficient, profitable [Type] teams focused on client satisfaction. During my previous role as Web Developer, employers praised me for my expertise in communication, motivation and leadership. Each year, my annual reviews have highlighted my ability to handle any challenge with ease.I enjoy mentoring junior staff and taking the time to help my team understand innovations in our industry that give us an advantage over our competitors. I believe my enthusiasm and industry experience will translate well to this role.</p>
          </div>
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <div>
            <h5 className="font-bold">Friend Referral :</h5>
            <p>[Friend Name] told me about your opening for a new Sales Assistant, and they suggested I apply. So I would like to present my work history and background for your review.</p>
          </div>
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <div>
            <h5 className="font-bold">Experienced :</h5>
            <p>The experience and skills I bring have fully prepared me to succeed in this position. I have a solid knowledge of the industry and have demonstrated competencies in communication, motivation and leadership.I firmly believe that my background is an excellent match for your business, and I could confidently contribute to your team.</p>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}