const songList = [
    { image: 'Hit1.jpg', title: 'Song 1' },
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
export default function HomePage(){
    return(
        <div>
            <h3><mark>Trending Songs</mark></h3><hr/>
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