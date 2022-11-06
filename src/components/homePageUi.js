import Adverting from "./ui/adverting"
import Categories from "./ui/categories"
import IdeasPart from "./ui/ideas"
import NotifiedPart from "./ui/notified"
import SearchPart from "./ui/searchPart"
import TheBestItems from "./ui/TheBestItems"
import MostSelledItems from '../../pages/MostSelledItems/index';


const HomePageUi = () => {
    return (
        <>
            <Adverting />
            <Categories />
            <MostSelledItems />
            <TheBestItems />
            <IdeasPart />
            <SearchPart />
            <NotifiedPart />
        </>
    )
}
export default HomePageUi