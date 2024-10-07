import "@/components/custom/css/landing.sample.css";
import { Hero } from "./Hero";
import { HeroVideoShowcase } from "./HeroVideoShowcase";
import VideoWork from "./VideoWork";
import Navigation from "./Navigation";
import FooterBranding from "./FooterBranding";
export default function Landing() {
  return (
    <div className="mx-auto h-[100vh]">
      <Navigation />
      <Hero />
      <div className="lg:mt-10">
        <center>
          <HeroVideoShowcase />
        </center>
        <div className="mt-20">
          <VideoWork />
        </div>
      </div>
      <FooterBranding />
    </div>
  );
}
