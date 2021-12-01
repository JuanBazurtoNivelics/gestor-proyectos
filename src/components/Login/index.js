import React from "react";
import "./Login.css";

function Login () {

  const [user, setUser] = React.useState({
    email: "",
    password: ""
  });

    const onChange = (event) => {
        setUser({
          ...user,
          [event.target.name]: event.target.value,
        });
      };
    
      const login = () => {
        console.log(user)
      };
    return (
        <div className="login">
          <h1>Welcome</h1>
          <input
            type="text"
            placeholder="Username"
            name="email"
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={onChange}
          />
          <a href="/">Forgot Password</a>
          <button onClick={login}>Login</button>
        </div>
      );
  }

export default Login;
