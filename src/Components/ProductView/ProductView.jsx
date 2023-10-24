

const ProductView = ({ product }) => {
    const { name, brandName, type, price, shortDescription, rating, image } = product
    return (
        <div>
            
            <div className="single-product">

                <img className="max-w-lg h-80" src={image} alt="" />
                <h3>Name : {name}</h3>
                <h2>Brand name : {brandName}</h2>
                <p>Type : {type}</p>
                <p>Price : {price}</p>
                <p>Short description : {shortDescription}</p>
                <p>Rating : {rating}</p>
                <button className="btn btn-primary mr-4">Details</button>
                <button className="btn btn-secondary">Update</button>
            </div>
        </div>
    );
};

export default ProductView;