import Navbar from "./Navbar";
import "@/components/custom/css/landing.sample.css";
import { Hero } from "./Hero";
import { NeonGradientCardDemo } from "./NeonGradientDemo";
import VideoShowcase from "./VideoShowcase";
export default function Landing() {
  return (
    <div className="mx-auto h-[100vh]">
      <Navbar />
      <Hero />
      <div className="mt-10">
        <center>
          <NeonGradientCardDemo />
        </center>
        <VideoShowcase />
      </div>
    </div>
  );
}
