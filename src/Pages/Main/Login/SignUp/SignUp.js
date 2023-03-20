import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from "../../../../asset/loginImage/login-image.webp";
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { usePostUsersMutation } from '../../../../features/users/usersApi';

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {createUser, userUpdateHandler} = useContext(AuthContext);
  const [postUser, {isLoading, isError}] = usePostUsersMutation();
  const navigate = useNavigate();
  const onSubmit = (data) =>{
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const confromPassword = data.confromPassword;
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image)
    
    if(password.length < 6){
      return toast.error('Your password must be 6 carecter!!');
  }
  if(password !== confromPassword){
    return toast.error('Your password do not match!!');
  }
  const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_API}`

  fetch(url,{
    method: "POST",
    body: formData,
  })
  .then(res => res.json())
  .then(data => {
    const userData = {
       img: data.data.display_url,
       name:name,
       email:email,
       password:password,
    }

    createUser(email, password)
    .then(result => {
      const user = result.user;
      userUpdateHandler(userData.name, userData.img)
      .then(()=>{
        console.log('update name and image')
      })
      .catch(err =>console.log(err))
      console.log(user)
      const users = {
        name: userData.name,
        email: userData.email,
        role: "user"
      }
      postUser(users)
      toast.success("Create account successfull!!")
      reset();
      navigate('/');
    })
    .catch(error =>console.log(error))
  })
  // console.log(formData, email);
  };
    return (
        <div>
           <div className="hero  min-h-screen bg-white">
  <div className="grid md:grid-cols-2 grid-cols-1 gap-10 lg:my-0 md:px-10 my-10">
    <div className="text-center">
      <img src={loginImg} className="w-full md:h-full" alt="" />
    </div>
    <div className="card w-full rounded-none bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
        <h2 className='text-3xl font-bold text-center my-5'>Register Here</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input {...register("name", { required: true })} type="text" placeholder="full name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confrom Password</span>
          </label>
          <input {...register("confromPassword", { required: true })} type="password" placeholder="Confrom Password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select image</span>
          </label>
          <input {...register("image", { required: true })} type="file" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#F56600] border-none text-lg">Register</button>
        </div>
        
        <p className='text-center  mt-2 text-lg'>Have you account? <Link to='/signIn' className='text-[#F56600]'>Login</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;