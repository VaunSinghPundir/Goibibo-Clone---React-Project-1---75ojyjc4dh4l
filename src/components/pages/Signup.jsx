import React , {useContext, useRef}from 'react'
import axios from 'axios';
import { getHeaderProjectId } from '../../utils/headerId';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';


export const Signup = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const {setIsLoggedIn} = useContext(AuthContext);

  const config = getHeaderProjectId();

  const createUser = async(user)=>{
    try{
     const res = await axios.post("https://academics.newtonschool.co/api/v1/bookingportals/signup", 
      {...user, appType: "bookingportals"}, 
      config
    );
    console.log("res:", res)
    const token = res.data.token;
    if(token){
      sessionStorage.setItem("userToken", token)
      sessionStorage.setItem("userName", JSON.stringify(res.data.data.name))
      setIsLoggedIn(true);
      navigate("/flight")
    }
    }catch(err){
       console.log("Error: ", err);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    createUser(userDetails);
  }

  return (
    <form action='' className='form-container' onSubmit={handleFormSubmit}>
        <h2>SignUp</h2>
        <div>
      <label htmlFor='name'>Name: </label>
      <input id='name' type='text' placeholder='Enter your name' ref={nameRef}/>
      </div>

    <div>
      <label htmlFor='email'>Email: </label>
      <input id='email' type='email' placeholder='Email' ref={emailRef}/>
      </div>

    <div>
      <label htmlFor='password'>Password: </label>
      <input id='password' type='password' placeholder='Password' ref={passwordRef}/>
      </div>

        <div>
      <input type='submit' value="Signup"/>
      </div>
    </form>
  )
}
