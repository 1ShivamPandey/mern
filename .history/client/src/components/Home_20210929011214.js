import React, { useEffect, useState } from "react";
import crockery from "../images/crockery.jpg";
// import goldwhite from "../images/goldwhite.jpg"
import pots from "../images/Header/pots.jpg";
import plate from "../images/Header/plate.png";
import mug from "../images/mug.jpeg";
import vase from "../images/Header/vase.jpg";



import headphone from "../images/headephone.jpeg";
import hearticon from "../images/heart-pink.png";
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
          <div>
            <div className="storybox">
              <img className="storyimg" src={vase} />
            </div>
            <p className="story-txt-margin-left">Vase</p>
          </div>

          <div>
            <div className="storybox">
              <img className="storyimg" src={plate} />
            </div>
            <p className="story-txt-margin-left">Plate</p>
          </div>

          <div>
            <div className="storybox">
              <img className="storyimg" src={mug} />
            </div>
            <p className="story-txt-margin-left">Mug</p>
          </div>

          <div>
            <div className="storybox">
              <img className="storyimg" src={pots} />
            </div>
            <p className="story-txt-margin-left">Pot</p>
          </div>

          <div>
            <div className="storybox">
              <img className="storyimg" src={pots} />
            </div>
            <p className="story-txt-margin-left">Vase</p>
          </div>

          <div>
            <div className="storybox">
              <img className="storyimg" src={pots} />
            </div>
            <p className="story-txt-margin-left">Vase</p>
          </div>

          <div>
            <div className="storybox">
              <img className="storyimg" src={pots} />
            </div>
            <p className="story-txt-margin-left">Vase</p>
          </div>

          <div>
            <div className="storybox">
              <img className="storyimg" src={pots} />
            </div>
            <p className="story-txt-margin-left">Vase</p>
          </div>
        </div>
      </div>


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
