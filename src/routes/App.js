import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DashBoard from '../containers/DashBoard';
import Login from '../containers/LogIn';


const App =()=>{
    return(
    <BrowserRouter>
        <Routes>
            <Route  path = "/LogIn" element = {<Login/>}></Route>
            <Route path = "/Dashboard" element ={<DashBoard/>}></Route>
        </Routes>
    </BrowserRouter>  )  
}
export default App;