"use client"
export const dynamic = "force-dynamic";

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Page =  ({ params }) => {
  const { id } = params;

  const [username, setusername] = useState("")

  const [users, setusers] = useState([])
  const getUsers = async () =>{
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/" + id);
    
    setusers(data);
    
    // console.log(data.username);
  }
  useEffect(() => {     //UseEffect calls our function automatically
    getUsers();
  }, [])

  return <>{JSON.stringify(users)}</>; //JSON obj to String
};

export default Page;
