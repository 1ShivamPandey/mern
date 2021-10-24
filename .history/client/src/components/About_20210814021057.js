import React from "react";
import {Helmet} from 'react-helmet';

export const About = () => {
  return (
    <>
     {/* <Helmet>
                <style>{'body { background-color: red; }'}</style>
            </Helmet> */}

    <div className="home-page-conatiner">
<div>
    <ul>
  <li><a class="active" href="#home">About </a></li>
  <li><a href="#profile">Timeline</a></li>
  </ul>
  </div>


    </div>
    </>
  );
};

export default About;
