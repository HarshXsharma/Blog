import { useContext, useState } from "react";
import "./login.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
;
  const [error, setError] = useState(false);
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: username,
        password: password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/");
    } catch (err) {
      setError(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit" disabled={isFetching}> 
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Wrong Credentials!</span>}
    </div>
  );
}

