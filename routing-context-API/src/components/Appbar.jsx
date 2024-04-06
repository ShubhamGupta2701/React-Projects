import React from 'react'
import {useNavigate} from 'react-router-dom';
const Appbar = () => {
    const navigate = useNavigate();
  return (
    <div className='header-component' style={{border:"2px solid black",padding:"10px",margin:"15px"}}>Header Component 
        <button style={{marginLeft:"100px", padding:"10px", paddingLeft:"50px", paddingRight:"50px"}} onClick={()=>{navigate('/')}}>Home</button>
        <button style={{marginLeft:"100px", padding:"10px", paddingLeft:"50px", paddingRight:"50px"}} onClick={()=>{navigate('/dashboard')}}>Dashboard</button>
        <button style={{marginLeft:"100px", padding:"10px", paddingLeft:"50px", paddingRight:"50px"}} onClick={{}}>Messages</button>
        <button style={{marginLeft:"100px", padding:"10px", paddingLeft:"50px", paddingRight:"50px"}} onClick={{}}>About Us</button>
        <button style={{marginLeft:"100px", padding:"10px", paddingLeft:"50px", paddingRight:"50px"}} onClick={()=>{navigate('/login')}}>Login</button>
    </div>
  )
}

export default Appbar