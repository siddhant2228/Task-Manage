import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const inputData = ({InputDiv,submitHandler,setInputDiv,title,setTitle,description,setDescription}) => {
  return (
    <>
      <div className={`${InputDiv} top-0 left-0 bg-gray-800 opacity-70 h-screen w-full`}>

      </div>
      <div 
      className={`${InputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
      
      <div className=" w-2/6 bg-gray-900 p-4 rounded ">
      <div className='flex justify-end'>
      <button className="text-2xl" onClick={()=> setInputDiv("hidden")}>
      <RxCross2 />
      </button>
      

      </div>
      <input 
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      type ="text"
      placeholder='Title'
      name="title"
      className='px-3 py-2 rounded w-full bg-gray-700 font-semibold my-3'

      />

      <textarea 
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      name="desc"
      cols="30"
      rows="10"
      placeholder="Description..."
      className="px-3 py-2 rounded w-full bg-gray-700 my-3"
      ></textarea>
       <button
       onClick={submitHandler}
       className='px-3 py-2 bg-blue-400 rounded text-black text-xl'>Submit
       </button>
      </div>
       </div>
    </>
  )
}

export default inputData
