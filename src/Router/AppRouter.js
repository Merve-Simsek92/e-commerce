import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import Main from "../Pages/Home"
import Navbar from '../Components/Navbar'
import ShoppingCard from '../Pages/ShoppingCard'
import Error from '../Pages/Error'

const AppRouter = () => {
  return (
 <Router>
    <Navbar/>
<Routes>
    <Route path="/" element={<Main/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/shoppingCard" element={<ShoppingCard/>}/>
    <Route path="*" element={<Error/>}/>
</Routes>



 </Router>
    

  )
}

export default AppRouter