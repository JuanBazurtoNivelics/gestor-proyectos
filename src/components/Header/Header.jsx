import React from 'react'
import './styles.css'
import logo from '../../assets/images/nivelics.svg'
const Header = ()=>{
    const logoImg  = logo; 
    return(
    <header>
        <div className = "wrapper">
			<nav>
				<div className = "logo">
                    <img src = {logoImg} width = "200px" alt="logo"></img>
                </div>
				<a className = "members" href="./">Integrantes</a>
				<a href="./">Log Outtt</a>
			</nav>
                    </div>
        </header>
    )
}

export default Header;