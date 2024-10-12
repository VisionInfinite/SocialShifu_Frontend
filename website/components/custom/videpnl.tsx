import React from 'react';
import { Play, UploadCloud, Tag } from 'lucide-react';

export default function VideoPanel() {
  return (
    <div className="bg-[#1f233d] w-full max-w-[60dvw] min-h-screen flex flex-col p-4 space-y-2 mx-auto">
      
      {/* Video Header */}
      <div className="text-white/75 text-lg font-semibold">
   Recent Generations
      </div>
      
      {/* Video Display Area */}
      <div className="flex-grow bg-white/15 rounded-lg overflow-hidden shadow-2xl relative mx-auto w-full">
        <div className="relative flex justify-center flex-col items-center"> {/* 16:9 aspect ratio * 0.75 */}
          {/* Main video */}
          <video
            className="w-full h-full rounded-xl object-cover p-2"
            controls
            src="/path-to-video.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Thumbnail videos */}
        <div className="flex gap-2 p-2 pt-0 bg-white/8">
          <video
            className="w-1/2 h-[24dvh] object-cover rounded"
            controls
            src="/path-to-video.mp4"
          >
            Your browser does not support the video tag.
          </video>
          <video
            className="w-1/2 h-[24dvh] object-cover rounded"
            controls
            src="/path-to-video.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Video Control Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {/* Play Button */}
        <button className="bg-white/15 px-4 py-2 shadow-lg rounded-full text-white/50 hover:text-white hover:bg-[#FF8C00] transition flex items-center">
          <Play size={20} className="mr-2" />
          Play
        </button>

        {/* Upload Button */}
        <button className="bg-white/15 px-4 py-2 rounded-full shadow-lg text-white/50 hover:text-white hover:bg-[#FF8C00] transition flex items-center">
          <UploadCloud size={20} className="mr-2" />
          Upload
        </button>

        {/* Frame Size/Viewport Selector */}
        <select className="bg-[#1f233d] text-white/50 px-4 py-2 rounded-full hover:text-white transition">
          <option>YouTube Shorts (9:16)</option>
          <option>Instagram Stories (9:16)</option>
          <option>TikTok (9:16)</option>
          <option>Instagram Post (1:1)</option>
          <option>YouTube Video (16:9)</option>
          <option>Facebook Video (16:9)</option>
          <option>Twitter Post (16:9)</option>
          <option>LinkedIn Post (16:9)</option>
        </select>
      </div>

      {/* Tags Section Below Video */}
      <div className="flex flex-wrap gap-3 mt-4 justify-center">
        <span className="bg-white/15 px-3 py-1 shadow-lg rounded-full text-white/50 flex items-center hover:bg-[#FF8C00] hover:text-white transition">
          <Tag size={16} className="mr-2" /> AI-Generated
        </span>
        <span className="bg-white/15 px-3 py-1 shadow-lg rounded-full text-white/50 flex items-center hover:bg-[#FF8C00] hover:text-white transition">
          <Tag size={16} className="mr-2" /> Tutorial
        </span>
        <span className="bg-white/15 px-3 py-1 shadow-lg rounded-full text-white/50 flex items-center hover:bg-[#FF8C00] hover:text-white transition">
          <Tag size={16} className="mr-2" /> Short Film
        </span>
      </div>
    </div>
  );
}