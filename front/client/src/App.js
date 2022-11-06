import React from 'react'
import { Home, About, Contact } from './pages'
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div>
        <Nav />
        
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App