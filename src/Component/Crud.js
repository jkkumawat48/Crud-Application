import React,{useState} from "react";
function Crud(){
    const[userData,setUserData]=useState({username:"",email:"",password:""})
    
       const handleOnChange = (e) => {
        const{name,value}=e.target;
        setUserData({...userData,[name]:value,})
       } 
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        setUserData({username:"",email:"",password:""})
    console.log(userData)
    }
    return(
        <div>
            <h1>Crud Application</h1>
            <div className="container">
                <div className="row justify-content-center">
<div className="col">
    <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="form-group">
<lable htmlfor="">Name</lable>
<input type="text" placeholder="Enter Your Name" name="username" value={userData.username}onChange={(e)=>handleOnChange(e)}/>
        </div>
        <div className="form-group">
<lable htmlfor="">Email</lable>
<input type="Email" placeholder="Enter Your Email" name="email" value={userData.email}onChange={(e)=>handleOnChange(e)}/>
        </div>
        <div className="form-group">
            <lable htmlfor="">Password</lable>
            <input type="Password"placeholder="Enter Your Password" name="password" value={userData.password}onChange={(e)=>handleOnChange(e)}/>
        </div>
        <button type="Submit">Submit</button>
    </form>
</div>
                </div>
            </div>
        </div>
    )
}
export default Crud