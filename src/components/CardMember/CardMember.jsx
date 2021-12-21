import React from 'react'
import './style.css'
import profile  from '../../assets/images/profile.png'
import { Link} from 'react-router-dom'
import { useContext,useEffect } from 'react'
import userContext from '../../context/userContext'
export const CardMember = ({developer})=>{
    const profileImage = profile;
    const {getProfile} = useContext(userContext)
    useEffect(() => {
        getProfile(developer)
    }, [developer])
    
    return (
        <div className = "card-member"   >
            <div className = "img" >
                 <img src={profileImage} width = "100px" height = "100px" alt = "Imagen perfil"></img>
            </div>
            <div className = "data" >
                <ul>
                    <Link to = {`/Gantt`}>
                    <li>{developer.name}</li>
                    <li>{developer.phone}</li>
                     </Link>

                </ul>
            </div>
        </div>
                

    )
}

export default CardMember;