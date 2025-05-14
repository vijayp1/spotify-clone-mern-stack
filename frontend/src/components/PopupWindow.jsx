import React, { useState } from 'react';
import { supabase } from '../utilities/SupabaseClient';
import axios from 'axios';

const { data: { session } } = await supabase.auth.getSession();
const accessToken = session?.access_token;
export default function PopupWindow({isOpen, OpenPopup}) {
    const [ playlistName, SetInputData ] = useState('')

    async function handleContinue() {
        
        SetInputData(playlistName)
        if(playlistName){
            console.log(playlistName)
            await axios.get('/api/createPlaylist/'+playlistName,{
                      headers: {
                        Authorization: `Bearer ${accessToken}`,
                      }
                    })
            OpenPopup(false)
        }
        else{
            alert("please enter playlist name")
        }
    }

    return (
        <div>
        {isOpen && (
            <div className='fixed inset-0 w-screen h-screen flex items-center justify-center z-50 overflow-hidden'>
                <div className='bg-[#3F3F3F] w-100 h-45 rounded-2xl'>
                    <div className='w-full h-[80%] flex flex-col items-center justify-center'>
                        <h1>Enter Playlist name</h1>
                        <input type='text' className='pl-2 outline-hidden bg-[#2F2F2F] w-[92%] rounded-full h-10' value={playlistName} onChange={e => SetInputData(e.target.value)}/>
                    </div>
                    <div className='inline-flex w-full h-[20%] gap-x-6 items-center justify-center'>
                        <button className='bg-red-400 w-[40%] mb-2 p-2 rounded-full cursor-pointer' onClick={()=>OpenPopup(false)}>Close</button>
                        <button className='bg-green-400 w-[40%] mb-2 p-2 rounded-full cursor-pointer' onClick={()=>handleContinue()}>Continue</button>
                    </div>
                </div>
            </div>



            // <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            // <div className="bg-white rounded-lg shadow-lg p-6 w-[30%] max-w-md">
            //     <h2 className="text-xl font-semibold mb-4">Enter Playlist name</h2>
            //     <input
            //     type="text"
            //     value={inputValue}
            //     onChange={(e) => setInputValue(e.target.value)}
            //     className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            //     placeholder="Type name"
            //     />
            //     <div className="flex justify-end gap-2">
            //     <button
            //         className="px-4 py-2 bg-red-300 rounded"
            //         onClick={() => isOpen = false}
            //     >
            //         Close
            //     </button>
            //     <button
            //         className="px-4 py-2 bg-green-600 text-white rounded"
            //         onClick={handleContinue}
            //     >
            //         Continue
            //     </button>
            //     </div>
            // </div>
            // </div>
        )}
        </div>
    );
}
