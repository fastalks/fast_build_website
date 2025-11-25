import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Hero />
      <Features />
      <HowItWorks />
      <Gallery />
      <Pricing />
      <CTA />
    </div>
  );
}
