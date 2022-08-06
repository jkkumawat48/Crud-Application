import React, { useState } from "react";
function Profile(){
    const[user,setUser]=useState("")
    const[password,setPassword]=useState("")
    const[userErr,setUserErr]=useState(false)
    const[passErr,setPassErr]=useState(false)
  function  loginhandle(e){
    if(user.length<3 || password.length<3)
    {
        alert("type correct values")
    }else{
        alert("all good:)")
    }
e.preventDefault()
    }
  function userHandler(e){
    let item=e.target.value;
    if(item.length<3){
        setUserErr(true)
    }
    else{setUserErr(false)}
setUser(item)
    }
    function  Passwordhandle(e){
        e.preventDefault()
            }
          function passwordHandler(e){
            let item=e.target.value;
            if(item.length<3){
                setPassErr(true)
            }
            else{setPassErr(false)}
        setPassword(item)
            }
    return(
        <div>
<h1>Login</h1>
<form onSubmit={loginhandle}>
<input type="text"placeholder="Enter User Id" onChange={userHandler}/>{userErr?<span>User Not Valid</span>:""}
<br />  <br />
<input type="password"placeholder="Enter User Password" onChange={passwordHandler}/>{passErr?<span>password Not Valid</span>:""}
<br />  <br />
<button type="submit">Login</button>
</form>
        </div>
    )
}
export default Profile;
