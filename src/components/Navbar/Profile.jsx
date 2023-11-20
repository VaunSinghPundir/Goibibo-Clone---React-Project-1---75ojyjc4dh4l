import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

export const Profile = () => {
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const navigate = useNavigate();
    const {isLoggedIn} = useContext(AuthContext)
    const userName = JSON.parse(sessionStorage.getItem("user"))

   const handleNavigate = (path)=>{
    navigate(path);
    setIsProfileVisible(false)   
   }

   const logout = () =>{
    console.log()
   }

    return (
    <section>
    <section className='profile-icon-container' onClick={()=>setIsProfileVisible(!isProfileVisible)}>
        <section className='profile-icon'>
            <FontAwesomeIcon icon={faUser} />
        </section>
        {isLoggedIn && <span>{userName}</span>}
    </section>
    { isProfileVisible &&
    <section className='auth-Modle'>
        {isLoggedIn ? <>
            <button onClick={()=> handleNavigate('/myprofile')}>profile</button>
        <button onClick={logout}>Logout</button>
        </> : 
        <>
        <button onClick={()=> handleNavigate('/login')}>Login</button>
        <button onClick={()=> handleNavigate('/signup')}>Signup</button>
        </>
    }
    </section>
    }
    </section>
  )
}
