import React from 'react';
import { Download } from 'lucide-react';
import "./Sponsorship.css";

const SponsorshipPlan = () => {
  const handleDownload = () => {
    // Create link to download the PDF from assets
    const link = document.createElement('a');
    link.href = '/assets/pdf/sponsorship-brochure.pdf';
    link.download = 'sponsorship-brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="plans-container">
      <div className="heading-container">
        <h1 className="heading">SPONSORSHIP PLAN</h1>
        <div className="flex justify-end mt-6">
  <button 
    className="flex items-center gap-2 px-6 py-3 
      bg-gradient-to-r from-[#594381] to-[#8e5eb5] 
      rounded-xl text-white font-bold transition-all duration-300 
      hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 mr-8"
    onClick={handleDownload}
    aria-label="Download Brochure"
  >
    <Download size={20} />
    <span>Download Brochure</span>
  </button>
</div>

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