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
        <div>
          <ul>
            <li>
              <a href="#C4">About</a>
            </li>
            <li>
              <a href="#C10">Timeline</a>
            </li>
          </ul>
        </div>

        <div >
      

          <div id="C4" className="aboutwala">
            <div>
              <label>user id</label>
              <p>1ahsbh28388337vhv377377888dfbhdbfdjhd</p>
            </div>

            <div>
              <label>Email</label>
              <p>shi@gmail.com</p>
            </div>

            <div>
              <label>Phone</label>
              <p>7234832244</p>
            </div>

            <div>
              <label>Work</label>
              <p>Entrepreneur</p>


            </div>
          </div>
      
<div className="spacefromtop">
      <div id="C10" className="aboutwalasecond">
      <div>
              <label>Instagram id </label>
              <p>shivamastralain</p>
            </div>

            <div>
              <label>Email</label>
              <p>shivampandey109876@gmai.com</p>
            </div>

            <div>
              <label>Phone</label>
              <p>7234832244</p>
            </div>

            <div>
              <label>Work</label>
              <p>Entrepreneur</p>


            </div>      </div>
    
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
