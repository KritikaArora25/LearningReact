import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from '@/Helper/Context';

const Header = (props) => {
  const user = useContext(MyContext)
  console.log(props.num);
  return (
    
    <div className='bg-gray-400 p-5'>
        Hey! I am Header<br></br>
        {user}
        <Nav num={props.num}/>
    </div>
  )
}

export default Header