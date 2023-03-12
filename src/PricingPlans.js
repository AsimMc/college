import React from 'react';
import './PricingPlans.css';

function PricingPlans() {
  return (
    <div className="pricing-plans-container">
      <div className="pricing-plan">
        <div className="pricing-header">
          <h3>Basic Plan</h3>
          <h4>$3/month</h4>
        </div>
        <div className="pricing-features">
          <p></p>
        </div>
        <div className="pricing-action">
          <button className="btn">Buy Now</button>
        </div>
      </div>
      <div className="pricing-plan">
        <div className="pricing-header">
          <h3>Pro Plan</h3>
          <h4>$5/month</h4>
        </div>
        <div className="pricing-features">
          <p>Includes 5 GB of storage and up to 50 users.</p>
        </div>
        <div className="pricing-action">
          <button className="btn">Buy Now</button>
        </div>
      </div>
      <div className="pricing-plan">
        <div className="pricing-header">
          <h3>Premium Plan</h3>
          <h4>$10/month</h4>
        </div>
        <div className="pricing-features">
          <p>Includes 10 GB of storage and up to 100 users.</p>
        </div>
        <div className="pricing-action">
          <button className="btn">Buy Now</button>
        </div>
      </div>
      <div className="pricing-plan">
        <div className="pricing-header">
          <h3>Enterprise Plan</h3>
          <h4>$50/month</h4>
        </div>
        <div className="pricing-features">
          <p>* This Includes everything from Basic-Premium</p>
          <p>- 20 Minute voice Sessions to ask what you want (Once a week)</p>
          <p>- </p>
        </div>
        <div className="pricing-action">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default PricingPlans;
