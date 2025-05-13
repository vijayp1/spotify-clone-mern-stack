import { Link, useNavigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../utilities/SupabaseClient";

export default function NavBar(){
    const { user } = useAuth()
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null);
    const navigate = useNavigate()
    async function logOutUser() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error("Logout error:", error.message);
            alert("Something went wrong during logout. Try again.");
            return;
        }

        // Clear client-side data if any
        alert("Successfully logged out");
        navigate('/login'); // Or route to login/home
    }
    useEffect(() => {
        function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpen(false);
        }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
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
            {!user ? (
                <div className="h-12 float-right inline-flex items-center">
                    <Link className="text-gray-400 mr-5" to='/signup'>Sign up</Link>
                    <Link className="rounded-full bg-white text-black w-25 h-10 bl-5 flex items-center justify-center" to='/login'>Log in</Link>
                </div>
            ) : (
                <div className="relative h-12 float-right inline-flex items-center" ref={menuRef}>
                    {/* Profile Icon */}
                    <img
                        className="w-12 h-12 cursor-pointer  invert brightness-0"
                        src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                        alt="user profile"
                        onClick={() => setOpen(prev => !prev)}
                    />

                    {/* Dropdown Menu */}
                    {open && (
                        <div className="absolute top-full right-0 mt-2 w-30 bg-white rounded shadow-md text-black z-50">
                            <div className="flex flex-col text-sm">
                                <Link className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-center" to="/profile">Profile</Link>
                                <button className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={logOutUser}>Log out</button>
                            </div>
                        </div>
                    )}
                </div>
            )}
            
        </nav>
    )
}