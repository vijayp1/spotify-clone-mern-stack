import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function SelectedCategoryPage() {
    function getData(id){
        let sampledatafrommongo = {
            title:"Podcasts",
            color:"bg-blue-500"
        }
        return sampledatafrommongo
    }
    const navigate = useNavigate()
    const id = useParams()
    let data = getData(id)
    if(!data){
        navigate("/error")
    }
    
    return (
        <>
            <div className={`absolute w-[72%] h-70 bg-gradient-to-t from-[#121212] ${data.color}`}>

            </div>
            <div className={`w-full relative h-60 font-bold text-[100px] w-full h-60`}>
                <p className='absolute bottom-5 left-5'>{data.title}</p>
            </div>
            <div className={`w-full h-10 font-bold text-[100px]`}>
            </div>
        </>
    )
}
