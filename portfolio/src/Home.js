import React from 'react'
import Skills from './Skills'
import Certificates from './Certificates'
import Projects from './Projects'
import Interest from './Interest'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <div className='para'>
       <Link to='/about'> <p>About</p></Link>
        <Link to='/contact'><p>Contact</p></Link>
        </div>
    <div>
        <Skills/>
        <Certificates/>
        <Projects/>
        <Interest/>
   </div>
        
       </div>
  )
}

export default Home