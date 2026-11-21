
import React from "react";
import "./Veg.css";

function Veg() {
  const dishes = [
    {
      id: 1,
      name: "Paneer Butter Masala",
      category: "North Indian",
      price: "₹220",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600",
      rating: "4.8",
    },
    {
      id: 2,
      name: "Veg Biryani",
      category: "Indian Special",
      price: "₹180",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
      rating: "4.7",
    },
    {
      id: 3,
      name: "Masala Dosa",
      category: "South Indian",
      price: "₹100",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600",
      rating: "4.9",
    },
    {
      id: 4,
      name: "Veg Pizza",
      category: "Italian",
      price: "₹250",
      image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600",
      rating: "4.6",
    },
    {
      id: 5,
      name: "Fresh Garden Salad",
      category: "Healthy Food",
      price: "₹150",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
      rating: "4.8",
    },
    {
      id: 6,
      name: "Veg Burger",
      category: "Fast Food",
      price: "₹130",
      image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600",
      rating: "4.5",
    },
  ];

  return (
    <div className="veg-page">

      {/* Navbar */}
      <nav className="veg-navbar">
        <h2 className="veg-logo">Green<span>Bite.</span></h2>

        <div className="veg-nav-links">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#menu">Our Menu</a>
          <a href="#about">About</a>
        </div>

        <button className="veg-order-btn">Order Now</button>
      </nav>

      {/* Hero Section */}
      <section className="veg-hero" id="home">
        <div className="veg-hero-content">
          <p className="veg-tag">100% PURE VEGETARIAN</p>

          <h1>
            Fresh & Healthy
            <span> Vegetarian Food</span>
          </h1>

          <p className="veg-description">
            Enjoy delicious vegetarian meals made with fresh
            ingredients, natural flavors and lots of love.
          </p>

          <a href="#menu" className="veg-explore-btn">
            Explore Menu →
          </a>
        </div>

        <div className="veg-hero-image">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900"
            alt="Fresh vegetarian food"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="veg-categories" id="categories">
        <h2>Explore Categories</h2>
        <p>Choose your favourite vegetarian food</p>

        <div className="veg-category-list">
          <div className="veg-category">
            <span>🥗</span>
            <h3>Healthy Food</h3>
          </div>

          <div className="veg-category">
            <span>🍛</span>
            <h3>Indian Meals</h3>
          </div>

          <div className="veg-category">
            <span>🍕</span>
            <h3>Fast Food</h3>
          </div>

          <div className="veg-category">
            <span>🥪</span>
            <h3>Snacks</h3>
          </div>

          <div className="veg-category">
            <span>🍰</span>
            <h3>Desserts</h3>
          </div>
        </div>
      </section>

      {/* Food Menu */}
      <section className="veg-menu" id="menu">
        <div className="veg-section-heading">
          <div>
            <h2>Our Popular Dishes</h2>
            <p>Delicious vegetarian dishes made just for you.</p>
          </div>
          <span className="veg-menu-label">✦ Best Sellers</span>
        </div>

        <div className="veg-food-grid">
          {dishes.map((dish) => (
            <div className="veg-food-card" key={dish.id}>
              <div className="veg-food-image">
                <img src={dish.image} alt={dish.name} />
                <span className="veg-rating">⭐ {dish.rating}</span>
              </div>

              <div className="veg-food-details">
                <p className="veg-food-category">{dish.category}</p>
                <h3>{dish.name}</h3>

                <div className="veg-food-bottom">
                  <h4>{dish.price}</h4>
                  <button
                    className="veg-add-btn"
                    onClick={() => alert(`${dish.name} added to cart!`)}
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="veg-about" id="about">
        <h2>Eat Fresh. Live Healthy.</h2>
        <p>
          We believe healthy food should be delicious.
          Our vegetarian dishes are prepared with fresh
          vegetables and quality ingredients.
        </p>
      </section>

      {/* Footer */}
      <footer className="veg-footer">
        <h2>Green<span>Bite.</span></h2>
        <p>Fresh Food • Healthy Life • Happy You</p>
        <p>© 2026 GreenBite. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Veg;
