import { Link } from "react-router-dom";


const BrandView = ({brand}) => {
    const {brand_name, brand_image} = brand
    return (
        <div>
           <Link to={`/brands/${brand._id}`}>
                <div>
                    <img src={brand_image} alt="" />
                    <p>{brand_name}</p>
                </div>
           </Link>
        </div>
    );
};

export default BrandView;