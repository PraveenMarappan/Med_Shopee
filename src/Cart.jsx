import React, { useEffect, useState } from "react";
import "./cart.css";
import bg from "../public/bgshop.png";
import { useLocation,Link} from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
const loc = useLocation()
  // console.log(loc.state);
useEffect(() => {
  
  setCart([...cart,{...loc.state,qty:1}])
},[])

  
  
  const increaseQuantity = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    )
  );
};
   const decreaseQuantity = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    )
  );
};

const deleteItem = (id) => {
  setCart(cart.filter((item) => item.id !== id));
};

  return (
    <div>
      <img src={bg} className="img" alt="Background" />

      <div className="text">
        <h1>Your Cart</h1>
        <p>Review your items and proceed to checkout</p>

        <div className='header'>
          <h3>Product</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
          <h3>Action</h3>
        </div>

        {cart.map((item) => (
          <div className="row" key={item.id}>
            <div className="product">
              <img src={item.image} alt={item.name} />

              <div>
                <h2 className='t'>{item.name}</h2>
                <p>{item.type}</p>
              </div>
            </div>

            <div className="price">₹{item.price}</div>

            <div className="quantity">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>

            <div className="total">
              ₹{item.price * item.qty}
            </div>

            <div className="delete" onClick={() => deleteItem(item.id)}>🗑</div>
            </div>
        ))}

        <button className="continue">
          <Link to='/shop'>← Continue Shopping</Link>
        </button>
      </div>
    </div>
  );
}

export default Cart;