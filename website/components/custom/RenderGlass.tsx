import { Card } from "@/components/ui/card";
import React from "react";

interface RenderGlassCardProps {
  children: React.ReactNode;
}

export default function RenderGlassCard({ children }: RenderGlassCardProps) {
  return (
    <div>
      <Card className="bg-white/10 backdrop-filter backdrop-blur-lg border-white/20 shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
        {children}
      </Card>
    </div>
  );
}
