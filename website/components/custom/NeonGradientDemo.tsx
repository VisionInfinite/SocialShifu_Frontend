import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

export function NeonGradientCardDemo() {
  return (
    <NeonGradientCard className="max-w-5xl h-96 items-center justify-center text-center">
      <video
        src="https://public.cdn.opus.pro/webflow/assets/promov3-transcode.mp4"
        autoPlay
        loop
        className="w-full h-full"
      ></video>
    </NeonGradientCard>
  );
}
