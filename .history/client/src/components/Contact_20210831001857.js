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

<div className="container">
  <h1>hey</h1>
</div>



      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title"> shivam</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <lable htmlFor="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </lable>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    autoComplete="off"
                    value={userData.name}
                    onChange={handleInputs}
                  ></input>
                  <lable htmlFor="email">
                    <i class="zmdi zmdi-group-work"></i>
                  </lable>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    autoComplete="off"
                    value={userData.email}
                    onChange={handleInputs}
                  ></input>
                  <lable htmlFor="phone">
                    <i class="zmdi zmdi-code-smartphone"></i>
                  </lable>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="phone"
                    autoComplete="off"
                    value={userData.phone}
                    onChange={handleInputs}
                  ></input>

                  <lable htmlFor="work">
                    <i class="zmdi zmdi-group-work"></i>
                  </lable>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    placeholder="work"
                    autoComplete="off"
                    value={userData.work}
                    onChange={handleInputs}
                  ></input>

                  <lable htmlFor="message">
                    <i class="zmdi zmdi-group-message"></i>
                  </lable>
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
                  ></input>
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

const styles= {
  body:{
backgroundcolor:"black"
  },
  
  container:{
    width: 400,
    height: 400,
    borderradius:10,
    marginTop:150,
    paddingTop:50,
    paddingbottom:50,

    // border-radius: 10px;
    // margin-top: 150px;
    // padding-top: 50px;
    // padding-bottom: 50px;
    // background-color: black;
    /* box-shadow: 0 4px 8px 0 rgba(136, 126, 126),0 6px 20px 0 rgb(136, 126, 126); */
  //  box-shadow: 0 4px 8px 0 rgb(139, 138, 138),0 6px 20px 0 rgb(139, 131, 131);
    /*box-shadow: 0 4px 8px 0 rgba(241, 237, 237, 0.753), 0 6px 20px 0 rgba(255, 255, 255, 0.959);*/
  }
  
  // .registercontainer {
  //   width: 400px;
  //   height: 600px;
  //   border-radius: 10px;
  //   margin-top: 60px;
  //   margin-left: 565px;
  //   padding-top: 10px;
  //   padding-bottom: 50px;
  //   background-color: black;
  //   /* box-shadow: 0 4px 8px 0 rgba(136, 126, 126),0 6px 20px 0 rgb(136, 126, 126); */
  //   box-shadow: 0 4px 8px 0 rgb(139, 138, 138),0 6px 20px 0 rgb(139, 131, 131);
  //   /*box-shadow: 0 4px 8px 0 rgba(241, 237, 237, 0.753), 0 6px 20px 0 rgba(255, 255, 255, 0.959);*/
  // }
  
  // .astralshopsimg{
  //  box-shadow: 0 4px 8px 0 rgb(139, 138, 138),0 6px 20px 0 rgb(139, 131, 131);
  // }
  
  // .topspace {
  //   margin-top: 30px;
  // }
  
  // .inputbox {
  //   border: none;
  //   border-color: white;
  //   height: 30px;
  //   width: 250px;
  //   border-radius: 4px;
  //   box-shadow: 0 4px 8px 0 rgba(253, 250, 250, 0.767),0 6px 20px 0 rgba(236, 235, 235, 0.712);
  // }
  
  // .loginbtn {
  //   background-color: rgba(var(--d69, 0, 149, 246), 1);
  //   color: white;
  //   width: 250px;
  //   border: none;
  //   border-radius: 4px;
  //   box-shadow: 0 4px 8px 0 rgba(60, 253, 253, 0.808),0 6px 20px 0 rgba(66, 249, 255, 0.808);
  // }
  
  // .smallcontainer {
  //   border-radius: 10px;
  //   width: 400px;
  //   height: 50px;
  //   background-color: black;
  //   box-shadow: 0 4px 8px 0 rgb(139, 138, 138),0 6px 20px 0 rgb(139, 131, 131);
  //   padding-left: 160px;
  //   padding-top: 10px;
  //   margin-left: 565px;
  //   margin-top: 35px;
  // }
};
