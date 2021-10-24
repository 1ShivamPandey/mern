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

})

})

    return (
        <>
            <h1>logout ka page</h1>
        </>
    )
}

export default logout
