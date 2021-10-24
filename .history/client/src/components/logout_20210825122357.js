import React, { useEffect,useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";
const Logout = () => {
  const {state, dispatch} = useContext(UserContext)

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
        dispatch({type:"USER", payload:false})
        if (res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
        history.push("/Login");
      }
    };
    useEffect(() => {
      calllogoutPage();
      //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

// const history = useHistory();
//   useEffect(() => {
//     fetch("/logout", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     })
//       .then((res) => {
//         dispatch({type:"USER", payload:false})
//         history.push("/login", {replace: true });
//         if (res.status === 200) {
//           const error = new Error(res.error);
//           throw error;
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });

  return (
    <>
      <h1>logout ka page</h1>
    </>
  );
};

export default Logout;
