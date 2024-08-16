import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Skills from './Pages/Skills'
import AboutMe from './Pages/AboutMe'
import Projects from './Pages/Projects'


function App() {
  
  
  return (
    <>
    
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </Router>
    
    </>
  )
}

export default App
