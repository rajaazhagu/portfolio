import React from 'react'
import htmlc from './images/htmlc.jpeg'
import cssc from './images/cssc.jpeg'
import jsc from './images/jsc.jpeg'
import pythonc from './images/pythonc.jpeg'
import { useNavigate } from 'react-router-dom'
const Certificatesrequire = () => {
  const navigate=useNavigate()
  return (
    <div className='certificatesrequire' >
      <h1>My Certificates!!</h1>
      <h2 onClick={(()=>{navigate('/')})}>Home</h2>
      <div className='certificatesrequire1'>
       <img src={htmlc}/>
       <img src={cssc}/>
       <img src={jsc}/>
       <img src={pythonc}/>
      </div>
    </div>
  )
}

export default Certificatesrequire