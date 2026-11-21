
import React from "react";
import "./Home.css";
import { addToCart } from "./cart";


function Home() {
    return (
        <>
            {/* Navigation Menu */}
            <nav className="navbar">
                <h2 className="logo">Food<span>Hub</span></h2>

                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/veg">Veg</a></li>
                    <li><a href="/nonveg">Non-Veg</a></li>
                    <li><a href="/about">About Us</a></li>
                </ul>

                <a href="#menu" className="order-btn">Order Now</a>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h4>Welcome to FoodHub</h4>
                    <h1>Delicious Food <br />
                        <span>Delivered Fresh</span>
                    </h1>
                    <p>
                        Enjoy delicious meals made with fresh ingredients.
                        Order your favourite food and get it delivered to your door.
                    </p>
                    <a href="#menu" className="hero-btn">Explore Menu</a>
                </div>

                <div className="hero-image">
                    <img
                        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
                        alt="Delicious food"
                    />
                </div>
            </section>

            {/* Categories */}
            <section className="categories">
                <h2>Our Food Categories</h2>
                <p>Choose your favourite category</p>

                <div className="category-container">
                    <div className="category-card">
                        <img
                            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500"
                            alt="Vegetarian food"
                        />
                        <h3>Vegetarian</h3>
                        <p>Fresh and healthy vegetarian dishes.</p>
                        <a href="/veg">Explore Veg</a>
                    </div>

                    <div className="category-card">
                        <img
                            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500"
                            alt="Non vegetarian food"
                        />
                        <h3>Non-Vegetarian</h3>
                        <p>Delicious chicken and meat dishes.</p>
                        <a href="/nonveg">Explore Non-Veg</a>
                    </div>
                </div>
            </section>

            {/* Popular Dishes */}
            <section className="menu-section" id="menu">
                <h2>Popular Dishes</h2>
                <p>Our customers' favourite food items</p>

                <div className="food-container">
                    <div className="food-card">
                        <img
                            src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500"
                            alt="Veg biryani"
                        />
                        <h3>Veg Biryani</h3>
                        <p>Fresh and tasty vegetable biryani.</p>
                        <h4>₹180</h4>
                        <button>Order Now</button>
                    </div>

                    <div className="food-card">
                        <img
                            src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500"
                            alt="Chicken biryani"
                        />
                        <h3>Chicken Biryani</h3>
                        <p>Traditional spicy chicken biryani.</p>
                        <h4>₹220</h4>
                        <button>Order Now</button>
                    </div>

                    <div className="food-card">
                        <img
                            src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500"
                            alt="Paneer butter masala"
                        />
                        <h3>Paneer Butter Masala</h3>
                        <p>Soft paneer in creamy tomato gravy.</p>
                        <h4>₹200</h4>
                        <button>Order Now</button>
                    </div>

                    <div className="food-card">
                        <img
                            src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500"
                            alt="Chicken tikka"
                        />
                        <h3>Chicken Tikka</h3>
                        <p>Juicy and delicious grilled chicken.</p>
                        <h4>₹250</h4>
                        <button>Order Now</button>
                    </div>
                </div>
            </section>

            {/* Special Offer */}
            <section className="offer-section">
                <div>
                    <h2>Special Offer!</h2>
                    <p>Get 20% OFF on your first order.</p>
                    <a href="#menu">Order Today</a>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <h2>FoodHub</h2>
                <p>Fresh Food | Great Taste | Fast Delivery</p>
                <p>Contact: support@foodhub.com</p>
                <p>© 2026 FoodHub. All Rights Reserved.</p>
            </footer>
        </>
    );
}

export default Home;
