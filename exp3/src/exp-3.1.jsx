import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './exp-3.1.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function Home(){
  return (<h1>Welcome to the Home Page!</h1>);
}
function About(){
  return (<h1>About Page</h1>);
}
function Contact(){
  return (<h1>Contact Page</h1>);
}

function App() {

  return (
    <BrowserRouter>
      <div className="top-btn-container">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
