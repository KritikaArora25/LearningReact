"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import { useContext } from 'react'
import { MyContext } from '@/Helper/Context'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const page = () => {
  const notify = () =>{
    toast.success('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
  }
  const user = useContext(MyContext)
  console.log(user)
  
  const [num, setnum] = useState(10)
  const [username, setusername] = useState("")

  const [users, setusers] = useState([])
  const getUsers = async () =>{
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    setusers(data)
    
    console.log(data);
  }
  useEffect(() => {     //UseEffect calls our function automatically
    getUsers();
  }, [])
  
  return (
   
    <>
    <h1 className='font-bold text-4xl mb-7 m-7'>This is Home page</h1>
    <form className='m-7'>
      <h1 className='mb-1 text-xl text-gray-750 '>Enter Your name : </h1>
      <input
          type="text"
          placeholder="Type something..."
          className="border border-gray-400 p-2 rounded-md text-black bg-white"
          value={username}
          onChange={(e)=>{
            setusername(e.target.value);  //2-way Binding
          }}
        />
    </form>
    <div className='m-7'>
      
      <p className='mb-2'>Wanna Switch to Contacts? Click below!</p>
      {/* static routing */}
      <a className='font-medium bg-gray-100 border-1 rounded p-1 m-2' href='/Contact'>Contacts</a> 
      
      {/* API Calling(fetch API / Axios) */}
      <h1 className='mt-7'>API Calling(fetch API / Axios)</h1>
      <button onClick={getUsers} className='bg-gray-500 text-white rounded-lg px-3 py-2 border-2 font-medium m-1'>Get Data</button>
      <div className='bg-slate-200 p-8 mt-5'>
          <ul>
            {users.map((e, i)=>{
            return <li key={i}>{e.username} --- <a href={`/${e.id}`}>Explore</a></li> //dynamic routing
          })}
          </ul>
      </div>
    </div>
    
    <Header num={num}/>
    <div>{user}</div>


    <div>
      <button onClick={notify} className='bg-gray-600 rounded-lg border'>Login</button>
      <ToastContainer/>
    </div>
    </>
  )
}

export default page