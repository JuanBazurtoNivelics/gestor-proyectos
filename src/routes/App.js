import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from '../containers/LogIn';


const App =()=>{
    <BrowserRouter>
        <Routes>
            <Route  path = "/LogIn" element = {<Login/>}></Route>
            
        </Routes>
    </BrowserRouter>    
}
export default App;