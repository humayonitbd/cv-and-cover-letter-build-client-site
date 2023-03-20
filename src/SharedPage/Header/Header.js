import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import logo from '../../asset/logo-img/logo.png';
import { toast } from 'react-hot-toast';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handlerLogout =()=>{
      logOut()
      .then(()=>{
        toast.success("LogOut successfully!!")
      })
      .then((err) =>console.log(err))
    }

    return (
        <div className='bg-white mb-1'>
           <div className="navbar w-11/12 mx-auto ">
  <div className="flex-1 ">
    <Link to='/' className="font-bold text-white  text-xl"><img src={logo} className="w-20" alt="" /></Link>
  </div>
  <div className="">
    <ul className=' lg:flex hidden lg:block mr-5 text-lg'>
        <li className='ml-8 text-black text-md hover:text-[#F56600] uppercase'><Link to='/home'>Home</Link></li>
        <li className='ml-8 text-black text-md hover:text-[#F56600] uppercase'><Link to='/cv-builder'>CV BUILDER</Link></li>
        <li className='ml-8 text-black text-md hover:text-[#F56600] uppercase'><Link to='/coverLetter'>COVER LETTER</Link></li>
        <li className='ml-8 text-black text-md hover:text-[#F56600] uppercase'><Link to='/about'>Aboute</Link></li>
        <li className='ml-8 text-black text-md hover:text-[#F56600] uppercase'><Link to='/contact'>Contact</Link></li>
        {user?.email && <li className='ml-8 text-md text-[#F56600] uppercase'><Link to='/dashboard'>Dashboard</Link></li>}
        {user?.email ? <><li onClick={handlerLogout} className='ml-8 text-black uppercase text-md hover:text-[#F56600]'><Link to='/signIn'>Logout</Link></li></>: <><li className='ml-8 text-black uppercase text-md hover:text-[#F56600]'><Link to='/signIn'>Login</Link></li></>
        }
    </ul>
    
    
    {
      user?.email ? <><div className='ml-12 hidden lg:block'>
      <span ><img src={user?.photoURL} className='w-10 h-10 cursor-pointer' alt="" /></span>
   </div></>:<><div className='ml-20 hidden lg:block'>
      <span ><FaUserCircle  className='h-6 w-6 text-[#F56600]'/></span>
   </div></>
    }

    <div className="dropdown block lg:hidden dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">
        <div className="rounded-full">
          <FaBars className='h-6 w-6 text-black'/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
      <li className='ml-10 text-black text-md hover:text-[#F56600] uppercase'><Link to='/home'>Home</Link></li>
        <li className='ml-10 text-black text-md hover:text-[#F56600] uppercase'><Link to='/cv-builder'>CV BUILDER</Link></li>
        <li className='ml-10 text-black text-md hover:text-[#F56600] uppercase'><Link to='/coverLetter'>COVER LETTER</Link></li>
        <li className='ml-10 text-black text-md hover:text-[#F56600] uppercase'><Link to='/about'>Aboute</Link></li>
        <li className='ml-10 text-black text-md hover:text-[#F56600] uppercase'><Link to='/contact'>Contact</Link></li>
        {user?.email ? <><li onClick={handlerLogout} className='ml-10 text-black uppercase text-md hover:text-[#F56600]'><Link to='/signIn'>Logout</Link></li></>: <><li className='ml-10 text-black uppercase text-md hover:text-[#F56600]'><Link to='/signIn'>Login</Link></li></>
        }
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;