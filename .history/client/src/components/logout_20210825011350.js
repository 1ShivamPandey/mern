import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
const Logout = () => {










  const history = useHistory();
    const calllogoutPage = async () => {
      try {
        const res = await fetch("/logout", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
        history.push("/Login", {replace: false });
      }
    };
    useEffect(() => {
      calllogoutPage();
      //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
















//const history = useHistory();
  // useEffect(() => {
  //   fetch("/logout", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "include",
  //   })
  //     .then((res) => {
  //       history.push("/login", {replace: true });
  //       if (res.status === 200) {
  //         const error = new Error(res.error);
  //         throw error;
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  return (
    <>
      <h1>logout ka page</h1>
    </>
  );
};

export default Logout;
