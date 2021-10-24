import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import astralshops from "../images/astralshops.jpg"

export const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("registration successfull");
      console.log("registration successfull");

      history.push("./login");
    }
  };

  return (
    <>
      <div className="registercontainer">
        <div style={{ textAlign: "center" }}>
        <img className="astralshopsimg" height="100px"  src={astralshops}></img>

          <form method="POST" id="register-form">

            <div className="topspace">
              <input className="inputbox"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                autoComplete="off"
                value={user.name}
                onChange={handleInputs}
              ></input>
            </div>

            <div className="topspace">
              <input className="inputbox"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                value={user.email}
                onChange={handleInputs}
              ></input>
            </div>

            <div className="topspace">
              <input className="inputbox"
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                autoComplete="off"
                value={user.phone}
                onChange={handleInputs}
              ></input>
            </div>

            <div className="topspace">
              <input className="inputbox"
                type="text"
                name="work"
                id="work"
                placeholder="Work"
                autoComplete="off"
                value={user.work}
                onChange={handleInputs}
              ></input>
            </div>

            <div className="topspace">
              <input className="inputbox"
                type="text"
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="off"
                value={user.password}
                onChange={handleInputs}
              ></input>
            </div>

            <div className="topspace"> 
              <input className="inputbox"
                type="text"
                name="cpassword"
                id="cpassword"
                placeholder="Cpassword"
                autoComplete="off"
                value={user.cpassword}
                onChange={handleInputs}
              ></input>
            </div>

            <div className="topspace">
              <input className="loginbtn"
                type="submit"
                name="signup"
                id="signup"
                value="register"
                onClick={PostData}
              />
            </div>
          </form>
<div className="topspace">
          <NavLink style={{textDecoration:"none"}} to="/login"> I am already register</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
