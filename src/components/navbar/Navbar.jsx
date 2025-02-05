import '../navbar/navbar.css';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  
  };

  return (<>
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleClick}>Booking</span>
        <div className="navItem">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
        </div>
      </div>
    </div></>
  );
};
export default Navbar;