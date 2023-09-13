import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
// import { GiHamburgerMenu } from "react-icons/gi";

export default function TopBar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <a style={{ textDecoration: "none" }} href="/" className="topLeft title">
        BlogSpot
      </a>

      <div className={showMediaIcons ? "topCenter" : "mobile-menu"}>
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              {user && "WRITE"}
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>

      <div className="hamburger-menu">
        <a href="." onClick={() => setShowMediaIcons(!showMediaIcons)}>
          {/* <GiHamburgerMenu /> */}
        </a>
      </div>
    </div>
  );
}
