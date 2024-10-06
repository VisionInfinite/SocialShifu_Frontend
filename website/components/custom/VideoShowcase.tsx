import Marquee from "react-fast-marquee";
import { useMemo } from "react";

const VIDEO_IDS = [1, 2, 3, 4, 5];
const URL = "https://www.youtube.com/embed/zc3ryH_4-4I?si=PUG_bwjJ3xUsXm4J";

export default function VideoShowcase() {
  const videoComponents = useMemo(
    () =>
      VIDEO_IDS.map((i) => (
        <div
          key={i}
          className="w-[15vw] aspect-[9/16] rounded-xl overflow-hidden shadow-xl mx-9"
        >
          
          <iframe
            width="100%"
            height="100%"
            src={URL}
            title={`YouTube Shorts video player ${i}`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      )),
    []
  );

  return (
    <div className="flex justify-center items-center h-screen bg-transparent">
      <Marquee className="bg-transparent flex items-center" pauseOnHover pauseOnClick speed={50} gradient={false}>
        {videoComponents}
      </Marquee>
    </div>
  );
}
