import React from 'react'
import AppContext from '../context/AppContext'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Login from '../containers/LogIn';
import useInitialState from '../hooks/useInitialState';
import DashBoard from '../containers/DashBoard/DashBoard';
import Gantt from '../containers/Gantt';


const App =()=>{
    const initialState = useInitialState()
    return(
    <AppContext.Provider value ={initialState}>
    <BrowserRouter>
        <Routes>
            <Route  path = "/" element = {<Login/>}/>
            <Route path = "/Dashboard" element ={<DashBoard/>}/>
            <Route path = "/Gantt" element ={<Gantt/>}/>
        </Routes>
    </BrowserRouter>
    </AppContext.Provider>  )  
}
export default App;