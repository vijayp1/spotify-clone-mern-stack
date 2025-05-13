import { useLoaderData } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";

export default function BrowsePage(){
    const { data } = useLoaderData()
    // const list = getBrowseList()
    return(
        <div>
            <CategoryList title={"Browse all"} list={data}/>
            <Footer/>
        </div>
    )
}