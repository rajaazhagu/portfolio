import React from 'react'
import project1 from './images/projec1.png'
import project2 from './images/project2.png'
import project3 from './images/project3.png'

import { useNavigate } from 'react-router-dom'
const Projectsrequire = () => {
  const navigate=useNavigate()
  return (
    <div className='certificatesrequire' >
      <h1>My projects!!</h1>
      <h2 onClick={(()=>{navigate('/')})}>Home</h2>
      <div className='certificatesrequire1'>
       <img src={project1}/>
       <img src={project2}/>
       <img src={project3}/>
      </div>
    </div>
  )
}

export default Projectsrequire