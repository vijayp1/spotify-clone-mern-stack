import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import SongsList from "../components/SongsList";

export default function HomePage(){
    const { artists, songs }= useLoaderData()
    const albumsMap = new Map();

    for (const song of songs) {
        if (!albumsMap.has(song.album)) {
            albumsMap.set(song.album, {
            title: song.album,
            image: song.image,
            });
        }
    }

    const albums = Array.from(albumsMap.values());
    return(
        <div>
            <SongsList list={songs} title={'Trending songs'} type={'song'}/>
            <SongsList list={artists} title={'Popular Artists'} type={'artist'}/>
            <SongsList list={albums} title={'Popular Albums'} type={'album'}/>
            <Footer/>
        </div>
    )
}