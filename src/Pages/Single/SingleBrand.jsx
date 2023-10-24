import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductView from "../../Components/ProductView/ProductView";
import { register } from 'swiper/element/bundle';
register();

const SingleBrand = () => {

    const { id } = useParams();
    const brands = useLoaderData()
    const brand = brands.find( _brand => _brand._id === id );
    
    const [ products, setProducts] = useState([])

    useEffect( () => {
        fetch("http://localhost:5000/products")
        .then(response => response.json())
        .then( _products => {
            let brandProducts = _products.filter( _product => _product.brandName === brand.brand_name );
            if ( brandProducts.length ) setProducts( brandProducts );
        })
    }, []);

    if ( products.length ) {
        return (
            <div  className="max-w-screen-2xl mx-auto">
                
            <swiper-container slides-per-view="3" speed="500" loop="true">
                {
                    products.map(product=> <swiper-slide key={product._id}><ProductView product={product}>{product.image}</ProductView></swiper-slide>)
                }
            </swiper-container>
            </div>
        );
    } else {
        return (
            <div>No Product found</div>
        )
    }

};

export default SingleBrand;