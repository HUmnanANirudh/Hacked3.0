import React from "react";
import "./Sponsorship.css";

const SponsorshipPlan = () => {
  return (
    <div className="plans-container">
      <div className="heading-container">
        <h2 className="heading text-4xl">SPONSORSHIP PLAN</h2>
      </div>
      <div className="plans">
        
        <div className="plan-wrapper">
          <div className="plan-card small-plan">
            <div className="placeholder">
              <h2>Title Sponsor</h2>
              <ul className="plan-details">
                <li>Title Sponsor: Logo on event materials and promotions.</li>
                <li>
                  Exclusive Session & Media: 15-20 min session, exposure to
                  2,500+ participants, online coverage.
                </li>
                <li>
                  Campus Promotion & Booth: Banners, standees, and reserved
                  booth space.
                </li>
              </ul>
            </div>
          </div>
          <button className="cta-button">Title Sponsor</button>
        </div>

      
        <div className="plan-wrapper">
          <div className="plan-card medium-plan">
            <div className="placeholder">
              <h2>Gold Sponsor</h2>
              <ul className="plan-details">
                <li>
                  Media & Print Presence: Logo on print and digital promotions.
                </li>
                <li>Merchandise Placement: Logo on event merchandise sleeves.</li>
                <li>
                  Event Promotions & Campus Visibility: Brand showcase in event
                  sessions, plus banners and materials across campus, reaching
                  2,500+ attendees.
                </li>
              </ul>
            </div>
          </div>
          <button className="cta-button">Gold Sponsor</button>
        </div>

        
        <div className="plan-wrapper">
          <div className="plan-card large-plan">
            <div className="placeholder">
              <h2>Silver Sponsor</h2>
              <ul className="plan-details">
                <li>
                  Visibility Across Platforms: Logo on social media and print
                  promotions.
                </li>
                <li>
                  Event Promotions: Brand showcase in major event sessions.
                </li>
                <li>
                  Promotional Materials: Distribute flyers to 2,500+ students
                  and attendees.
                </li>
              </ul>
            </div>
          </div>
          <button className="cta-button">Silver Sponsor</button>
        </div>

        
        <div className="plan-wrapper">
          <div className="plan-card small-plan">
            <div className="placeholder">
              <h2>Other Partnerships</h2>
              <ul className="plan-details">
                <li>
                Flexible Support: Provide goodies, services, or products for the event.
                </li>
                <li>Branding Opportunities: Gain exposure through online and offline promotions.</li>
                <li>
                Custom Packages: Tailored sponsorship options to meet your marketing goals.
                </li>
              </ul>
            </div>
          </div>
          <button className="cta-button">Other</button>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPlan;
