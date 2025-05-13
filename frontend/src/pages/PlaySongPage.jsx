import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { usePlayer } from '../contexts/PlayContext';
import { supabase } from '../utilities/SupabaseClient';
import Footer from '../components/Footer';
import SongsList from '../components/SongsList';
import axios from 'axios';

export default function PlaySongPage() {
    const { isPlaying, setIsPlaying } = usePlayer();
    const { data, artists } = useLoaderData()
    function playSelectedMusic(){
        try{
            setIsPlaying(data)
        }
        catch(error){
            console.log(error.message)
        }
    }
    // async function handleUpload(e) {
    //     const file = e.target.files[0];

    //     const { data, error } = await supabase
    //         .storage
    //         .from('spotify-songs')
    //         .upload(`Jack/${file.name}`, file, {
    //         contentType: file.type,
    //         upsert: false,
    //         });

    //     if (error) console.error(error);
    //     else console.log("Uploaded:", data);
    // }
    return (
        <div className='relative'>
            {/* <input type="file" onChange={handleUpload} /> */}
            <div className={`absolute top-0 left-0 w-full h-70 bg-gradient-to-t from-[#121212] bg-${data.color}-500`}></div>
            <div className={`relative z-10 inline-flex w-full h-70`}>
                <img draggable='false' className=" w-60 h-60 rounded mt-5 ml-5" src={data.image} alt={data.title}/>
                <div className='w-full relative h-60 w-full h-50'>
                    <p className='font-bold text-[40px] absolute bottom-5 left-5'>{data.title}</p>
                    <div className='absolute inline-flex gap-x-5 bottom-1 left-5'>
                        {artists.map((artist)=>(
                            <>
                                <p>{artist.title}</p>
                                <p>•</p>
                            </>
                        ))}
                        <p>{data.ReleaseYear}</p>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='inline-flex w-full h-20 gap-y-4'>
                    <button onClick={playSelectedMusic}>
                        <img className='w-15 h-15 m-2' draggable='false' src='https://img.icons8.com/flat-round/64/play--v1.png' alt='play button'/>
                    </button>
                    <img className='w-8 h-8 m-6 invert' draggable='false' src='https://img.icons8.com/ios/50/add--v1.png' alt='add to playlist'/>
                </div>
            </div><br/><div className='w-[92%] h-[1px] bg-gray-400 ml-10 mr-10'></div><br/>
            <SongsList list={artists} title={'Artists'} type={'artist'}/>
            <Footer/>
        </div>
    )
}
