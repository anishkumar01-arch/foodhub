
import React from "react";
import "./NonVeg.css";

function NonVeg() {

  const dishes = [
    {
      id: 1,
      name: "Chicken Biryani",
      category: "Indian Special",
      price: "₹220",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=600"
    },
    {
      id: 2,
      name: "Butter Chicken",
      category: "North Indian",
      price: "₹260",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600"
    },
    {
      id: 3,
      name: "Chicken Tikka",
      category: "Starters",
      price: "₹200",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600"
    },
    {
      id: 4,
      name: "Mutton Biryani",
      category: "Indian Special",
      price: "₹300",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600"
    },
    {
      id: 5,
      name: "Fish Fry",
      category: "Sea Food",
      price: "₹180",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600"
    },
    {
      id: 6,
      name: "Chicken Burger",
      category: "Fast Food",
      price: "₹160",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
    },
    {
      id: 7,
      name: "Tandoori Chicken",
      category: "Starters",
      price: "₹280",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600"
    },
    {
      id: 8,
      name: "Chicken Fried Rice",
      category: "Chinese",
      price: "₹170",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600"
    },
    {
      id: 9,
      name: "Prawn Masala",
      category: "Sea Food",
      price: "₹250",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=600"
    },
    {
      id: 10,
      name: "Chicken Noodles",
      category: "Chinese",
      price: "₹160",
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600"
    },
    {
      id: 11,
      name: "Mutton Curry",
      category: "North Indian",
      price: "₹290",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1545247181-516773cae754?w=600"
    },
    {
      id: 12,
      name: "Chicken Shawarma",
      category: "Fast Food",
      price: "₹150",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600"
    },
    {
      id: 13,
      name: "Grilled Fish",
      category: "Sea Food",
      price: "₹240",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=600"
    },
    {
      id: 14,
      name: "Chicken Lollipop",
      category: "Starters",
      price: "₹190",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600"
    },
    {
      id: 15,
      name: "Egg Fried Rice",
      category: "Chinese",
      price: "₹130",
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600"
    },
    {
      id: 16,
      name: "Chicken Kebab",
      category: "Starters",
      price: "₹210",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600"
    },
    {
      id: 17,
      name: "Egg Curry",
      category: "Indian Meals",
      price: "₹140",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600"
    },
    {
      id: 18,
      name: "Chicken Pizza",
      category: "Fast Food",
      price: "₹280",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
    },
    {
      id: 19,
      name: "Fish Curry",
      category: "Sea Food",
      price: "₹220",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600"
    },
    {
      id: 20,
      name: "Chicken Thali",
      category: "Indian Meals",
      price: "₹250",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600"
    }
  ];

  return (
    <div className="nonveg-page">

      {/* Navbar */}
      <nav className="nonveg-navbar">
        <h2 className="nonveg-logo">
          Spice<span>Hub.</span>
        </h2>

        <div className="nonveg-nav-links">
          <a href="#nonveg-home">Home</a>
          <a href="#nonveg-categories">Categories</a>
          <a href="#nonveg-menu">Our Menu</a>
          <a href="#nonveg-about">About</a>
        </div>

        <button className="nonveg-order-btn">
          Order Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="nonveg-hero" id="nonveg-home">

        <div className="nonveg-hero-content">
          <p className="nonveg-tag">
            🔥 DELICIOUS NON-VEG SPECIALS
          </p>

          <h1>
            Taste The
            <span> Real Flavour</span>
            Of Food.
          </h1>

          <p className="nonveg-description">
            Discover mouth-watering non-vegetarian dishes
            prepared with fresh ingredients, authentic spices
            and unforgettable flavours.
          </p>

          <a href="#nonveg-menu" className="nonveg-explore-btn">
            Explore Menu →
          </a>
        </div>

        <div className="nonveg-hero-image">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=900"
            alt="Delicious non vegetarian food"
          />
        </div>

      </section>

      {/* Categories */}
      <section className="nonveg-categories" id="nonveg-categories">

        <h2>Explore Categories</h2>

        <p>Find your favourite non-vegetarian dishes</p>

        <div className="nonveg-category-list">

          <div className="nonveg-category">
            <span>🍗</span>
            <h3>Chicken</h3>
          </div>

          <div className="nonveg-category">
            <span>🥩</span>
            <h3>Mutton</h3>
          </div>

          <div className="nonveg-category">
            <span>🐟</span>
            <h3>Sea Food</h3>
          </div>

          <div className="nonveg-category">
            <span>🥚</span>
            <h3>Egg Items</h3>
          </div>

          <div className="nonveg-category">
            <span>🍤</span>
            <h3>Starters</h3>
          </div>

        </div>
      </section>

      {/* Food Menu */}
      <section className="nonveg-menu" id="nonveg-menu">

        <div className="nonveg-section-heading">

          <div>
            <h2>Our Popular Dishes</h2>
            <p>Explore our delicious non-veg collection.</p>
          </div>

          <span className="nonveg-menu-label">
            ✦ Best Sellers
          </span>

        </div>

        <div className="nonveg-food-grid">

          {dishes.map((dish) => (

            <div className="nonveg-food-card" key={dish.id}>

              <div className="nonveg-food-image">
                <img src={dish.image} alt={dish.name} />

                <span className="nonveg-rating">
                  ⭐ {dish.rating}
                </span>
              </div>

              <div className="nonveg-food-details">

                <p className="nonveg-food-category">
                  {dish.category}
                </p>

                <h3>{dish.name}</h3>

                <div className="nonveg-food-bottom">

                  <h4>{dish.price}</h4>

                  <button
                    className="nonveg-add-btn"
                    onClick={() =>
                      alert(`${dish.name} added to cart!`)
                    }
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
      <section className="nonveg-about" id="nonveg-about">

        <h2>Great Taste. Great Experience.</h2>

        <p>
          At SpiceHub, we serve delicious non-vegetarian
          food made with quality ingredients and authentic
          spices. Every dish is prepared to give you a
          memorable dining experience.
        </p>

      </section>

      {/* Footer */}
      <footer className="nonveg-footer">

        <h2>Spice<span>Hub.</span></h2>

        <p>Authentic Taste • Fresh Food • Happy Moments</p>

        <p>© 2026 SpiceHub. All Rights Reserved.</p>

      </footer>

    </div>
  );
}

export default NonVeg;
