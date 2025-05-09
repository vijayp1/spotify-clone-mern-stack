import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";
const browseList = [
    { image: 'https://musictech.com/wp-content/uploads/2021/01/spotify-airpods@1400x1050.jpg', title: 'Music', bg: 'bg-orange-500' },
    { image: 'https://i.scdn.co/image/ab67656300005f1f4f0f2dd97c0e28058348ae30', title: 'Podcasts', bg: 'bg-blue-500' },
    { image: 'https://i.ytimg.com/vi/26-1haJLTmg/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gOChSMA8=&rs=AOn4CLCPT0xvWxJUgBbMt7GUYBjI7Zwmzg', title: 'Hindi', bg: 'bg-emerald-500' },
    { image: 'https://i.ytimg.com/vi/28er1wF-rvo/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCu5HtEwr0lE9FblYity8w8QnCMiw', title: 'Telugu', bg: 'bg-pink-500' },
    { image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84dd4d7f362c12e97deac92829', title: 'English', bg: 'bg-indigo-500' },
    { image: 'https://i.scdn.co/image/ab67656300005f1f2fe8ac51891446840c67ab3e', title: 'Business', bg: 'bg-lime-500' },
    { image: 'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_in_default.jpg', title: 'Trending Songs', bg: 'bg-teal-500' },
    { image: 'https://i.scdn.co/image/ab67706f0000000208dc478ff3e930553f46b9eb', title: 'Meditation', bg: 'bg-yellow-500' },
    { image: 'https://i.scdn.co/image/ab67706f00000002f3efe948835d5bd3b408550d', title: 'Decades', bg: 'bg-purple-500' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuOocU2ArDcEUnF7ac5JX9YPsojHr41w4BA&s', title: 'Gaming', bg: 'bg-cyan-500' },
  ];
  
export default function BrowsePage(){
    return(
        <div>
            <CategoryList title={"Browse all"} list={browseList}/>
            <Footer/>
        </div>
    )
}