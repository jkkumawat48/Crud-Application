import { Edit } from "@material-ui/icons";
import React,{useState} from "react";
function Create(){
    const[userData,setUserData]=useState({username:"",email:"",password:""})
    const[users,SetUsers]=useState([])
    const[editmode,SetEditMode]=useState(null)

    const handleOnChange = (e)=>{
        const{name,value}=e.target;
        setUserData({
            ...userData,
            [name]:value,
    })
    }
const handleSubmit = (e)=>{
    e.preventDefault()
   if(editmode!==null){
    let arr = users;
    arr.splice(editmode,1,userData)
    SetUsers([...arr])
   // SetEditMode(null)

   }else{
    SetUsers([...users,userData,])
   }
    
    setUserData({username:"",email:"",password:""})
    console.log(userData)  
}
const onEditClick = (index)=>{
    const user=users[index];
    SetEditMode(index)
    setUserData({
        username:user.username,
        email:user.email,
        password:user.password
    })
}
    return(
        <div>
            <h1>Crud Page</h1>
            <div className="container">
<div className="row">
<div className="col-xs-12">
<form onSubmit={(e)=>handleSubmit(e)}>
    <div className="form-group">
<lable htmlfor="">Name</lable>
<input type="text"placeholder="Enter your Name" name="username"value={userData.username}onChange={(e)=>handleOnChange(e)}/>
    </div>
    <div className="form-group">
<lable htmlfor="">Email</lable>
<input type="email" placeholder="Enter your Email" name="email"value={userData.email}onChange={(e)=>handleOnChange(e)}/>
    </div>
    <div className="form-group">
<lable htmlfor="">Password</lable>
<input type="Password" placeholder="Enter Your Password" name="password"value={userData.password}onChange={(e)=>handleOnChange(e)}/>
    </div>
    <button type="Submit">{Edit ? "Update":"Submit"}</button>
</form>
</div>
</div>
<table className="table table-bordered mt-5"></table>
<thead>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Edit</th>
        <th>Delete</th>
    </tr>
</thead>
<tbody>
    {
        users.map((user,index) => {
            return(
                <tr>
                    <th>{user.username}</th>
                    <th>{user.email}</th>
                    <th>{user.password}</th>
                    <th>
                        <button type="btn btn-info" onClick={()=> onEditClick(index)}>Edit</button>
                    </th>
                    <th>
                        <button type="btn btn-danger">Delete</button>
                    </th>
                </tr>
            )
        })
    }
</tbody>
            </div>
        </div>
    )
}
export default Create;