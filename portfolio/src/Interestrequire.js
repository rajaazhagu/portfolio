import React from 'react'
import resume from './images/resume.png'
import { useNavigate } from 'react-router-dom'
const Interestrequire = () => {
  const navigate=useNavigate()
  return (
    <div className='certificatesrequire' >
    <h1>My resume!!</h1>
    <h2 onClick={(()=>{navigate('/')})}>Home</h2>
    <div className='certificatesrequire1'>
     <img src={resume}/>
   
    </div>
  </div>
  )
}

export default Interestrequire