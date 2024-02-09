import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { add } from "../store/cartSlice";

const Product = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((data) => data.json())
            .then((result) => setProducts(result));
    }, []);

    const addToCart = (product) => {
        dispatch(add(product));
    };

    const cards = products.map(product => (
        <div className="m-10" key={product.id}>
            <div className="card w-96 bg-base-100 shadow-xl flex h-100">
                <figure>
                    <img
                        src={product.image}
                        style={{ width: "190px", height: "180px" }}
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2>{product.title}</h2>
                    <p>INR: ₹ {product.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Product Dashboard</h1>
            <div className="row">{cards}</div>
        </div>
    );
};

export default Product;
