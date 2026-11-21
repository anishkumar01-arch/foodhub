
import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-page">

      {/* Navbar */}
      <nav className="about-navbar">

        <h2 className="about-logo">
          Food<span>Hub.</span>
        </h2>

        <div className="about-nav-links">
          <a href="/">Home</a>
          <a href="/veg">Veg</a>
          <a href="/nonveg">Non-Veg</a>
          <a href="#about">About Us</a>
        </div>

        <a href="/#categories" className="about-order-btn">
          Order Now
        </a>

      </nav>

      {/* Hero Section */}
      <section className="about-hero" id="about">

        <div className="about-hero-content">

          <p className="about-tag">
            ABOUT FOODHUB
          </p>

          <h1>
            Bringing People Together
            <span> Through Great Food.</span>
          </h1>

          <p>
            Welcome to FoodHub! We believe that great food
            brings happiness. Our goal is to provide delicious,
            fresh and quality vegetarian and non-vegetarian
            meals for everyone.
          </p>

          <a href="#our-story" className="about-hero-btn">
            Discover Our Story →
          </a>

        </div>

        <div className="about-hero-image">

          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900"
            alt="Delicious food served at FoodHub"
          />

        </div>

      </section>

      {/* Our Story */}
      <section className="about-story" id="our-story">

        <div className="about-story-image">

          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800"
            alt="Food preparation"
          />

        </div>

        <div className="about-story-content">

          <p className="about-subtitle">
            OUR STORY
          </p>

          <h2>
            A Passion For Delicious Food
          </h2>

          <p>
            FoodHub was created with a simple idea:
            everyone deserves delicious and satisfying food.
            We bring together a variety of vegetarian and
            non-vegetarian dishes in one place.
          </p>

          <p>
            From traditional Indian meals to modern favourites,
            our collection is designed to make every meal
            special. We focus on quality ingredients, great
            taste and a wonderful food experience.
          </p>

          <a href="/#categories" className="about-story-btn">
            Explore Our Menu →
          </a>

        </div>

      </section>

      {/* Mission and Vision */}
      <section className="about-mission">

        <div className="about-heading">
          <p>WHAT WE BELIEVE</p>
          <h2>Our Mission & Vision</h2>
          <span>
            Our commitment is to make every food experience special.
          </span>
        </div>

        <div className="about-mission-grid">

          <div className="about-mission-card">

            <span>🎯</span>

            <h3>Our Mission</h3>

            <p>
              To provide delicious, fresh and quality food
              with a convenient ordering experience.
              We aim to make every customer happy through
              great taste and service.
            </p>

          </div>

          <div className="about-mission-card">

            <span>🌟</span>

            <h3>Our Vision</h3>

            <p>
              To become a trusted food destination where
              people can discover their favourite vegetarian
              and non-vegetarian dishes.
            </p>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="about-why">

        <div className="about-heading">

          <p>WHY FOODHUB?</p>

          <h2>Why Choose Us</h2>

          <span>
            We always focus on quality, taste and customer satisfaction.
          </span>

        </div>

        <div className="about-why-grid">

          <div className="about-why-card">
            <span>🥗</span>
            <h3>Fresh Ingredients</h3>
            <p>
              We focus on fresh and quality ingredients
              for delicious meals.
            </p>
          </div>

          <div className="about-why-card">
            <span>👨‍🍳</span>
            <h3>Expert Chefs</h3>
            <p>
              Delicious dishes prepared with care,
              passion and experience.
            </p>
          </div>

          <div className="about-why-card">
            <span>🍽️</span>
            <h3>Wide Variety</h3>
            <p>
              Explore a wide selection of vegetarian
              and non-vegetarian dishes.
            </p>
          </div>

          <div className="about-why-card">
            <span>❤️</span>
            <h3>Customer Satisfaction</h3>
            <p>
              Your happiness and satisfaction
              are important to us.
            </p>
          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="about-stats">

        <div className="about-stat-item">
          <h2>40+</h2>
          <p>Food Varieties</p>
        </div>

        <div className="about-stat-item">
          <h2>2</h2>
          <p>Food Categories</p>
        </div>

        <div className="about-stat-item">
          <h2>100%</h2>
          <p>Quality Focus</p>
        </div>

        <div className="about-stat-item">
          <h2>24/7</h2>
          <p>Online Access</p>
        </div>

      </section>

      {/* Contact Section */}
      <section className="about-contact">

        <div className="about-heading">

          <p>GET IN TOUCH</p>

          <h2>We Would Love To Hear From You</h2>

          <span>
            Have questions or suggestions? Contact our team.
          </span>

        </div>

        <div className="about-contact-grid">

          <div className="about-contact-card">
            <span>📧</span>
            <h3>Email Us</h3>
            <p>support@foodhub.com</p>
          </div>

          <div className="about-contact-card">
            <span>📞</span>
            <h3>Call Us</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="about-contact-card">
            <span>📍</span>
            <h3>Our Location</h3>
            <p>Hyderabad, Telangana, India</p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="about-footer">

        <h2>
          Food<span>Hub.</span>
        </h2>

        <p>
          Delicious Food | Fresh Ingredients | Happy Moments
        </p>

        <div className="about-footer-links">
          <a href="/">Home</a>
          <a href="/veg">Veg</a>
          <a href="/nonveg">Non-Veg</a>
          <a href="#about">About Us</a>
        </div>

        <p className="about-copyright">
          © 2026 FoodHub. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default AboutUs;
