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
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
<h1>hey shivam</h1>
    </div>
    </>
  );
};

export default About;
