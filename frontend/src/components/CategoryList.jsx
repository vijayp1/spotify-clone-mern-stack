import { useNavigate } from "react-router-dom"

export default function CategoryList(props){
    const navigate = useNavigate()
    const colors = [
        'bg-red-500',
        'bg-green-500',
        'bg-blue-500',
        'bg-yellow-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-indigo-500',
        'bg-orange-500',
        'bg-teal-500',   
        'bg-emerald-500',
        'bg-cyan-500',   
        'bg-rose-500',   
        'bg-lime-500'
      ];
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
            <div className="grid grid-cols-4 gap-4 overflow-hidden">
                {list.map((catg)=>{
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    return(
                        <div className={`h-40 ${randomColor}`}>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}