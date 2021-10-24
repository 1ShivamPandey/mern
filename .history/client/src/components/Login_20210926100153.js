import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../App";
import { NavLink } from 'react-router-dom'
import styles from "../css/Login.css"
import astralshops from "../images/astralshops.jpg"

export const Login = () => {
  document.body.style = 'background: black;';

  const { state, dispatch } = useContext(UserContext);
 
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("./signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login successfull");
      history.push("/");
    }
  };
  
  return (
    <>
      <div className="container">
        <form method="POST" id="register-form">
          <div>
            <div style={{textAlign:"center"}}> 
            <img height="100px"  src={astralshops}></img>
            </div>
            <div  className="topspace"  style={{textAlign:"center"}}>
            <input className="inputbox"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              required="true"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            </div>

            <div style={{textAlign:"center"}} className="topspace" >
            <input className="inputbox"
              type="text"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
              required="true"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            </div>
          </div>

          <div style={{textAlign:"center"}} className="topspace">
            <input className="loginbtn"
              type="submit"
              name="signin"
              id="signin"
              value="Log In"
              onClick={loginUser}
            />
          </div>
        </form>
        <hr style={{backgroundColor:"white"}}></hr>
<div style={{textAlign:"center"}}>
        <NavLink style={{textDecoration:"none"}}  to="">Forgot password ?</NavLink>
        <NavLink style={{textDecoration:"none" }} to="/"> Sign up </NavLink>
        </div>
        <hr style={{backgroundColor:"white"}}></hr>
      </div>
    
    </>
  );
};

export default Login;
// const styles ={
//   body : {
//     background-color: black;
//   },
  
//   .container : {
//     width: 400px;
//     height: 400px;
//     border-radius: 10px;
//     margin-top: 150px;
//     padding-top: 50px;
//     padding-bottom: 50px;
//     background-color: black;
//     /* box-shadow: 0 4px 8px 0 rgba(136, 126, 126),0 6px 20px 0 rgb(136, 126, 126); */
//     box-shadow: 0 4px 8px 0 rgb(139, 138, 138),0 6px 20px 0 rgb(139, 131, 131);
//     /*box-shadow: 0 4px 8px 0 rgba(241, 237, 237, 0.753), 0 6px 20px 0 rgba(255, 255, 255, 0.959);*/
//   }
//   ,
//   .registercontainer {
//     width: 400px;
//     height: 600px;
//     border-radius: 10px;
//     margin-top: 60px;
//     margin-left: 565px;
//     padding-top: 10px;
//     padding-bottom: 50px;
//     background-color: black;
//     /* box-shadow: 0 4px 8px 0 rgba(136, 126, 126),0 6px 20px 0 rgb(136, 126, 126); */
//     box-shadow: 0 4px 8px 0 rgb(139, 138, 138),0 6px 20px 0 rgb(139, 131, 131);
//     /*box-shadow: 0 4px 8px 0 rgba(241, 237, 237, 0.753), 0 6px 20px 0 rgba(255, 255, 255, 0.959);*/
//   }
  
//   .astralshopsimg{
//    box-shadow: 0 4px 8px 0 rgb(139, 138, 138),0 6px 20px 0 rgb(139, 131, 131);
//   }
  
//   .topspace {
//     margin-top: 30px;
//   }
  
//   .inputbox {
//     border: none;
//     border-color: white;
//     height: 30px;
//     width: 250px;
//     border-radius: 4px;
//     box-shadow: 0 4px 8px 0 rgba(253, 250, 250, 0.767),0 6px 20px 0 rgba(236, 235, 235, 0.712);
//   }
  
//   .loginbtn {
//     background-color: rgba(var(--d69, 0, 149, 246), 1);
//     color: white;
//     width: 250px;
//     border: none;
//     border-radius: 4px;
//     box-shadow: 0 4px 8px 0 rgba(60, 253, 253, 0.808),0 6px 20px 0 rgba(66, 249, 255, 0.808);
//   }
  
//   .smallcontainer {
//     border-radius: 10px;
//     width: 400px;
//     height: 50px;
//     background-color: black;
//     box-shadow: 0 4px 8px 0 rgb(139, 138, 138),0 6px 20px 0 rgb(139, 131, 131);
//     padding-left: 160px;
//     padding-top: 10px;
//     margin-left: 565px;
//     margin-top: 35px;
//   }
  
// }
