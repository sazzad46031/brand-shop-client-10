import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import BrandCollection from "../../Components/BrandCollection/BrandCollection";


const Home = () => {
    const brands = useLoaderData()
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Banner></Banner>
            <h2 className="text-7xl mt-20  font-bold text-center text-purple-400">Our most popular brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-20">
                {
                    brands?.map(brand=> <BrandCollection key={brand.id} brand={brand}></BrandCollection>)
                }
            </div>
        </div>
    );
};

export default Home;