import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate =useNavigate();

  const [userName,setUserName] =useState("");

  const [email,setEmail] = useState("")

  const [password,setPassword] = useState("")


  const submitHandler =async(e)=>{
    e.preventDefault();
    console.log(userName,email,password)
    //  try {
    //             const data = await fetch(`http://localhost:4000/api/v1/signUp`,{
    //                 method:"POST",
    //                 body:JSON.stringify({userName,email:email,password:password}),
    //                 headers:{
    //                     'Content-Type': 'application/json',
    //                 }
    //             })
    
    //             const response = await data.json();

    //             if(!response.success){
    //                 alert(response.message);
    //                 return
    //             }

             
    //             console.log(response)
    //         } catch (error) {
    //             alert("someThing went wrong")
    //         }
    navigate('/login')

}




  return (
    <div className=" h-[98vh] flex items-center justify-center ">
    <div className='p-4 w-2/6 rounded bg-gray-800'>
    <div className='text-2xl font-semibold'>
        Signup
    </div>

    <input
    type="username"
    placeholder='username'
    value={userName}
    onChange={(e)=>setUserName(e.target.value)}
    className=' bg-gray-700 px-3 py-2 my-3 w-full rounded '
    name="username"
     />
      <input
    type="email"
    placeholder='email'
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    className=' bg-gray-700 px-3 py-2 my-3 w-full rounded '
    name="xyz@gmail.com"
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
     Signup
    </button> 
    <Link to="/login"className='text-gray-400 hover:text-gray-200'>Already having an Account? Login here!</Link>
    </div>

    


    </div>
      
    </div>
  )
}

export default Signup
