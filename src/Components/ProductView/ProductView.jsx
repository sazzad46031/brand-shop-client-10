import { Link } from "react-router-dom";


const ProductView = ({ product }) => {
    const { name, brandName, type, price, shortDescription, rating, image } = product
    return (
        <div>

            <div>

                <img className="max-w-lg h-80" src={image} alt="" />
                <h3 className="text-2xl font-semibold mt-4 text-purple-400">Name : {name}</h3>
                <h2 className="text-2xl font-semibold mt-4 text-purple-400">Brand name : {brandName}</h2>
                <p className="text-2xl font-semibold mt-4 text-purple-400">Type : {type}</p>
                <p className="text-2xl font-semibold mt-4 text-purple-400">Price : {price}</p>
                <p className="text-2xl font-semibold mt-4 text-purple-400">Short description : {shortDescription}</p>
                <p className="text-2xl font-semibold mt-4 text-purple-400">Rating : {rating}</p>
                <div className="mt-4 mb-24">
                    <Link to={`/products/${product._id}`}>
                        <button className="btn btn-primary mr-4">Details</button>
                    </Link>
                    <Link to={`/productedit/${product._id}`}>
                        <button className="btn btn-secondary">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductView;