import Navbar from "@/components/custom/navbar";
import "@/components/custom/css/landing.sample.css";
import { ParticlesDemo } from "./ParticlesDemo";
import { NeonGradientCardDemo } from "./NeonGradientDemo";
import VideoShowcase from "./VideoShowcase";
export default function Landing() {
  return (
    <div className="mx-auto h-[100vh]">
      <Navbar />
      <ParticlesDemo />
      <div className="mt-10">
        <center>
          <NeonGradientCardDemo />
        </center>
        <VideoShowcase />
      </div>
    </div>
  );
}
