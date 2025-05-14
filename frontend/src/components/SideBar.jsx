import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function SideBar(){
    let navigate = useNavigate()
    const user = useAuth()
    function createPlaylist(){
        if(user.user){
            navigate("/create-playlist")
        }
        else{
            navigate("/login")
        }
    }
    return(
        <>
            <div className="inline-flex w-full h-15 p-3">
                <div className="w-[90%] text-lg">
                    <h1><b>Your Library</b></h1>
                </div>
                <button className="w-auto text-2xl text-gray-400">+</button>
            </div><br/>
            <div className="p-2">
                <div className="rounded-xl w-full h-35 p-3 bg-[#1F1F1F]">
                    <h2><b>Create your first playlist</b></h2>
                    <p className="text-sm mt-2">it's easy, we'll help you</p>
                    <button className="text-sm text-black bg-white rounded-full mt-5 px-5 py-2" onClick={createPlaylist}><b>Browse playlist</b></button>
                </div>
            </div><br/>
            <div className="p-2">
                <div className="rounded-xl w-full h-35 p-3 bg-[#1F1F1F]">
                    <h2><b>Let's find some podcasts to follow</b></h2>
                    <p className="text-sm mt-2">We'll keep you updated on new episodes</p>
                    <button className="text-sm text-black bg-white rounded-full mt-5 px-5 py-2"><b>Browse podcasts</b></button>
                </div>
            </div>
            <div className="p-2">
                <div className="text-[13px] rounded-xl w-full p-3 text-gray-400">
                    <div className="inline-flex">
                        <p className="px-1 py-1">Legal</p>
                        <p className="px-1 py-1">Safety & privacy center</p>
                        <p className="px-1 py-1">Privacy policy</p>
                    </div><br/>
                    <div className="inline-flex">
                        <p className="px-1 py-1">Cookies</p>
                        <p className="px-1 py-1">About ads</p>
                        <p className="px-1 py-1">Accessibility</p>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <button className="text-sm rounded-full mt-5 px-5 py-2 border-white border-1 inline-flex items-center justify-center">
                    <img className="w-5 h-5 invert brightness-0" src="https://img.icons8.com/ios/50/globe--v1.png" alt="Language change"/>
                    <b className="ml-2">English</b>
                </button>
            </div>
        </>
    )
}