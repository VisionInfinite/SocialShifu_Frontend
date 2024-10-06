import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

export function NeonGradientCardDemo() {
  return (
    <NeonGradientCard className="max-w-5xl h-96 items-center justify-center text-center">
      {/* <video
        src="https://public.cdn.opus.pro/webflow/assets/promov3-transcode.mp4"
        autoPlay
        loop
        className="w-full h-full"
      ></video> */}
<iframe width="100%" height="510" src="https://www.youtube.com/embed/eWtaNXK0s9k?autoplay=1" title="Like That - Flow Edit/AMV | 4K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    </NeonGradientCard>
  );
}
