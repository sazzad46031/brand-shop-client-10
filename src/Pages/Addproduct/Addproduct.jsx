import Swal from 'sweetalert2'
import { useLoaderData } from "react-router-dom";

const Addproduct = () => {

    const brands = useLoaderData();
    
    const handleAddProduct = event =>{
        event.preventDefault()
        const form = event.target
        const name =form.name.value
        const brandName =form.brandName.value
        const type =form.type.value
        const price =form.price.value
        const shortDescription =form.shortDescription.value
        const rating =form.rating.value
        const image =form.image.value

        const newProduct = { name, brandName, type, price, shortDescription, rating, image }
        console.log(newProduct)
        fetch(' https://brand-shop-server-a727m45ha-sazzads-projects-085dcc12.vercel.app/products',{
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newProduct)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Product added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


    

    return (
        <div className="bg-lime-200 max-w-screen-2xl mx-auto p-24">
            <h2 className="text-5xl text-purple-400 font-bold mb-8 text-center">Add Product</h2>
            <form onSubmit={handleAddProduct}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" placeholder="Brand Name" name="brandName" className="input w-full input-bordered" />
                    </div>
                    

                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <input type="text" placeholder="Type" name="type" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" className="input w-full input-bordered" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <input type="text" placeholder="Short description" name="shortDescription" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" name="rating" className="input w-full input-bordered" />
                    </div>
                </div>
                    <div className="form-control w-full mb-8">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" placeholder="Image" name="image" className="input w-full input-bordered" />
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-block bg-purple-400" />
            </form>
        </div>
    );
}

export default Addproduct;