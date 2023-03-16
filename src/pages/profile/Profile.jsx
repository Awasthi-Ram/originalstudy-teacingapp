import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import './Profile.css'

function Profile()
{
  const { dispatch } = useContext(AuthContext);

    const { currentUser} = useContext(AuthContext);
    const navigator=useNavigate()
    return<>
    <Navbar/>
    <div className="profile">
        <div className="field ">
            <span className="field-key">Firstname</span>
            <span className="field-value">{currentUser.displayName.split(" ")[0]}</span>
        </div>
        <div className="field">
            <span className="field-key">Lastname </span>
            <span className="field-value">{currentUser.displayName.split(" ")[1]}</span>
        </div>
        <div className="field">
            <span className="field-key">Email </span>
            <span className="field-value">{currentUser.email}</span>
        </div>
        <button 
            onClick={handleLogout}
            className="logout-btn">
            Logout
        </button>
    </div>
    </>
    function handleLogout()
    {
        dispatch({ type: "LOGOUT" });
        navigator('/')
    }
}
export default Profile