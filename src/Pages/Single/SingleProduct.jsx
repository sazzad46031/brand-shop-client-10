import { useLoaderData, useParams } from "react-router-dom";


const SingleProduct = () => {

    const { id } = useParams();
    const products = useLoaderData()
    const product = products.find( _product => _product._id === id );

    return (
        <div>
            
        </div>
    );
};

export default SingleProduct;