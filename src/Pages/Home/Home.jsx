
import BrandCollection from "../../Components/BrandCollection/BrandCollection";
import Contact from "../../Components/Contact/Contact";

import Banner from "../../Components/Header/Banner/Banner";
import Testimonial from "../../Components/Testimonial/Testimonial";




const Home = () => {
    
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Banner></Banner>
            
            <BrandCollection></BrandCollection>
            <Testimonial></Testimonial>
            <Contact></Contact>
            
            
        </div>
    );
};

export default Home;