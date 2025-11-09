import React from "react";
import "./RestaurantCard.css";
import img from '../../optimized-assets/hotel.webp';
const RestaurantCard = () => {
  return (
    <section className="restaurant-card">
      <div className="restaurant-card-image">
        <img
          src={img}
          alt="Tangerine Restaurant"
        />
      </div>

      <div className="restaurant-card-content">
        <h2 className="restaurant-name">ESCAPE (the BAR)</h2>
        <p className="restaurant-description">
          Welcome to <strong>ESCAPE (the BAR)</strong> experience our lounge bar, where you can enjoy comfortable seating, magnificent music, and a wide selection of professional cocktails and mocktails crafted by our skilled bartender. We offer a full range of liquors to suit every taste.
        </p>

        <div className="restaurant-details">
          <div className="restaurant-detail">
            <span className="label">Service</span>
            <span className="value">A-la carte </span>
          </div>
          <div className="restaurant-detail">
            <span className="label">Cuisine</span>
            <span className="value">International</span>
          </div>
          <div className="restaurant-detail">
            <span className="label">Dress code</span>
            <span className="value">Smart Casual</span>
          </div>
        </div>

        <div className="restaurant-actions">
          <button className="visit-btn">VISIT RESTAURANT</button>
          <a href="#" className="menu-link">
            MENU <span className="menu-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RestaurantCard;
