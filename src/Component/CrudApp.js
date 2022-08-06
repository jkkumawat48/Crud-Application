import React,{useState} from "react";
function CrudApp(){
const[userData,setUserData]=useState({name:"",email:"",password:""})
const[users,SetUsers]=useState([])
const[editmode,SetEditMode]=useState(null)
const[active,setActive]=useState(null)
const handleOnChange = (e) => {
    const{name,value}=e.target;
    setUserData({...userData,
    [name]:value})
}
const handleSubmit = (e) => {
    e.preventDefault();
    if(editmode !==null){
        let arr =users;
        arr.splice(editmode,1,userData)
        SetUsers([...arr])
        SetEditMode(null)
    }else{
        SetUsers([...users,userData])
    }
    
    setUserData({name:"",email:"",password:""})
    // console.log(userData)
}
const onEditClick = (index) => {
    const user=users[index];
    SetEditMode(index)
    setUserData({
        name:user.name,
        email:user.email,
        password:user.password
    })
}
const onDeleteClick = (user)=> {
 let copy= users.filter(item => item !== user);
 SetUsers([...copy])

}

    return(
        <div>
            <h1>CrudApp</h1>
            <div className="container">
            <div className="row justify-content-center">
<div className="col">
<form onSubmit={(e)=>handleSubmit(e)}>
    <div className="form-group">
<lable htmlfor="">Name</lable>
<input type="text" placeholder="Enter Your Name" name="name" value={userData.name}onChange={(e)=>handleOnChange(e)}/>
    </div>
    <div className="form-group">
<lable htmlfor="">Email</lable>
<input type="Email" placeholder="Enter Your Email" name="email" value={userData.email}onChange={(e)=>handleOnChange(e)}/>
    </div>
    <div className="form-group">
<lable htmlfor="">Password</lable>
<input type="Password" placeholder="Enter Your Password" name="password" value={userData.password}onChange={(e)=>handleOnChange(e)}/>
    </div>
    <button type="Submit">Submit</button>
</form>
</div>
            </div>
            <table className="table-table-bordered">
<thead>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Edit</th>
        <th>Password</th>
    </tr>
</thead>
<tbody>
    {
        users.map((user,index)=>{
            return(
                <tr>
                    <th>{user.name}</th>
                    <th>{user.email}</th>
                    <th>{user.password}</th>
                    <th>
                        <button className="btn btn-info" onClick={()=>onEditClick(index)}>Edit</button>
                    </th>
                    <th>
                        <button className="btn btn-danger"  onClick={()=>onDeleteClick(user)}>Delete</button>
                    </th>
                </tr>
            )
        })
    }
</tbody>
            </table>
            </div>
        </div>
    )
}
export default CrudApp;