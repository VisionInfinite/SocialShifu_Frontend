import "@/components/custom/css/landing.sample.css";
import { Hero } from "./Hero";
import { HeroVideoShowcase } from "./HeroVideoShowcase";
import VideoWork from "./VideoWork";
import Navigation from "./Navigation";
import FooterBranding from "./FooterBranding";
import MarqueeSlider from "./SliderSponsor";

export default function LandingPage() {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <div className="flex-grow flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-8 lg:my-10">
            <HeroVideoShowcase />
          </div>
          <div className="my-12 sm:my-16 lg:my-20">
            <VideoWork />
          </div>
        </div>
      </div>
      <MarqueeSlider />
      <FooterBranding />
    </div>
  );
}
