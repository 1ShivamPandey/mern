import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import astralshops from "../images/astralshops.jpg";
import { UserContext } from "../App";
import profileicon from "../images/download.png";
import carticon from "../images/cart.png";
import contact from "../images/helpline.png";
import logout from "../images/logout.png";
export const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <ul>
            <img height="50" width="100" src={astralshops} alt="astralshops" />
            <input className="searchbox" type="text" id="placeholdercolor" placeholder="Search"/>

            <div className="floatright">
              <li>
                <b>
                  <NavLink aria-current="page" to="/">  Home </NavLink>
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
              <li>
                <NavLink to="/Signup"> <img className="margin-left" height="35px" src={carticon} ></img>  </NavLink>
              </li>
              <li>
                <NavLink to="/Contact"><img className="margin-left" height="35px"src={contact} ></img></NavLink>
              </li>
              <li>
                <div className="border-bottom">
                <NavLink to="/About"><img className="margin-left" height="35px" src={profileicon}></img></NavLink>
                </div>
              </li>                            
              <li>
                <NavLink to="/"> <img className="margin-left" height="35px" src={logout}></img>  </NavLink>
              </li>                             
            </div>
          </ul>
        </>
      );
    } else {
      return (
        <>
      <div className="header">
 
<div className="header-left-side">
<NavLink aria-current="page" to="/"> <img width="100px" src={astralshops} alt="astralshops"/></NavLink>
</div>


<div className="header-center-side">
<input  className="searchbox" type="text" id="placeholdercolor" placeholder="Search"/>
</div>


<div className="header-right-side">

<div className="header-right-side-padding">
  <b><NavLink  style={{textDecoration:"none" ,color:"white", fontWeight:"bold", fontSize:"25px"}}  to="/Login">Login</NavLink></b>
</div>

  <div className="header-right-side-padding">
  <NavLink to="/Signup"><img height="35px" src={carticon} ></img></NavLink>
</div>

  <div className="header-right-side-padding">
  <NavLink to="/Contact"> <img  height="35px" src={contact} ></img> </NavLink>
</div>

  <div className="header-right-side-padding">
 <NavLink to="/About"><img   height="35px"  src={profileicon} ></img> </NavLink>
 </div>

 <div className="header-right-side-padding">
 <NavLink to="/Login"><img height="35px" src={logout}></img> </NavLink>
</div>

</div>

      </div>



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
