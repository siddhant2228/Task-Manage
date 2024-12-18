import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import { IoAddCircleSharp } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';

const Cards = ({home ,data, setInputDiv,deleteHandle}) => {

    
  return <div className='grid grid-cols-4 gap-4 p-4'>
    {data &&
    data.map((items, i) => (
        <div key={i} className='flex flex-col justify-between bg-gray-700 rounded-xl p-4'>
        <div>
        <h3 className='text-xl font-semibold'>{items.title}</h3>
        <p className='text-gray-300 my-2'>{items.desc}</p>
       </div>
        <div className='mt-4 w-full flex items-center'>

        <button className={`${ items.status === "Incomplete" ? "bg-red-500" : "bg-green-600" } p-2 rounded w-3/6`}>
        {items.status}
        
        </button>

        

          <div className='flex flex-col justify-between bg-gray-700 rounded-xl p-4 '> 

          

          <button >
          <FaEdit />
          </button>

          <button
          onClick={()=>deleteHandle(i)}
          >
          <MdDelete />
          </button>
          </div>
        </div>
        </div>
       
    ))}
    { home && (
    <button className='flex flex-col justify-center items-center bg-gray-700 rounded-xl p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300' onClick={()=>setInputDiv("fixed") }>
    <IoAddCircleSharp className='text-5xl'/>
     <h2 className='text-2xl mt-4'>Add Task</h2>
  
    </button>
    )}
  </div>

};

export default Cards;
