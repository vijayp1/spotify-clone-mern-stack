import React, { useState } from 'react'
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utilities/SupabaseClient';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [emailID, mailChanged] = useState('')
  const [password, passChanged] = useState('')
  const navigate = useNavigate()

  async function logInUser() {
    if (!emailID || !password) {
      alert("Please provide login details");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailID,
        password: password,
      });

      if (error) {
        console.error("Login error:", error.message);
        alert(error.message);  // Provide user-friendly feedback
        return;
      }

      alert("Login successful");
      console.log("User session:", data);
      navigate('/');
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Try again later.");
    }
  }

  return (
    <div className='h-screen w-screen bg-[#121212] overflow-hidden flex justify-center text-white' id='signup-tab'>
      <div className='w-75 h-full flex flex-col justify-center items-center gap-y-2'>
          <img className="w-12 h-12 invert brightness-0" src="https://img.icons8.com/ios-filled/50/spotify.png" alt="spotify icon"/>
          <h1 className='text-white font-bold text-[38px] text-center flex flex-wrap'>Login to Spotify</h1><br/>
          <h1 className='font-bold w-full mb-2'>Email address</h1>
          <input value={emailID} type='email' className='border-1 w-full h-10 pl-2' placeholder='email@domain.com' onChange={e => mailChanged(e.target.value)}/><br/>
          <h1 className='font-bold w-full mb-2'>Password</h1>
          <div className='w-full inline-flex'>
            <input value={password} type={showPassword ? 'text' : 'password'} className='border-1 w-[90%] h-10 pl-2' onChange={e => passChanged(e.target.value)}/>
            <button className='w-[10%] flex justify-center items-center border-y-1 border-r-1' onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}</button>
          </div>
          <button className='w-full rounded-full bg-green-400 text-black font-bold h-15 mt-4' onClick={logInUser}>Log in</button>
      </div>
    </div>
  )
}
