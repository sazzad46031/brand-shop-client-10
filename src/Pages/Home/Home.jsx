import BrandCollection from "../../Components/BrandCollection/BrandCollection";
import Banner from "../../Components/Header/Banner/Banner";


const Home = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Banner></Banner>
            <h2 className="text-7xl mt-20  font-bold text-center text-purple-400">Home Page</h2>
            <BrandCollection></BrandCollection>
        </div>
    );
};

export default Home;