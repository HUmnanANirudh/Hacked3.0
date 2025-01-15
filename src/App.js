import React, { useState, useEffect } from 'react';

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
    // Set a minimum loading time of 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent body scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <>
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
    </>
  );
}

export default App;