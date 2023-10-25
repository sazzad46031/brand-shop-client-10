import { useEffect, useState } from "react";
import BrandView from "../BrandView/BrandView";


const BrandCollection = () => {

    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch("https://brand-shop-server-a727m45ha-sazzads-projects-085dcc12.vercel.app/brands")
            .then(response => response.json())
            .then(data => setBrands(data))
    }, []);

    return (
        <div>
            <h2 className="text-7xl mt-20  font-bold text-center text-purple-400">Our most popular brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-20">

                {brands?.map(brand => <BrandView key={brand._id} brand={brand}></BrandView>)}
            </div>
        </div>
    );
};

export default BrandCollection;