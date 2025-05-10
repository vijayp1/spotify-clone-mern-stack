import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiEye, FiEyeOff } from "react-icons/fi";
import { supabase } from '../utilities/SupabaseClient';

export default function SingupPage() {
    const navigate = useNavigate()
    const [emailID, mailChanged] = useState('')
    const [password, passChanged] = useState('')
    const [rePass, rePassChanged] = useState('')
    const [tab,tabChange] = useState(1)
    const [showPassword, setShowPassword] = useState(false)
    const [reShowPassword, setReShowPassword] = useState(false)
    const [name, NameChanged] = useState('')

    function checkIfNewEmail(){
        if(true){
            tabChange(2)
        }
    }
    function goBackTab(){
        tabChange(1)
    }
    async function signupUser() {
        if (!emailID || !password || !rePass) {
            alert('All fields are required.');
            return;
        }

        if (password !== rePass) {
            alert('Passwords do not match.');
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email: emailID,
            password: password,
            options: {
            data: {
                name: name
            }
            }
        });

        if (error) {
            console.error('Signup error:', error.message);
            alert(error.message);
            return;
        }
        alert("User Created")
        console.log('Signup success:', data);
        navigate('/login');
    }
    return (
        <div className='h-screen w-screen bg-[#121212] overflow-hidden flex justify-center text-white' id='signup-tab'>
            <div className='w-75 h-full flex flex-col justify-center items-center gap-y-2'>
                <img className="w-12 h-12 invert brightness-0" src="https://img.icons8.com/ios-filled/50/spotify.png" alt="spotify icon"/>
                {tab===1 ? ( 
                    <>
                        <h1 className='text-white font-bold text-[42px] text-center flex flex-wrap'>Sing up to <br/> start listening</h1><br/>
                        <h1 className='font-bold w-full mb-2'>Email address</h1>
                        <input value={emailID} type='email' className='border-1 w-full h-10 pl-2' placeholder='email@domain.com' onChange={e => mailChanged(e.target.value)}/><br/>
                        <button className='w-full rounded-full bg-green-400 text-black font-bold h-15' onClick={checkIfNewEmail}>Next</button>
                    </>  
                    
                ) : (
                <>
                    <div className='w-full flex justify-center h-[1px] bg-white mt-4'></div>
                    <button className='text-2xl mb-10 w-full text-left' onClick={goBackTab}>⟵</button>
                    <h1 className='font-bold w-full mb-2'>Name</h1>
                    <input value={name} type='text' className='border-1 w-full h-10 pl-2' placeholder='Enter your name here' onChange={e => NameChanged(e.target.value)}/>
                    <h1 className='font-bold w-full'>Password</h1>
                    <div className='w-full inline-flex'>
                        <input value={password} type={showPassword ? 'text' : 'password'} className='border-1 w-[90%] h-10 pl-2' onChange={e => passChanged(e.target.value)}/>
                        <button className='w-[10%] flex justify-center items-center border-y-1 border-r-1' onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}</button>
                    </div>
                    <h1 className='font-bold w-full mt-2'>Confirm Password</h1>
                    <div className='w-full inline-flex'>
                        <input value={rePass} type={reShowPassword ? 'text' : 'password'} className='border-1 w-[90%] h-10 pl-2' onChange={e => rePassChanged(e.target.value)}/>
                        <button className='w-[10%] flex justify-center items-center border-y-1 border-r-1' onClick={()=>setReShowPassword(!reShowPassword)}>{reShowPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}</button>
                    </div>
                    <button className='w-full rounded-full bg-green-400 text-black font-bold h-15 mt-4' onClick={signupUser}>Sign up</button>
                </>
                )}
            </div>
        </div>
    )
}
