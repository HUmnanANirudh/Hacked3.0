import React, { useState } from 'react';

// Import components
import Navbar from './components/Navbar/Navbar.jsx';
import WhatIsHacked from './components/WhatIsHacked/WhatIsHacked.jsx';
import Schedule from './components/Schedule/Schedule.jsx';
import PastSponsors from './components/PastSponsors/PastSponsors.jsx';
import SponsorshipPlan from './components/SponsorshipPlan/SponsorshipPlan.jsx';
import Prizes from './components/Prizes/Prizes.jsx';
import LeadOrg from './components/LeadOrg/LeadOrg.jsx';
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam.jsx';
import FAQs from './components/FAQs/FAQs.jsx';
import Footer from './components/Footer/Footer.jsx';

// Assemble components in App.js
function App() {
  return (
    <div>
      <Navbar />
      <WhatIsHacked />
      <Schedule />
      <PastSponsors />
      <SponsorshipPlan />
      <Prizes />
      <LeadOrg />
      <MeetTheTeam />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
