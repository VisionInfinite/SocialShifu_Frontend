import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import "@/components/custom/css/landing.sample.css";
import { AnimatedSubscribeButtonDemo } from "./AnimatedSubscribeButtonDemo";
import { ParticlesDemo } from "./ParticlesDemo";
import { NeonGradientCardDemo } from "./NeonGradientDemo";
export default function Landing() {
  return (
    <div className="mx-auto h-[100vh]">
      <Navbar />
      <ParticlesDemo />
      <div className="mt-10">
        <center>
          <NeonGradientCardDemo />
        </center>
      </div>
    </div>
  );
}
