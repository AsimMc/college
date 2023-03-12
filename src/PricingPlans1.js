import React from 'react';
import './PricingPlans.css';

function PricingPlans() {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$9.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Standard Plan',
      price: '$19.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Premium Plan',
      price: '$29.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Ultimate Plan',
      price: '$39.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card pricing-card">
              <div className="card-header">
                <h3>{plan.name}</h3>
                <h4>{plan.price}</h4>
              </div>
              <div className="card-body">
                <p>{plan.description}</p>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary">Purchase Plan</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPlans;
