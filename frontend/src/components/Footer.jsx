import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div>
            <div className="inline-flex w-full h-auto p-10">
                <div className="flex flex-col gap-y-2 w-[20%]">
                    <h1 className="font-bold">Company</h1>
                    <Link to="/about">About</Link>
                    <Link to="/about">Jobs</Link>
                    <Link to="/about">For the record</Link>
                </div>
                <div className="flex flex-col gap-y-2 w-[20%]">
                    <h1 className="font-bold">Communities</h1>
                    <Link to="/about">For Artists</Link>
                    <Link to="/about">Developers</Link>
                    <Link to="/about">Advertising</Link>
                    <Link to="/about">Investors</Link>
                    <Link to="/about">Vendors</Link>
                </div>
                <div className="flex flex-col gap-y-2 w-[20%]">
                    <h1 className="font-bold">Useful Links</h1>
                    <Link to="/about">Support</Link>
                    <Link to="/about">Free Mobile App</Link>
                </div>
                <div className="flex flex-col gap-y-2 w-[20%]">
                    <h1 className="font-bold">Spotify Plans</h1>
                    <Link to="/about">Premium Individual</Link>
                    <Link to="/about">Premium Duo</Link>
                    <Link to="/about">Premium Family</Link>
                    <Link to="/about">Premium Student</Link>
                    <Link to="/about">Spotify Free</Link>
                </div>
                <div className="flex justify-end gap-y-2 w-[20%]">
                    <div className="w-8 h-8 item-center ml-5 bg-[#2F2F2F] rounded-full  flex items-center justify-center">
                        <Link to='https://instagram.com/spotify'>
                            <img className="w-5 h-5 invert brightness-0" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram link"/>
                        </Link>
                    </div>
                    <div className="w-8 h-8 item-center ml-5 bg-[#2F2F2F] rounded-full  flex items-center justify-center">
                        <Link to='https://twitter.com/spotify'>
                            <img className="w-5 h-5 invert brightness-0" src="https://img.icons8.com/ios/50/twitterx--v1.png" alt="twitterx link"/>
                        </Link>
                    </div>
                    <div className="w-8 h-8 item-center ml-5 bg-[#2F2F2F] rounded-full  flex items-center justify-center">
                        <Link to='https://facebook.com/Spotify'>
                            <img className="w-5 h-5 invert brightness-0" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook link"/>
                        </Link>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="text-sm text-gray-500 w-50 h-full p-7 pb-35">
                <p>© 2025 Spotify AB</p>
            </div>
        </div>
    )
}