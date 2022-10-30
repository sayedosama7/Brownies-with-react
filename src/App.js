import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'
import Navbar from './Navbar'
import Gateux from './Gateux'
import Oriental from './Oriental'
import Bakery from './Bakery'


import "./App.css"


import { BrowserRouter , Routes , Route   } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Navbar />}  />
        <Route path='/Gateux' element={<Gateux />}  />
        <Route path='/Bakery' element={<Bakery />}  />
        <Route path='/Oriental' element={<Oriental />}  />
        <Route path='/Home' element={<Home />}  />
        <Route path='/Contact' element={<Contact />}  />
        <Route path='/About'  element={<About />}  />
        <Route path='/Footer' element={<Footer />}  />
      </Routes>


    </BrowserRouter>
  )
}

export default App