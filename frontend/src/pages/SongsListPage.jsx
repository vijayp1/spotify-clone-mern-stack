import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function SongsListPage() {
    
    const navigate = useNavigate()
    const { data, type } = useLoaderData()
    if(!data){
        navigate('/error')
    }
    function playSong(song){
        console.log(song)
        navigate('/song/'+song)
    }
    console.log("list log : ",data," type: ",type)
    let title
    let image
    let color
    let list
    let imageClass
    if(type==="artist"){
        title = data[0].title
        image= data[0].image
        color = data[0].list[0].color
        list = data[0].list
        imageClass = "rounded-full"
    }
    else{
        title = data[0].album
        image= data[0].image
        color = data[0].color
        list = data
        imageClass = "rounded"
    }
    console.log(list)
  return (
    <div className='relative'>
            <div className={`absolute top-0 left-0 w-full h-70 bg-gradient-to-t from-[#121212] bg-${color}-500`}></div>
            <div className={`relative z-10 inline-flex w-full h-70`}>
                <img draggable='false' className={`w-60 h-60 ${imageClass} mt-5 ml-5`} src={image} alt={title}/>
                <div className='w-full relative h-60 w-full h-50'>
                    <p className='font-bold text-[40px] absolute bottom-5 left-5'>{title}</p>
                </div>
            </div><br/><div className='w-[92%] h-[1px] bg-gray-400 ml-10 mr-10'></div><br/>
            <div className='w-full text-center my-5'>
                <table className='w-full border-separate border-spacing-y-4'>
                    <tbody>
                        {list.map((song,index)=>(
                            <tr key={song._id} onClick={()=>playSong(song._id)} className="cursor-pointer hover:bg-gray-500 transition duration-150 border border-gray-400">
                                <td className='w-[5%]'>{index+1}</td>
                                <td className='w-[5%]'><img draggable='false' className='' src={song.image} alt={song.title}/></td>
                                <td className='w-[10%] pl-2'>{song.title}</td>
                                <td>{song.album}</td>
                                <td>{song.ReleaseYear}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
    </div>
  )
}
