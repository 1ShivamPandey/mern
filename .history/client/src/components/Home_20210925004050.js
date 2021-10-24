import React, { useEffect, useState } from "react";
import crockery from "../images/crockery.jpg"
import goldwhite from "../images/goldwhite.jpg"
import whitepot from "../images/whitepot.jpg"
import plates from "../images/Plates.jpg"
import mug from "../images/mug.jpg"
import cup from "../images/cup.png"
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
     <img className="storyimg" src={whitepot} />
     </div>

    <div className="storybox">
    <img  className="storyimg" src={goldwhite}  />
    </div>

    <div className="storybox">
      <img  className="storyimg" src={mug}  />
    </div>

     <div className="storybox">
     <img  className="storyimg" src={plates} />
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
