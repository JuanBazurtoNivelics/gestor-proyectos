import React from 'react'
import AppContext from '../context/AppContext'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Login from '../containers/LogIn';
import useInitialState from '../hooks/useInitialState';
import DashBoard from '../containers/DashBoard/DashBoard';


const App =()=>{
    const initialState = useInitialState()
    return(
    <AppContext.Provider value ={initialState}>
    <BrowserRouter>
        <Routes>
            <Route  path = "/LogIn" element = {<Login/>}></Route>
            <Route path = "/Dashboard" element ={<DashBoard/>}></Route>
        </Routes>
    </BrowserRouter>
    </AppContext.Provider>  )  
}
export default App;