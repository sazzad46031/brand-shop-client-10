import { Link } from "react-router-dom";


const BrandCollection = ({brand}) => {
    const {brand_image, brand_name} = brand
    return (
        <div>
           <Link to={`/products/${brand._id}`}>
                <img className="w-96 h-64" src={brand_image} alt="" />
                <p className="text-4xl mt-4 font-bold">{brand_name}</p>  
           </Link>
        </div>
    );
};

export default BrandCollection;