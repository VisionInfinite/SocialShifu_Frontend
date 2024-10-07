import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

export function HeroVideoShowcase() {
  return (
    <NeonGradientCard className="lg:max-w-5xl max-w-xs md:max-w-xl mt-10 items-center justify-center text-center ">
      {/* Youtube Video Below */}
      {/* <iframe
        className="rounded-xl"
        width="100%"
        height="510"
        src="https://www.youtube.com/embed/eWtaNXK0s9k?autoplay=1"
        title="Like That - Flow Edit/AMV | 4K"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe> */}
      {/* OpusPro Video Below */}
      <video src="/promo.mp4" className="rounded-xl w-full h-full" autoPlay loop muted ></video>
    </NeonGradientCard>
  );
}
