import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

export function HeroVideoShowcase() {
  return (
    <NeonGradientCard className=" w-full max-w-xs md:max-w-2xl lg:max-w-xl mx-auto py-8 md:py-12 lg:py-16">
      <div className="w-full">
        <video 
          src="/promo.mp4" 
          className="rounded-xl object-cover w-full h-full"  // Updated class
          autoPlay 
          loop 
          muted 
          playsInline
        ></video>
      </div>
    </NeonGradientCard>
  );
}
