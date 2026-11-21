
import React, { useEffect, useState } from "react";
import "./AddToCart.css";

import {
    getCart,
    updateQuantity,
    removeFromCart,
    clearCart
} from "./cart";

function AddToCart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getCart());

        const refreshCart = () => {
            setCart(getCart());
        };

        window.addEventListener("cartUpdated", refreshCart);

        return () => {
            window.removeEventListener("cartUpdated", refreshCart);
        };
    }, []);

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const handleOrder = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        alert("Your order has been placed successfully!");
        clearCart();
    };

    return (
        <div className="cart-page">

            <div className="cart-header">
                <h1>My Shopping Cart</h1>
                <p>Review your favourite food items</p>
            </div>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <h2>Your Cart is Empty!</h2>
                    <p>Add some delicious food to your cart.</p>
                    <a href="/">Continue Shopping</a>
                </div>
            ) : (
                <div className="cart-container">

                    <div className="cart-items">
                        <h2>Cart Items ({totalItems})</h2>

                        {cart.map((item) => (
                            <div className="cart-item" key={item.id}>

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Price: ₹{item.price}</p>

                                    <div className="quantity-control">
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, -1)
                                            }
                                        >
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, 1)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="cart-item-price">
                                    <h3>
                                        ₹{item.price * item.quantity}
                                    </h3>

                                    <button
                                        className="remove-btn"
                                        onClick={() =>
                                            removeFromCart(item.id)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Total Items</span>
                            <span>{totalItems}</span>
                        </div>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{totalPrice}</span>
                        </div>

                        <div className="summary-row">
                            <span>Delivery Charge</span>
                            <span>Free</span>
                        </div>

                        <hr />

                        <div className="total-row">
                            <h3>Total Amount</h3>
                            <h3>₹{totalPrice}</h3>
                        </div>

                        <button
                            className="checkout-btn"
                            onClick={handleOrder}
                        >
                            Place Order
                        </button>

                        <button
                            className="clear-cart-btn"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
}

export default AddToCart;
