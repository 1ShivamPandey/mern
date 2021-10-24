import React, { useEffect,useState } from "react";
import chip from '../images/chip'
import shivo from '../images/shivo'
//import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
const About = () => {
  const history = useHistory();
const  [userData, setuserData] = useState()
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setuserData(data)
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/Login");
    }
  };
  // useEffect(() => {
  //  callAboutPage()
  // }, [])

  useEffect(() => {
    callAboutPage();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {/* <Helmet>
                <style>{'body { background-color: red; }'}</style>
            </Helmet> */}

      <div className="home-page-conatiner">
        <form method="GET">
          <input type="submit" name="btn" value="editprofile"></input>
          <img src={userData.name === "apple" ? shivo:chip}/>
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

          <div>
            <div id="C4" className="aboutwala">
              <div>
                <label>user id</label>
                <p>{userData._id}</p>
              </div>

              <div>
                <label>Email</label>
                <p>{userData.email}</p>
              </div>

              <div>
                <label>Phone</label>
                <p>{userData.phone}</p>
              </div>

              <div>
                <label>Work</label>
                <p>{userData.work}</p>
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
                </div>{" "}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
