import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import PopupWindow from '../components/PopupWindow'

export default function CreatePlaylistPage() {
  const { data } = useLoaderData()
  const [ open, OpenPopup] = useState(false)
  const navigate = useNavigate()
  if(!data || data.length<=0){
    navigate("/error")
  }
  return (
    <>
      {open &&
      <PopupWindow isOpen={open} OpenPopup={OpenPopup}></PopupWindow>
      }
      <div className='relative'>
        <div className='absolute top-0 left-0 w-full h-70 bg-gradient-to-t from-[#121212] bg-blue-500'></div>
        <div className={`relative z-10 inline-flex w-full h-70`}>
            <div className='w-full relative h-60 w-full h-50'>
                <p className='font-bold text-[40px] absolute bottom-5 left-5'>Playlists</p>
                <button className='absolute bottom-5 right-5' onClick={()=>OpenPopup(true)}>
                  <img className='w-8 h-8 m-6 invert' draggable='false' src='https://img.icons8.com/ios/50/add--v1.png' alt='add to playlist'/>
                </button>
            </div>
        </div><br/><div className='w-[92%] h-[1px] bg-gray-400 ml-10 mr-10'></div><br/>
        <div className='w-full text-center my-5'>
          <table className='w-full border-separate border-spacing-y-4'>
              <tbody>
                {data.map((song,index)=>(
                    <tr key={song._id} onClick={()=>playSong(song._id)} className="cursor-pointer hover:bg-gray-500 transition duration-150 border border-gray-400">
                        <td className='w-[5%]'>{index+1}</td>
                        <td className='w-[20%] pl-2'>{song.title}</td>
                        <td className='w-[25%]'>{`${song.songs.length} total songs`}</td>
                        <td><button className='bg-red-400 p-2'>Delete</button></td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
        <Footer/>
      </div>
    </>
  )
}
