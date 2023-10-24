import { useEffect, useState } from "react";
import BrandView from "../BrandView/BrandView";


const BrandCollection = () => {

    const [ brands, setBrands] = useState([])

    useEffect( () => {
        fetch("http://localhost:5000/brands")
        .then(response => response.json())
        .then(data => setBrands(data))
    }, []);

    return (
        <div>
           
            { brands?.map( brand => <BrandView key={ brand._id } brand={brand}></BrandView> ) }
        </div>
    );
};

export default BrandCollection;