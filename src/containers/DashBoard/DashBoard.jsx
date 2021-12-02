import React from 'react'
import AppContext from '../../context/AppContext';
import { useContext } from 'react';
import CardMember from '../../components/CardMember/CardMember';
import Header from '../../components/Header/Header';
import logo from '../../assets/images/logo.png'
import './style.css'
const DashBoard=()=>{
    const {state} = useContext(AppContext);
    const logoImg = logo;
    return(
    <div className ="dashboard">
        <Header/>
            <header className = "header">
            </header>
            <div className = "member-list">
            {state.map(developer =>
                (
                    <CardMember  key = {developer.name} developer = {developer} className = "card">
                    </CardMember>
                 ))}
            </div>
            <div className = "logo">
                <img src={logo} alt="logo" width= "500px" />
                <div className = "button">
                    <button type = "button">+</button>
                </div>
            </div>
        
      
         
    </div>)

}
export default DashBoard