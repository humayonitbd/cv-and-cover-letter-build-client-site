import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from "../../../../asset/loginImage/login-image.webp";
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const SignIn = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = ({email, password})=>{
    console.log(email,password)
    login(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      reset();
      toast.success("Login Successfully!!");
      navigate(from, {replace: true})
    })
    .catch(err =>{
      toast.error(err.message)
    })
    
  }
    return (
        <div>
           <div className="hero py-10 min-h-screen bg-white">
  <div className="grid md:grid-cols-2 grid-cols-1 gap-10 lg:my-0 md:px-10 my-10">
    <div className="text-center">
      <img src={loginImg} className="w-full md:h-full" alt="" />
    </div>
    <div className="card w-full rounded-none bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
        <h2 className='text-3xl font-bold text-center my-5'>Login Here</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to="signIn" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-[#F56600] border-none text-lg">Login</button>
        </div>
        <div className='flex justify-between items-center my-10'>
            <hr  className='border-t-4 w-full '/> 
        <span className='px-5'>OR</span>
        <hr  className='border-t-4 w-full'/>
        </div>
        <div>
            <button className='btn btn-outline w-full border-none bg-[#F56600] text-lg text-white'>Google Loign</button>
        </div>
        <p className='text-center  mt-2 text-lg'>Are you new user? <Link to='/signUp' className='text-[#F56600]'>Register</Link></p>
      </form>
      
        
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;