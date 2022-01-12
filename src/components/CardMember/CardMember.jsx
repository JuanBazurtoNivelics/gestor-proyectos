import "./style.css";
import profile from "../../assets/images/profile.png";
import { Link } from "react-router-dom";

export const CardMember = ({ developer }) => {
  const profileImage = profile;
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
          <Link to={`/Gantt/${developer.name}` }className = "Link">
            <li>{developer.name}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default CardMember;
