
import BrandCollection from "../../Components/BrandCollection/BrandCollection";
import Banner from "../../Components/Header/Banner/Banner";



const Home = () => {
    
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Banner></Banner>
            
            <BrandCollection></BrandCollection>
        </div>
    );
};

export default Home;