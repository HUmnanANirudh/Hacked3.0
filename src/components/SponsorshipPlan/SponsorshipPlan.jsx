import React from "react";
import "./Sponsorship.css";

const SponsorshipPlan = () => {
  return (
    <div className="plans">
      <div className="plan-wrapper">
        <div className="plan-card small-plan">
          <div className="placeholder">Small Plan</div>
        </div>
        <button className="cta-button">Select Plan</button>
      </div>

      <div className="plan-wrapper">
        <div className="plan-card medium-plan">
          <div className="placeholder">Medium Plan</div>
        </div>
        <button className="cta-button">Select Plan</button>
      </div>

      <div className="plan-wrapper">
        <div className="plan-card large-plan">
          <div className="placeholder">Large Plan</div>
        </div>
        <button className="cta-button">Select Plan</button>
      </div>
    </div>
  );
};

export default SponsorshipPlan;
