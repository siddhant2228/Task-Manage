import React, { useState } from 'react'
import Cards from '../components/Homes/Cards'
import { IoAddCircleSharp } from 'react-icons/io5'
import InputData from '../components/Homes/InputData'

const dataa = [
  {
      title: "The Best Coding Channel",
      desc: " Heelloo from coding Ninja", 
      status:"Incomplete",
  },

  {
      title: "The Best Coooking Channel",
      desc: " Heelloo from cooking", 
      status:"Complete",
  },

  {
      title: "The Best Channel",
      desc: " Heelloo from Ninja", 
      status:"Incomplete",
  },
  {
      title: "The Best Movie Channel",
      desc: " Heelloo from Cinema", 
      status:"Incomplete",
  },
];

const Alltask = () => {

  const [data ,setData] = useState(dataa)

  const [title,setTitle] = useState("");

  const [description,setDescription] = useState("");

  const submitHandler =()=>{
    setData([...data,{title:title,desc:description,status:"Incomplete"}])
    console.log(title,description)
    setTitle("")
    setDescription("")
    setInputDiv("hidden")
  }

  const deleteHandle=(i)=>{
 
    console.log(i)

    const newData = data.filter((items,index)=>index!==i)

    setData(newData)


  }
  
   const [InputDiv, setInputDiv] =useState("hidden");
   const [home,setHome] = useState(true)
  return (
   <>
     <div>
    <div className=' w-full flex justify-end px-4 py-2  overflow-y-auto'>
    <button onClick={() => setInputDiv("fixed")}>
    <IoAddCircleSharp className='text-5xl text-gray-400 hover:text-gray-100 transition-all duration-300 ' />
    </button>
   

    </div>
     <Cards home={home} data={data} setInputDiv={setInputDiv} deleteHandle={deleteHandle} />
    </div>
    <InputData InputDiv={InputDiv} submitHandler={submitHandler} setInputDiv={setInputDiv} title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
   </>
  )
}

export default Alltask
