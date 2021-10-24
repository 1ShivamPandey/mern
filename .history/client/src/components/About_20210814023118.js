import React from "react";
import { Helmet } from "react-helmet";

export const About = () => {
  return (
    <>
      {/* <Helmet>
                <style>{'body { background-color: red; }'}</style>
            </Helmet> */}

      <div className="home-page-conatiner">
        <input type="submit" name="btn" value="editprofile"></input>
        <div className="spacefromtop">
          <ul>
            <li>
              <a  href="#home">  About</a>
            </li>
            <li>
              <a href="#profile">Timeline</a>
            </li>
          </ul>
        </div>

<div id="profile">
  hey shivam how are you
</div>

      </div>
    </>
  );
};

export default About;
