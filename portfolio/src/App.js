import profileImage from './images/profileimage.jpeg'
import './App.css';
import Home from './Home';
import { Routes,Route} from 'react-router-dom'
import Certificatesrequire from './Certificatesrequire'
import Skillsrequire from './Skillsrequire'
import Projectsrequire from './Projectsrequire';
import Contact from './Contact';
import About from './About';
import Interestrequire from './Interestrequire';
import link from './images/link.png'
import Astronaut from './images/Astronaut.png'
function App() {
 
  return (
    <div className="App">
     <div className='profileImage'>
     <img src={profileImage} alt='profileImage'/>
     </div>
     <h1>AZHAGURAJA R</h1>
     <h2>MERN stack developer</h2>
     <div className='self'>
      <a href='https://www.linkedin.com/in/azhaguraja-r-48232723a/'><img className='link' src={link}/></a>
     </div>
     <img src={Astronaut}/>
     <Routes>
           <Route path='/' element={<Home/>}/>
          <Route path='/skills' element={ <Skillsrequire/>} />
          <Route path='/certificates' element={  <Certificatesrequire/>} />
          <Route path='/projects' element={  <Projectsrequire/>} />
          <Route path='/interest' element={  <Interestrequire/>} />
          <Route path='/about' element={  <About/>} />
          <Route path='/contact' element={  <Contact/>} />
       
       </Routes>
    </div>
  );
}

export default App;
