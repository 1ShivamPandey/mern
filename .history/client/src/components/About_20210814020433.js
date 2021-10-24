import React from "react";
import {Helmet} from 'react-helmet';

export const About = () => {
  return (
    <>
     {/* <Helmet>
                <style>{'body { background-color: red; }'}</style>
            </Helmet> */}

    <div className="home-page-conatiner">

    <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  </ul>



    </div>
    </>
  );
};

export default About;
