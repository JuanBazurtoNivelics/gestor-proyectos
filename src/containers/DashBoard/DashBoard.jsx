import React, { useState } from 'react'
import AppContext from '../../context/AppContext';
import { useContext } from 'react';
import CardMember from '../../components/CardMember/CardMember';
import Header from '../../components/Header/Header';
import logo from '../../assets/images/logo.png'
import './style.css'
import FormModal from '../../components/FormModal/FormModal';
const DashBoard=()=>{
    const {state} = useContext(AppContext);
    const [modalState,changeState] = useState(false);
    return(
    <div className ="dashboard">
        <Header/>
            <header className = "header">
            </header>
            <FormModal
                modalState = {modalState}
                changeState = {changeState}
            >
                <form action="">
                    <input  type="text" name = "Name"  placeholder="Name" />
			        <input type="email"name = "Email" placeholder="Email" />
			        <input type="text"name = "Telefono" placeholder="Telefono" />
                    <input type="text"name = "Cargo" placeholder="Cargo" />
			        <input type="text"name = "Area" placeholder="Area" />

                    <input className = "input-button" type="submit" value = "Registrar" />
                </form>

            </FormModal>


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