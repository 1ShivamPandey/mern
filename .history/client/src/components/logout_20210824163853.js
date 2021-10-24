import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
const logout = () => {
const history = useHistory
useEffect(() => {
fetch('./Logout',{
    method:"GET",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    },
    Credentials:"include"
}).then((res) => {
 history.push('./login',{replace:true})
 if(!res.status ===200){
   const error = new Error(res.error)
   throw error
 }
})

})

    return (
        <>
            <h1>logout ka page</h1>
        </>
    )
}

export default logout
