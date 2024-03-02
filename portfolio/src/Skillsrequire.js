import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router';
import microcontroller from './images/microcontroller.jpeg'
import microprocessor from './images/machine.jpeg'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/react.webp'
import node from './images/node.png'
import express from './images/express.png'
import mongo from './images/mongo.png'
import python from './images/python.png'
import c from './images/c.png'
import ML from './images/ML.jpeg'
import blender from './images/blender.jpeg'
const Skillsrequire = () => {
  const skills=[{img:microcontroller,topic:'digital electronics'},{img:microprocessor,topic:'machine learning'},{img:html,topic:'HTML'},{img:css,topic:'CSS'},{img:js,topic:'Java Script'}]
  const skills1=[{img:react,topic:'React JS'},{img:node,topic:'Node JS'},{img:express,topic:'Express.JS'},{img:mongo,topic:'Mongo DB'},{img:python,topic:'Python'}]
  const skills2=[{img:ML,topic:'Machine Learning'},{img:c,topic:'C programming'},{img:blender,topic:'blender'}]
  const Navigate=useNavigate();
  const Exit=(()=>{
      Navigate('/')
  })
  return (
    <div className='skillsrequire'>
     <h1>My skills!!</h1>
     <RxCross1  onClick={(()=>Exit())}/>
     <div className='skillsrequire1'>
      {skills.map((single)=>
      <div className='images'>
      <img src={single.img}/>
      <p>{single.topic}</p>
      </div>
      )}
      {skills1.map((single)=>
      <div className='images1'>
      <img src={single.img}/>
      <p>{single.topic}</p>
      </div>
      )}
      {skills2.map((single)=>
      <div className='images2'>
      <img src={single.img}/>
      <p>{single.topic}</p>
      </div>
      )}
     </div>
    </div>
  )
}

export default Skillsrequire