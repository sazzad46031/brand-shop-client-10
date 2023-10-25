import { useLoaderData, useParams } from "react-router-dom";


const SingleProduct = () => {

    const { id } = useParams();
    const products = useLoaderData()
    console.log(products)
    const product = products.find(_product => _product._id === id);
    const { name, brandName, type, price, shortDescription, rating, image } = product
    return (
        <div className="max-w-screen-2xl mx-auto">
            <img src={image} alt="" />
            <h3>Name : {name}</h3>
            <h2>Brand name : {brandName}</h2>
            <p>Type : {type}</p>
            <p>Price : {price}</p>
            <p>Short description : {shortDescription}</p>
            <p>Rating : {rating}</p>
            <button className="btn btn-primary">Add to cart</button>
        </div>
    );
};

export default SingleProduct;