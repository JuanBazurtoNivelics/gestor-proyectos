import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from '../containers/LogIn';
import DashBoard from '../containers/DashBoard/DashBoard';
import Gantt from '../containers/Gantt';
import UserState from '../context/UserState';


const App =()=>{
    return(
        <BrowserRouter>
    <UserState>
        <Routes>
            <Route  path = "/" element = {<Login/>}/>
            <Route  path = "/Dashboard" element ={<DashBoard/>}/>
            <Route  path = "/Gantt/:id" element ={<Gantt/>}/>

        </Routes>
    </UserState>
    </BrowserRouter>
    )
}
export default App;