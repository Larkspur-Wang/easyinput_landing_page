'use client';

import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import CoreFeaturesSection from './sections/CoreFeaturesSection';
import ProfilesSection from './sections/ProfilesSection';
import AutoEnterSection from './sections/AutoEnterSection';
import LabSection from './sections/LabSection';
import FeatureGridSection from './sections/FeatureGridSection';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <main className="relative z-10">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <CoreFeaturesSection />
      <ProfilesSection />
      <AutoEnterSection />
      <LabSection />
      <FeatureGridSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
