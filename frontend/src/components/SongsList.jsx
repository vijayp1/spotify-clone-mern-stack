import { Link, useNavigate } from "react-router-dom"

export default function SongsList(props){
    const navigate = useNavigate();
    if(!props){
        navigate("/error")
    }
    let list = props && props.list
    let title = props && props.title
    let type = props && props.type
    if(!list || !title || !type){
        navigate("/error")
    }
    let sectionClass=""
    let imageClass=""
    if(type==="artist"){
        imageClass="w-40 h-40 object-cover rounded-full"
        sectionClass="flex-none p-2 w-50 h-60"
        
    }
    else{
        imageClass="w-50 h-30 object-cover rounded"
        sectionClass="flex-none p-2 w-50 h-50"
    }
    return(
        <div className="p-5">
            <div className="flex justify-between items-center">
                <h1 className="text-[23px]"><b>{title}</b></h1>
                <Link className="text-sm font-bold text-gray-400" to={`/song/${title}`}>Show all</Link>
            </div>
            <div className="flex overflow-x-auto no-scrollbar">
                {list.map((song)=>(
                    <div className={sectionClass}>
                        <img draggable='false' className={imageClass} src={song.image} alt={song.title}/>
                        <h6>{song.title}</h6>
                        <div className="inline-flex gap-1">
                            {type==="artist" ? "Artist" : song.artist.map((a)=>(
                                <p className="text-[10px]">{a}</p>
                            ))}
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}