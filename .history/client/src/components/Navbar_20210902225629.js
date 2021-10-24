import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import astralshops from "../images/astralshops.jpg";
import { UserContext } from "../App";
import profileicon from "../images/download.png";
import carticon from "../images/cart.png";
export const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <ul>
            <img height="50" width="100" src={astralshops} alt="astralshops" />
            <input
              className="searchbox"
              type="text"
              id="placeholdercolor"
              placeholder="Search"
            />

            <div className="floatright">
              <li>
                <b>
                  {" "}
                  <NavLink aria-current="page" to="/">
                    Home
                  </NavLink>
                </b>
              </li>

              <li>
                <NavLink to="/About">About</NavLink>
              </li>

              <li>
                <NavLink to="/Contact">Contact</NavLink>
              </li>

              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            </div>
          </ul>
        </>
      );
    } else {
      return (
        <>
          <ul>
            <NavLink aria-current="page" to="/">
              {" "}
              <img
                height="50"
                width="100"
                src={astralshops}
                alt="astralshops"
              />{" "}
            </NavLink>
            <input
              className="searchbox"
              type="text"
              id="placeholdercolor"
              placeholder="Search"
            />

            <div className="floatright">
              {/* <li >
        <b>  <NavLink  aria-current="page" to="/">Home</NavLink></b>
        </li> */}

              <li>
                <b>
                  {" "}
                  <NavLink to="/About">About</NavLink>
                </b>
              </li>

              <li>
                <b>
                  {" "}
                  <NavLink to="/Login">Login</NavLink>
                </b>
              </li>
                
              <li>
                <b>
                  {" "}
                  <NavLink to="/Contact">Contact</NavLink>
                </b>
              </li>
                
              <li>
                <b>
                  <NavLink to="/Signup">Registration</NavLink>
                </b>
              </li>
               

            <li>
                <div className="margin-left">
              <NavLink to="/"><img height="50px" src={carticon}></img></NavLink>
              </div>
            </li>


              <li>
                <div className="margin-left">
                  <img height="50px" src={carticon} />
                </div>
              </li>
              
              <li>
                <div className="margin-left">
                  <img height="50px" src={profileicon} />
                </div>
              </li>
            </div>
          </ul>
        </>
      );
    }
  };

  return (
    <>
      <div>
        <RenderMenu />
      </div>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">
        <img height="80" width="100" src={astralshops} alt="astralshops"/>
    </NavLink>

    <div>
    <input className="searchbox"  type="text" id="placeholdercolor" placeholder="Search"/>
    </div>


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">

     
    </div>


    <RenderMenu/>
  </div>
</nav> */}
    </>
  );
};

export default Navbar;
