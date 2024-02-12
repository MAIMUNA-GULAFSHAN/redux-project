import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { add} from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    if (status === 'loading') {
        return <p>Loading...</p>
    }
    if (status === 'error') {
        return <p>Something went wrong ..try later dear...!!</p>
    }

    const addToCart = (product) => {
        dispatch(add(product));
    };
  
    const cards = products.map(product => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4" key={product.id}>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl h-full">
                <figure>
                    <img
                        src={product.image}
                        className="w-50 h-48 object-cover"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="text-sm">{product.title}</h2>
                    <p>INR: ₹ {product.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-center my-8">Product Dashboard</h1>
            <div className="flex flex-wrap -mx-4">{cards}</div>
        </div>
    );
};

export default Product;
