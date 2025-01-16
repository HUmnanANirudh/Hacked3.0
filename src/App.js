import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Components
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
import CenteredVideo from './components/Vid/Vid.jsx';
import SpaceLoader from './components/Loader/SpaceLoader.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <HelmetProvider>
      {isLoading ? (
        <SpaceLoader />
      ) : (
        <div>
          <CenteredVideo />
          <WhatIsHacked />
          <Schedule />
          <PastSponsors />
          <SponsorshipPlan />
          <Prizes />
          <LeadOrg />
          <MeetTheTeam />
          <FAQs />
          <Navbar />
          {/* <Footer /> */}
        </div>
      )}
    </HelmetProvider>
  );
}

export default App;