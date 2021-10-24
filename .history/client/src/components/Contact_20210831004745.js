import React, { useEffect, useState } from "react";
//import { NavLink } from "react-router-dom";
import "../css/Login.css"

export const Contact = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    message: "",
  });
  const userContact = async () => {
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
      setuserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
        work: data.work,
        message: data.message,
      });
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
    userContact();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuserData({ ...userData, [name]: value });
  };

  //send the data to backend
  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, message } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        message,
      }),
    });
    const data = await res.json();

    if (!data) {
      console.log("message not found");
    } else {
      alert("Message send");
      setuserData({ ...userData, message: "" });
    }
  };

  return (
    <>

<div className="registercontainer">


<input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    autoComplete="off"
                    value={userData.name}
                    onChange={handleInputs}
                  ></input>

                  
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    autoComplete="off"
                    value={userData.email}
                    onChange={handleInputs}
                  ></input>

                 

                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="phone"
                    autoComplete="off"
                    value={userData.phone}
                    onChange={handleInputs}
                  ></input>

                  

                  <input
                    type="text"
                    name="work"
                    id="work"
                    placeholder="work"
                    autoComplete="off"
                    value={userData.work}
                    onChange={handleInputs}
                  ></input>

                 

                  <input
                    type="text"
                    name="message"
                    id="message"
                    placeholder="message"
                    autoComplete="off"
                    value={userData.message}
                    onChange={handleInputs}
                  ></input>

                  <input
                    type="button"
                    name="submit"
                    value="submit"
                    onClick={contactForm}
                  ></input></div>



      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title"> shivam</h2>
              <form method="POST" className="register-form" id="register-form">

                <div className="form-group">
                 


<h1>hey</h1>
                </div>

                <div></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;


