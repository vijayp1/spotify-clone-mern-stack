import { Link, useNavigate } from "react-router-dom"

export default function CategoryList(props){
    const navigate = useNavigate()
    
    if(!props){
        navigate("/error")
    }
    let title = props.title
    let list = props.list
    if(!title || !list){
        navigate("/error")
    }
    return(
        <div className="p-5">
            <h1 className="text-[24px] font-bold pt-3">Browse all</h1><br/>
            <div className="grid grid-cols-4 gap-5 overflow-hidden">
                {list.map((catg)=>(
                        <Link draggable='false' to={`/genre/${catg.title}`}>
                            <div className={`relative overflow-hidden pt-3 pl-3 rounded-xl h-40 ${catg.color}`}>
                                <img draggable='false' className="absolute right-[-10px] bottom-[-10px] w-32 h-32 rotate-20 object-cover pointer-events-none select-none" src={catg.image} alt={catg.title}/>
                                <h1 className="relative z-10 font-bold text-[20px]">{catg.title}</h1>
                            </div>
                        </Link>
                    )
                )}
            </div>
        </div>
    )
}