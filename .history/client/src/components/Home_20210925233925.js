import React, { useEffect, useState } from "react";
import crockery from "../images/crockery.jpg"
// import goldwhite from "../images/goldwhite.jpg"
import pots from "../images/pots.jpg"
import plate from "../images/plate.png"
import mug from "../images/mug.jpeg"
import vase from "../images/vase.jpg"
// import table from "../images/table.jpg";
export const Home = () => {
  const [userName, setuserName] = useState("");
  const [show, setShow] = useState(false);
  const userHomePage = async () => {
 document.body.style = "background: white;";

    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          //    Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setuserName(data.name);
      setShow(true);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //  callAboutPage()
  // }, [])
  useEffect(() => {
    userHomePage();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>

<div className="story">
  <div className="storycontainer">


  <div className="storybox">
     <img className="storyimg" src={vase} />
     </div>

     <p>Vase</p>


    <div className="storybox">
      <img  className="storyimg" src={plate}  />
    </div>

     <div className="storybox">
     <img  className="storyimg" src={mug} />
     </div>



     <div className="storybox">
     <img  className="storyimg" src={pots} />
     </div>


     <div className="storybox">
     <img  className="storyimg" src={pots} />
     </div>

     <div className="storybox">
     <img  className="storyimg" src={pots} />
     </div>
     <div className="storybox">
     <img  className="storyimg" src={pots} />
     </div>
     <div className="storybox">
     <img  className="storyimg" src={pots} />
     </div>

  </div>
</div>


      <div className="flexing">
        <div className="boxmodel">
          <div className="smallboxmodel">
            {/* <p>
              <b> Welcome {userName} </b>
            </p> */}
            {/* <p>{show ? "!Think different" : "The tech giant "}</p> */}
            <div >
              <img className="productimage" height="220px" width="250px" src={crockery} />
            </div>

            <div>
              <form method="POST" action="/">
                <input className="buybtn" type="submit" value="Buy"></input>
              </form>
            </div>
          </div>
        </div>



        <div className="boxmodel">
          <div className="smallboxmodel">
            {/* <p>
              <b> Welcome {userName} </b>
            </p> */}
            {/* <p>{show ? "!Think different" : "The tech giant "}</p> */}
            <div >
              <img className="productimage" height="220px" width="250px" src={crockery} />
            </div>

            <div>
              <form method="POST" action="/">
                <input className="buybtn" type="submit" value="Buy"></input>
              </form>
            </div>
          </div>
        </div>



        <div className="boxmodel">
          <div className="smallboxmodel">
            {/* <p>
              <b> Welcome {userName} </b>
            </p> */}
            {/* <p>{show ? "!Think different" : "The tech giant "}</p> */}
            <div >
              <img className="productimage" height="220px" width="250px" src={crockery} />
            </div>

            <div>
              <form method="POST" action="/">
                <input className="buybtn" type="submit" value="Buy"></input>
              </form>
            </div>
          </div>
        </div>



        <div className="boxmodel">
          <div className="smallboxmodel">
            {/* <p>
              <b> Welcome {userName} </b>
            </p> */}
            {/* <p>{show ? "!Think different" : "The tech giant "}</p> */}
            <div >
              <img className="productimage" height="220px" width="250px" src={crockery} />
            </div>

            <div>
              <form method="POST" action="/">
                <input className="buybtn" type="submit" value="Buy"></input>
              </form>
            </div>
          </div>
        </div>



        

      </div>
    </>
  );
};

export default Home;
