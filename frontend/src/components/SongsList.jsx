import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

export default function SongsList(props){
    const navigate = useNavigate();
    const [limit,setLimit] = useState(10)
    if(!props){
        navigate("/error")
    }
    
    let list = props && props.list
    let title = props && props.title
    let type = props && props.type
    function selectOption(song){
        if(type==="artist"){
            navigate("/collection/artist/"+song._id)
        }
        else if(type==="album"){
            navigate("/collection/album/"+song.title)
        }
        else if(type==="song"){
            navigate("/song/"+song._id)
        }
    }
    if(!list || !title || !type){
        navigate("/error")
    }
    let sectionClass=""
    let imageClass=""
    if(type==="artist"){
        imageClass="w-40 h-40 object-cover rounded-full"
        sectionClass="flex-none p-2 w-50 h-60 cursor-pointer hover:bg-[#2F2F2F]"
        
    }
    else{
        imageClass="w-50 h-30 object-cover rounded"
        sectionClass="flex-none p-2 w-50 h-50 cursor-pointer hover:bg-[#2F2F2F]"
    }
    return(
        <div className="p-5">
            <div className="flex justify-between items-center">
                <h1 className="text-[23px]"><b>{title}</b></h1>
                {list.length > limit ? 
                (<button className="text-sm font-bold text-gray-400 cursor-pointer" onClick={()=>{setLimit(limit+10)}}>Show more</button>)
                : ""}
            </div>
            <div className="flex overflow-x-auto no-scrollbar">
                {list.slice(0,limit).map((song)=>(
                    <button className={sectionClass} onClick={()=>selectOption(song)}>
                        <img draggable='false' className={imageClass} src={song.image} alt={song.title}/>
                        <h6>{song.title}</h6>
                    </button>
                ))}
                
            </div>
        </div>
    )
}