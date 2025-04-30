import React from 'react'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Start from './pages/start'
import ProtectedRoute from './pages/ProtectedRoute'

import {Routes, Route} from 'react-router-dom'
import About from './pages/components/About'
import Contact from './pages/components/Contact'
import Movie from './pages/Components/Movie'
import Sports from './pages/Components/Sports'
import Shopping from './pages/Components/Shopping'
import RegisterMovie from './pages/Components/MovieComponents/RegisterMovie'
import RegisterProduct from './pages/Components/ShoppingComponents/RegisterProduct'
import RegisterSport from './pages/Components/SportsComponents/RegisterSport'

const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Start/>} />
         <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element = {<ProtectedRoute>  <Home/> </ProtectedRoute>}/>
          <Route path='/about' element={ <ProtectedRoute> <About/> </ProtectedRoute>}/>
          <Route path='/contact' element={<ProtectedRoute> <Contact/> </ProtectedRoute>} />
          <Route path='/movie' element={<ProtectedRoute> <Movie/> </ProtectedRoute>} />
          <Route path='/sport' element={<ProtectedRoute> <Sports/> </ProtectedRoute>} />
          <Route path='/shopping' element={<ProtectedRoute> <Shopping/> </ProtectedRoute>} />
          <Route path='/registerMovie' element={<ProtectedRoute> <RegisterMovie/> </ProtectedRoute>} />
          <Route path='/registerProduct' element={<ProtectedRoute> <RegisterProduct/> </ProtectedRoute>} />
          <Route path="/registerSport" element={<ProtectedRoute> <RegisterSport/> </ProtectedRoute>}/>
       </Routes>
    </div>
  )
}

export default App
