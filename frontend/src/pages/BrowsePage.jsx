const songList = [
    { image: 'Hit1.jpg', title: 'Melody' },
    { image: 'Hit2.jpg', title: 'Song 2' },
    { image: 'prema-velluva.jpg', title: 'Prema Velluva' },
    { image: 'Hit1.jpg', title: 'Song 1' },
    { image: 'Hit2.jpg', title: 'Song 2' },
    { image: 'prema-velluva.jpg', title: 'Prema Velluva' },
    { image: 'Hit1.jpg', title: 'Song 1' },
    { image: 'Hit2.jpg', title: 'Song 2' },
    { image: 'prema-velluva.jpg', title: 'Prema Velluva' },
    { image: 'Hit1.jpg', title: 'Song 1' },
    { image: 'Hit2.jpg', title: 'Song 2' },
    { image: 'prema-velluva.jpg', title: 'Prema Velluva' }
];
export default function BrowsePage(){
    return(
        <div className="rounded-xl bg-gray-900 h-full w-full m-1 text-center">
            <h3>Trending Songs</h3>
            <span className="inline-grid grid-cols-6 gap-4">
                {songList.map((song)=>(
                    <span className="w-1/5">
                        <img src={'assets/songs/${song.image}'}/>
                        <h6>{song.title}</h6>
                    </span>
                ))}
                
            </span>
        </div>
    )
}