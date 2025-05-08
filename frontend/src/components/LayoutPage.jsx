import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";

export default function LayoutPage(){
    //#2F2F2F
    //#121212
    //#1F1F1F
    return(
        <div className="h-screen w-screen flex flex-col bg-black text-white">
            <div className="h-[8%] bg-black">
                <NavBar/>
            </div>
            <div className="h-full w-full inline-flex">
                <div className="rounded-xl w-[28%] bg-[#121212] text-white h-full m-1 ml-3 mt-1 pb-5">
                    <SideBar/>
                </div>
                <div className="rounded-xl h-full w-[78%] bg-[#121212] text-white m-1 ml-1 mt-1 overflow-y-auto stylish-scrollbar pb-5">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}