
import BrandCollection from "../../Components/BrandCollection/BrandCollection";
import Contact from "../../Components/Contact/Contact";

import Banner from "../../Components/Header/Banner/Banner";
import Testimonial from "../../Components/Testimonial/Testimonial";
import useTheme from "../../Components/Toggletheme";




const Home = () => {
    
    function ThemeButton() {
        const { toggleTheme } = useTheme()
    
        return (
            <button onClick={toggleTheme} className="btn btn-success">Change Theme</button>
        )
    }

    return (
        <div className="max-w-screen-2xl mx-auto">
            {ThemeButton()}
            <Banner></Banner>
            
            <BrandCollection></BrandCollection>
            <Testimonial></Testimonial>
            <Contact></Contact>

            
            
            
        </div>
    );
};

export default Home;