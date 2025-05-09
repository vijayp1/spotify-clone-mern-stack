import React, { useState } from 'react'

export default function SingupPage() {
    const [emailID, mailChanged] = useState('')
    const [password, passChanged] = useState('')
    const [rePass, rePassChanged] = useState('')
    const [tab,tabChange] = useState(1)
    function checkIfNewEmail(){
        if(true){
            tabChange(2)
        }
    }
    function signupUser(){
        if(emailID && password && rePass){
            console.log("created user")
        }
    }
    return (
        <div className='h-screen w-screen bg-[#121212] overflow-hidden flex justify-center' id='signup-tab'>
            <div className='bg-green-400 w-90 h-full flex flex-col justify-center items-center gap-y-2'>
                <img className="w-12 h-12 invert brightness-0" src="https://img.icons8.com/ios-filled/50/spotify.png" alt="spotify icon"/>
                {tab===1 ? ( 
                    <>
                        <h1 className='text-white font-bold text-[42px] text-center flex flex-wrap'>Sing up to <br/> start listening</h1><br/>
                        <form>
                            <h1>Email address</h1>
                            <input value={emailID} onChange={e => mailChanged(e.target.value)}/>
                            <button onClick={checkIfNewEmail}>Next</button>
                        </form>
                    </>  
                    
                ) : (
                <form>
                    <h1>Password</h1>
                    <input value={password} onChange={e => passChanged(e.target.value)}/>
                    <h1>Confirm Password</h1>
                    <input value={rePass} onChange={e => rePassChanged(e.target.value)}/>
                    <button onClick={signupUser}>Next</button>
                </form>
                )}
            </div>
        </div>
    )
}
