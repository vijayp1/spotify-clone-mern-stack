import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";

const browseList = [
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
    { image: 'prema-velluva.jpg', title: 'Prema Velluva' },
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
        <div>
            <CategoryList title={"Browse all"} list={browseList}/>
            <Footer/>
        </div>
    )
}