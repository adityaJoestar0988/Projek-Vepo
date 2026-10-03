import React from 'react';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/TentangKami';
import CoreValue from '../components/CoreValue';
import ManagementTeam from '../components/ManagementTeam';
import OurQuality from '../components/OurQuality';
import TrustBadges from '../components/TrustBadges';
import ProcessTimeline from '../components/ProcessTimeline';
import DistributionArea from '../components/DistributionArea';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StorySection />
      <CoreValue />
      <ManagementTeam />
      <OurQuality />
      <TrustBadges />
      <ProcessTimeline />
      <DistributionArea />
    </>
  );
};

export default Home;
