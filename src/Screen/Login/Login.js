import React, { useState } from "react";
function Login(){
    const[userData,setUserData]=useState({
        userName:"",
        email:"",
        password:""
    })
    const[userNumber,setUserNumber]=useState([])

    const handleOnChenge =(e)=>{
        const {name,value}=e.target
       setUserData({
        ...userData,
        [name]:value,
       })
       
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(userData)
        // setUserData({userName:"",
        // email:"",
        // password:""})
        setUserNumber([{userName:"",
        email:"",
        password:""}])
    }
    return(
        <div>
             <h1>Curd Application</h1>
<form onSubmit={e=>handleSubmit(e)}>
    <div>
        <label>Name</label>
        <div>
            <input type="text" placeholder="enter your name" name="userName" value={userData.userName} onChange={(e)=>handleOnChenge(e)} />
        </div>
    </div>
    <div>
        <lable>Email</lable>
        <div>
            <input type="email" placeholder="Enter Email address" name="email" value={userData.email} onChange={(e)=>handleOnChenge(e)}/>
        </div>
    </div>
    <div>
        <lable>Password</lable>
        <div>
            <input type="password" placeholder="Enter Password" name="password" value={userData.password}onChange={(e)=>handleOnChenge(e)}/>
        </div>
    </div>
    <button type="submit">submit</button>
</form>

        </div>
    )
}
export default Login;