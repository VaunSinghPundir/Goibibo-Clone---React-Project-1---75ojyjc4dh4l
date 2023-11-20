import React, { useContext, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getHeaderProjectId } from '../../utils/headerId';
import { AuthContext } from '../App';
export const Login = () => {
  const [loginDetail,setLoginDetail] = useState({
    email:"",
    pass:""
  });
  //  const [isUser, setIsUser] = useState(false)
   const navigate = useNavigate();
   const {setIsLoggedIn} = useContext(AuthContext);

   const config = getHeaderProjectId();

  async function userAuth(){
    try{
      const res = await axios.post("https://academics.newtonschool.co/api/v1/bookingportals/login", 
       { email : loginDetail.email, password:loginDetail.pass, appType: "bookingportals"}, 
       config
     );
    // setIsUser(true);
    
     console.log("res:", res)
     const token = res.data.token;
     if(token){
      sessionStorage.setItem("userToken", token)
      sessionStorage.setItem("user", JSON.stringify(res.data.data.name))
      setIsLoggedIn(true)
      navigate("/flight")
    }
     }catch(err){
        console.log("Error: ", err);
     }
  }

  return (
    <div className='form-container'>
      <h2>Login</h2>
      <input type="email"  value={loginDetail.email} onChange={(e)=>{
        setLoginDetail({...loginDetail, email: e.target.value})
      }}/>
      <input type="password" value={loginDetail.pass} onChange={(e)=>{
        setLoginDetail({...loginDetail, pass: e.target.value});
      }}/>
      {/* <button type='submit' onClick={userAuth}>Login</button> */}
      <div>
      <input type='submit' value="Login" onClick={userAuth}/>
      </div>
    </div>
  )
}
