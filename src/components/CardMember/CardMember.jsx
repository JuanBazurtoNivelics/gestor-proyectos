import React from 'react'
import './style.css'
import profile  from '../../assets/images/profile.png'
import Gantt from '../../components/Gantt'

export const CardMember = ({developer})=>{
    const profileImage = profile;
    const showGarphic = ()=>{
        return <Gantt/>
    }   
    return (
        <div className = "card-member" onClick = {showGarphic}  >
            <div className = "img" >
                 <img src={profileImage} width = "100px" height = "100px" alt = "Imagen perfil"></img>
            </div>
            <div className = "data" >
                <ul>
                    <li>{developer.name}</li>
                    <li>{developer.phone}</li>

                </ul>
            </div>
        </div>
    )
}

export default CardMember;