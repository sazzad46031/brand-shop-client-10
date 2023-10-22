import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;