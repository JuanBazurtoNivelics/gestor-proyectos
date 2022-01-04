import React, { useContext, useEffect } from "react";
import "./style.css";
import profile from "../../assets/images/profile.png";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

export const CardMember = ({ developer }) => {
  const profileImage = profile;
  const { getProfile, currentProjects } = useContext(UserContext);
  useEffect(() => {
    getProfile(developer.name);
  });
  const handleUpdateCurrentProjects = async () => {
    console.log(currentProjects, "Proyectos Card Member");
  };
  return (
    <div className="card-member">
      <div className="img">
        <img
          src={profileImage}
          width="100px"
          height="100px"
          alt="Imagen perfil"
        ></img>
      </div>
      <div className="data">
        <ul>
          <Link
            to={`/Gantt/${developer.name}`}
            onClick={handleUpdateCurrentProjects}
          >
            <li>{developer.name}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default CardMember;
