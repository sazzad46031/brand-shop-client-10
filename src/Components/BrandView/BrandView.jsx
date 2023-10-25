import { Link } from "react-router-dom";


const BrandView = ({brand}) => {
    const {brand_name, brand_image} = brand
    return (
        <div>
           <Link to={`/brands/${brand._id}`}>
                <div>
                    <img className="w-96 h-64" src={brand_image} alt="" />
                    <p className="text-4xl mt-4 font-bold">{brand_name}</p>
                </div>
           </Link>
        </div>
    );
};

export default BrandView;