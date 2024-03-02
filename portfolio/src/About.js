import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router';
const About = () => {
    const Navigate=useNavigate();
    const Exit=(()=>{
        Navigate('/')
    })
  return (
    <div className='about'>
     <RxCross1  onClick={(()=>Exit())}/>
     <h1>About me!</h1>
     <p>I am Azhaguraja, currently immersed in my studies at Kumaraguru College of Technology. Pursuing ECE, I find joy in exploring in my field. Beyond the classroom, I actively engage in HAM club, gaining hands-on experience through many projects. Looking ahead, I am eager to apply my knowledge to MERN stack.I am on a journey of growth, ready for the challenges and opportunities that lie ahead.</p>
    </div>
  )
}

export default About