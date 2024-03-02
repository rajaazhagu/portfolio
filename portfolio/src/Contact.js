import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { RxCross1 } from "react-icons/rx";
import axios from 'axios'
const Contact = () => {
  const[name,setname]=useState('')
  const[number,setnumber]=useState('')
  const[gmail,setgmail]=useState('')
    const Navigate=useNavigate();
    const Exit=(()=>{
        Navigate('/')
    })
    const handleSubmit=((e)=>{
       e.preventDefault()
       try{
        axios.post('https://portfolio-hwfy.onrender.com/app/user',{name,number,gmail})
        .then((res)=>{
            if (res.data==='posted'){
              alert('I will reach through you with these details')
            }
            else{
              alert('not posted')
            }
            setname('')
            setgmail('')
            setnumber('')
            Navigate('/')
        })
       }
       catch{
         console.log('error')
       }
    })
  return (
    <div className='contact'>
      <h1>Contact me!!</h1>
    <div className='about'>
     <RxCross1  onClick={(()=>Exit())}/>
     <form onSubmit={((e)=>handleSubmit(e))}>
          <label htmlFor='name'>Username</label>
          <input type='text'
                placeholder='Name'
                required
                id='name'
                value={name}
                onChange={((e)=>setname(e.target.value))}/>

            <label htmlFor='number'>Phone</label>
            <input type='tel'
                  placeholder='Phone number'
                  required
                  id='number'
                  value={number}
                onChange={((e)=>setnumber(e.target.value))}/>

          <label htmlFor='gmail'>Gmail</label>
          <input type='gmail'
                placeholder='gmail'
                required
                id='gmail'
                value={gmail}
                onChange={((e)=>setgmail(e.target.value))}/>

        <button type='submit'>submit</button>
     </form>
    </div>
    </div>
  )
  
}

export default Contact