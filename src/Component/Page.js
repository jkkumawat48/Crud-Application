import React,{useState} from "react";
function Page(){
    const[userData,setUserData]=useState({name:"",email:"",password:""})
    const[users,SetUsers]=useState([])
    const[editmode,SetEditMode]=useState(null)
    const[active,setActive]=useState(null)

    const handleOnChange = (e)=> {
        const{name,value}=e.target;
        setUserData({...userData,[name]:value})
    }
    const handlesubmit = () =>{
        
        // e.preventDefault();
        if(editmode !==null){
            const arr=users
            arr.splice(editmode,1,userData)
            SetUsers([...arr])
            SetEditMode(null)
        }else{
            SetUsers([...users,userData])
        }   
        setUserData({name:"",email:"",password:""})
    console.log(userData)
    }
    const OnEditSubmit = (index) => {
        let user=users[index]
        SetEditMode(index);
        setActive(index)
        setUserData({
            name:user.name,
            email:user.email,
            password:user.password
        }) 
    }
    const OnDeleteSubmit =(user)=>{
        let copy=users.filter(item => item !== user);
        SetUsers({...copy})
    }
    return(
            <div>
                <h1>Crud Application</h1>
                <div className="container">
    <div className="row justify-content-center">
    <form>
        <div className="form-group">
    <lable htmlfor="">Name</lable>
    <input type="text" placeholder="Enter Your Name" name="name" value={userData.name}onChange={(e)=>handleOnChange(e)}/>
        </div>
        <div className="form-group">
    <lable htmlfor="">Email</lable>
    <input type="Email" placeholder="Enter Your Email" name="email" value={userData.email}onChange={(e)=>handleOnChange(e)}/>
        </div>
        <div className="form-group">
    <label htmlFor="">Password</label>
    <input type="Password" placeholder="Enter Your Password" name="password" value={userData.password}onChange={(e)=>handleOnChange(e)}/>
        </div>
    </form>
        <button type="submit" onClick={handlesubmit}>Submit</button>
    </div>
    <table className="table table-bordered">
    <thead>
        <tr>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>edit</th>
            <th>Delete</th>
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
                        <button className="btn btn-info" onClick={()=>OnEditSubmit(index)}>Edit</button>
                    </th>
                    <th>
                        <button className="btn btn-danger" onClick={()=>OnDeleteSubmit(user)}>Delete</button>
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
export default Page;