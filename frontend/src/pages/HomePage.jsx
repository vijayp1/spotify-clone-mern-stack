import Footer from "../components/Footer";
import SongsList from "../components/SongsList";

const trendingSongs = [
    { image: 'https://i.scdn.co/image/ab67616d0000b273ec8e1f5da18069b24fb43694', title: 'Ramulo Ramula', artist:["Allu arjun","Pooja hegde"] },
    { image: 'https://i.ytimg.com/vi/5CPkqh1znqg/sddefault.jpg', title: 'Ticket Eh konakunda', artist:["Siddu Jonnalgadda","Anupama"] },
    { image: 'https://i.scdn.co/image/ab67616d0000b273b21d3fb220ac724c150b9d20', title: 'Bujji Thalli', artist:["Naga Chaitanya","Sai pallavi"] },
    { image: 'https://i.scdn.co/image/ab67616d0000b2731e5af7c5265c7ce91982b418', title: 'Nijamene Chebuthunna', artist:["Sandeep","Varsha"] },
    { image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/16/bf/a4/16bfa45c-4478-6662-b056-5b7828d73405/199066860069.jpg/1200x1200bf-60.jpg', title: 'Premalo' ,artist:['']},
    { image: 'https://i.ytimg.com/vi/6HFkkqOi9rQ/sddefault.jpg', title: 'Mallika Mallika', artist:["Samantha"] },
    { image: 'https://i.scdn.co/image/ab67616d0000b2731941b5d3dc0051a3d2f26e27', title: 'Daavudi', artist:["Jr.Ntr","Jahnvi Kapoor"] },
    { image: 'https://i.scdn.co/image/ab67616d00001e02abf9c31194b565141de416cb', title: 'Kissik', artist:["Allu arjun","Sreeleela","Rashmika"] },
    { image: 'https://i.scdn.co/image/ab67616d0000b27313d3cba7efa61cc97c8def1f', title: 'Undipo' , artist:["Ram pothineni","Nidhi agarwal"]},
    { image: 'https://i.scdn.co/image/ab67616d0000b2733c8b25c3c572ae975cbfa1d5', title: 'Acham Telugandham', artist:["Mahesh babu","Rakul"] },
    { image: 'https://i.ytimg.com/vi/vnA30oxqW5E/sddefault.jpg', title: 'Maastaru Maastaru' , artist:["Danush","Samyuktha menon"]},
    { image: 'https://i.ytimg.com/vi/QPSAjqjylTc/maxresdefault.jpg', title: 'Nasha', artist:["Tamanna"] },
    { image: 'https://i1.sndcdn.com/artworks-niAD5h4AGjZnTo3o-Mdn8ig-t500x500.jpg', title: 'AchaAcho', artist:["Tamanna"] }
];
export default function HomePage(){
    return(
        <div>
            <SongsList list={trendingSongs} title={'Trending songs'} type={'song'}/>
            <SongsList list={trendingSongs} title={'Popular Artists'} type={'artist'}/>
            <SongsList list={trendingSongs} title={'Popular Albums'} type={'albums'}/>
            <Footer/>
        </div>
    )
}