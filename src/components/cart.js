import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import {remove} from '../store/cartSlice'

const Cart = () => {
  // Access the cart state from the Redux store
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const removeToCart = (id)=>{
   dispatch(remove(id));
  }
  const cards = products.map(product => (
    <div className="m-10" key={product.id}>
        <div className="card w-{70%} bg-base-100 shadow-xl flex h-100">
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
                    <button className="btn btn-error" onClick={()=>removeToCart(product.id)}>Remove Item</button>
                </div>
            </div>
        </div>
    </div>
));

  return (
    <div>
      {cards}
      {/* {JSON.stringify(productCart)} */}
      {/* Render each item in the cart
      <ul>
        {cartProducts.map(product => (
          <li key={product.id}>
         
            <div>{product.title}</div>
            <div>{product.price}</div>
            
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Cart;
