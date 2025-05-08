import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="inline-flex items-center justify-between w-full m-1 px-4 shadow">
            <div className="inline-flex float-left">
                <img className="w-12 h-12" src="https://img.icons8.com/fluency/48/spotify.png" alt="spotify" />
                <div className="w-12 h-12 item-center ml-5 bg-[#2F2F2F] rounded-full  flex items-center justify-center">
                    <Link to='/'>
                        <img className="w-6 h-6 invert brightness-0" src="https://img.icons8.com/ios-filled/50/home.png" alt="home"/>
                    </Link>
                </div>
                <div className="ml-5 rounded-full inline-flex items-center bg-[#2F2F2F] w-140 h-12">
                    <input className="w-[85%] pl-4" type="text" placeholder="What do you want to play?" />
                    <div className="h-6 w-px bg-gray-400 mx-4"></div>
                    <Link className="w-auto pt-5 pb-5 mr-2" to='/browse'>
                        <img className="w-6 h-6 invert brightness-0" src="https://img.icons8.com/fluency-systems-regular/48/shopping-basket-2.png" alt="browse genres"/>
                    </Link>
                </div>
            </div>
            <div className="h-12 float-right inline-flex items-center">
                <Link className="text-gray-400 mr-5" to='/signup'>Sign up</Link>
                <Link className="rounded-full bg-white text-black w-25 h-10 bl-5 flex items-center justify-center" to='/login'>Log in</Link>
            </div>
            
        </nav>
    )
}