import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate =useNavigate();
  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const submitHandler=async(e)=>{
    e.preventDefault();
    console.log(email,password)
    // try {
    //     const data = await fetch(`http://localhost:4000/api/v1/login`,{
    //         method:"POST",
    //         body:JSON.stringify({email:email,password:password}),
    //         headers:{
    //             'Content-Type': 'application/json',
    //         }
    //     })

    //     const response = await data.json();

        
    //     if(!response.success){
    //         alert(response.message);
    //         return
    //     }
    //     console.log(response)
    // } catch (error) {
    //     alert("someThing went wrong")
    // }
    navigate('/home')

}


  return (
    <div className=" h-[98vh] flex items-center justify-center ">
    <div className='p-4 w-2/6 rounded bg-gray-800'>
    <div className='text-2xl font-semibold'>
        Login
    </div>

    <input
    type="username"
    placeholder='username'
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    className=' bg-gray-700 px-3 py-2 my-3 w-full rounded '
    name="email"
     />

      <input
    type="password"
    placeholder='password'
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    className=' bg-gray-700 px-3 py-2 my-3 w-full rounded '
    name="password"
     />
    
    <div className='w-full flex items-center justify-between'>
    <button 
    onClick={submitHandler}
    className='bg-blue-400 font-semibold text-black px-3 py-2 rounded'>
   Login
    </button> 
    <Link to="/Signup"className='text-gray-400 hover:text-gray-200'>Not having an Account? Signup here</Link>
    </div>

    </div>
      
    </div>
  )
}

export default Login
