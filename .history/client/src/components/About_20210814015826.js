import React from "react";
import {Helmet} from 'react-helmet';

export const About = () => {
  return (
    <>
     {/* <Helmet>
                <style>{'body { background-color: red; }'}</style>
            </Helmet> */}

    <div className="home-page-conatiner">

      
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
 
    </ul>
  </div>
</nav>

<div class="container">
  <h3>Basic Navbar Example</h3>
  <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
</div>

    </div>
    </>
  );
};

export default About;
