import { Link, useLoaderData, useParams } from "react-router-dom";


const SingleProduct = () => {

    const { id } = useParams();
    const products = useLoaderData()
    console.log(products)
    const product = products.find(_product => _product._id === id);
    const { name, brandName, type, price, shortDescription, rating, image } = product
    return (
        <div className="max-w-screen-2xl mx-auto">
            <img src={image} alt="" />
            <h3 className="text-2xl font-semibold mt-4 text-purple-400">Name : {name}</h3>
            <h2 className="text-2xl font-semibold mt-4 text-purple-400">Brand name : {brandName}</h2>
            <p className="text-2xl font-semibold mt-4 text-purple-400">Type : {type}</p>
            <p className="text-2xl font-semibold mt-4 text-purple-400">Price : {price}</p>
            <p className="text-2xl font-semibold mt-4 text-purple-400">Short description : {shortDescription}</p>
            <p className="text-2xl font-semibold mt-4 text-purple-400">Rating : {rating}</p>
            <Link to="/mycart">
                <button className="btn btn-primary mt-4 mb-24">Add to cart</button>
            </Link>
        </div>
    );
};

export default SingleProduct;