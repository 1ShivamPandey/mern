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
              <a  href="#C4">About</a>
            </li>
            <li>
              <a href="#C10">Timeline</a>
            </li>
            
          </ul>
        </div>

        <div>



<div id="C">
<h2 >Chapter 4</h2>
<p>This chapter explains ba bla bla</p>
</div>


<h2>Chapter 5</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 6</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 7</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 8</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 9</h2>
<p>This chapter explains ba bla bla</p>

<h2 id="C10">Chapter 10</h2>
<p>This chapter explains ba bla bla</p>


</div>



<div >

 <h1 id="c4">hey this is shivam</h1> 
</div>


      </div>
    </>
  );
};

export default About;
