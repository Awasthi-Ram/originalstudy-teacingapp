import "./navbar.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate=useNavigate()
  // console.log(currentUser);
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft" onClick={()=>navigate('/')}>
          <span className="logo">TechGeek</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight" >
          <img
            onClick={()=>navigate('/profile')}
            className="profileImg"
            src={
              currentUser.photoURL
                ? currentUser.photoURL
                : "/assets/DefaultProfile.jpg"
            }
            alt=""
          />
          <span className="navbarName">{currentUser.displayName}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
