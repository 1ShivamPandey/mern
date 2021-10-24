import React, { useEffect, useState } from "react";
import crockery from "../images/crockery.jpg";
// import goldwhite from "../images/goldwhite.jpg"
import pots from "../images/Story/pots.jpg";
import plate from "../images/Story/plate.png";
import mug from "../images/Story/mug.jpeg";
import vase from "../images/Story/vase.jpg";



import headphone from "../images/Card/headephone.jpeg";
import hearticon from "../images/Card/heart-pink.png";
import Story from "./Story";
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
  {/* <Story></Story> */}

      <div className="card">
        
        <div className="card-container">

          <div className="flex-for-two">

            <div className="card-box">
               <img className="heart-image" src={hearticon}/> 
               <div className="img-background">
              <img className="card-image" src={headphone} />
              </div>
              
              <h5 className="product-name">Headphone</h5>
              <div className="product-pricing-flex-row">
              <p className="product-price">Rs. 999</p>
              <strike className="strike-left-margin">Rs. 1599</strike>
              </div>

              <p className="product-price-off">(48% OFF)</p>            </div>


            <div className="card-box">
               <img className="heart-image" src={hearticon}/> 
               <div></div>
              <img className="card-image" src={headphone} />
              <h5 className="product-name">Headphone</h5>
              <div className="product-pricing-flex-row">
              <p className="product-price">Rs. 999</p>
              <strike className="strike-left-margin">Rs. 1599</strike>
              </div>

              <p className="product-price-off">(48% OFF)</p>            </div>

            </div>

        </div>
        

        <div className="card-container">

          <div className="flex-for-two">

            <div className="card-box">
               <img className="heart-image" src={hearticon}/> 
               <div></div>
              <img className="card-image" src={headphone} />
              <h5 className="product-name">Headphone</h5>
              <div className="product-pricing-flex-row">
              <p className="product-price">Rs. 999</p>
              <strike className="strike-left-margin">Rs. 1599</strike>
              </div>

              <p className="product-price-off">(48% OFF)</p>            </div>


            <div className="card-box">
               <img className="heart-image" src={hearticon}/> 
               <div></div>
              <img className="card-image" src={headphone} />
              <h5 className="product-name">Headphone</h5>

              <div className="product-pricing-flex-row">
              <p className="product-price">Rs. 999</p>
              <strike className="strike-left-margin">Rs. 1599</strike>
              </div>

              <p className="product-price-off">(48% OFF)</p>

            </div>

            </div>

        </div>

        <div className="card-container">

          <div className="flex-for-two">

            <div className="card-box">
               <img className="heart-image" src={hearticon}/> 
               <div></div>
              <img className="card-image" src={headphone} />
              <h5 className="product-name">Headphone</h5>
              <div className="product-pricing-flex-row">
              <p className="product-price">Rs. 999</p>
              <strike className="strike-left-margin">Rs. 1599</strike>
              </div>

              <p className="product-price-off">(48% OFF)</p>            </div>


            <div className="card-box">
               <img className="heart-image" src={hearticon}/> 
               <div></div>
              <img className="card-image" src={headphone} />
              <h5 className="product-name">Headphone</h5>
              <div className="product-pricing-flex-row">
              <p className="product-price">Rs. 999</p>
              <strike className="strike-left-margin">Rs. 1599</strike>
              </div>

              <p className="product-price-off">(48% OFF)</p>            </div>

            </div>

        </div>

        <div className="card-container">

          <div className="flex-for-two">

            <div className="card-box">
               <img className="heart-image" src={hearticon}/> 
               <div></div>
              <img className="card-image" src={headphone} />
              <h5 className="product-name">Headphone</h5>
              <div className="product-pricing-flex-row">
              <p className="product-price">Rs. 999</p>
              <strike className="strike-left-margin">Rs. 1599</strike>
              </div>

              <p className="product-price-off">(48% OFF)</p>            </div>


            <div className="card-box">
               <img className="heart-image" src={hearticon}/> 
               <div></div>
              <img className="card-image" src={headphone} />
              <h5 className="product-name">Headphone</h5>
              <div className="product-pricing-flex-row">
              <p className="product-price">Rs. 999</p>
              <strike className="strike-left-margin">Rs. 1599</strike>
              </div>

              <p className="product-price-off">(48% OFF)</p>            </div>

            </div>

        </div>

        <div className="card-container">

          <div className="flex-for-two">

            <div className="card-box">
               <img className="heart-image" src={hearticon}/> 
               <div></div>
              <img className="card-image" src={headphone} />
              <h5 className="product-name">Headphone</h5>
              <div className="product-pricing-flex-row">
              <p className="product-price">Rs. 999</p>
              <strike className="strike-left-margin">Rs. 1599</strike>
              </div>

              <p className="product-price-off">(48% OFF)</p>            </div>


            <div className="card-box">
               <img className="heart-image" src={hearticon}/> 
               <div>
              <img className="card-image" src={headphone} />
              </div>
              <h5 className="product-name">Headphone</h5>
              <div className="product-pricing-flex-row">
              <p className="product-price">Rs. 999</p>
              <strike className="strike-left-margin">Rs. 1599</strike>
              </div>

              <p className="product-price-off">(48% OFF)</p>            </div>

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
            <div>
              <img
                className="productimage"
                height="220px"
                width="250px"
                src={crockery}
              />
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
            <div>
              <img
                className="productimage"
                height="220px"
                width="250px"
                src={crockery}
              />
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
            <div>
              <img
                className="productimage"
                height="220px"
                width="250px"
                src={crockery}
              />
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
            <div>
              <img
                className="productimage"
                height="220px"
                width="250px"
                src={crockery}
              />
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
