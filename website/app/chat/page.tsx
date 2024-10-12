"use client"; 
import VideoPanel from "@/components/custom/videpnl";
import {Bolt, ChartLine, Film, History, Search, User,FileText, Send, Video, Play, UploadCloud, Tag} from "lucide-react";
import { BsStars } from "react-icons/bs";
export default function demochat() {
    return(
        <div>
            <div className="bg-[#181b2e] min-h-[100dvh] w-full flex justify-center text-gray-200 text-center">
                <div className="flex flex-col bg-[#181b2e]/25 py-3 min-h-[100dvh] w-[20dvw]">
                <div className="flex gap-6 hover:bg-[#FF8C00]  h-[5dvh] w-full justify-left items-center hover:rounded-md cursor-pointer p-2"><Search /><input placeholder="Search new things.." className=" bg-white/25 px-2 outline-none hover:border-2 w-[12dvw] hover:border-orange-500/25 focus:orange-500/50 text-gray-300 rounded-md"></input></div>
                <div className="flex gap-6 hover:bg-[#FF8C00] hover:text-[#181b2e] h-[5dvh] w-full justify-left items-center hover:rounded-md cursor-pointer p-2"><User /><span>Profile</span></div>
                <div className="flex gap-6 hover:bg-[#FF8C00] hover:text-[#181b2e] h-[5dvh] w-full justify-left items-center hover:rounded-md cursor-pointer p-2"><Video /><span>Generate Videos</span></div>
                <div className="flex gap-6 hover:bg-[#FF8C00] hover:text-[#181b2e] h-[5dvh] w-full justify-left items-center hover:rounded-md cursor-pointer p-2"><Film /><span>Generations</span></div>
                <div className="flex gap-6 hover:bg-[#FF8C00] hover:text-[#181b2e] h-[5dvh] w-full justify-left items-center hover:rounded-md cursor-pointer p-2"><ChartLine /><span>Usage Overview</span></div>
                <div className="flex gap-6 hover:bg-[#FF8C00] hover:text-[#181b2e] h-[5dvh] w-full justify-left items-center hover:rounded-md cursor-pointer p-2"><History /><span>Chat History</span></div>
                <div className="flex gap-6 mb-1 mt-auto h-[5dvh] hover:bg-[#FF8C00] hover:text-[#181b2e] w-full justify-left items-center hover:rounded-md cursor-pointer p-2"><Bolt /><span>Settings</span></div>
                </div>

<div className="bg-[#1f233d] w-[60dvw] px-6 min-h-screen flex flex-col">
  {/* Chat Messages Container */}
  <div className="flex-1 overflow-y-auto p-4 space-y-4">
    {/* Chat Message (Bot) */}
    <div className="flex items-start">
      <div className="bg-orange-500 shadow-xl rounded-lg p-3 max-w-[75%]">
        Hello! How can I help you today?
      </div>
    </div>

    {/* Chat Message (User) */}
    <div className="flex justify-end items-start">
      <div className="bg-black  shadow-xl rounded-lg p-3 max-w-[75%]">
       Generate a cool video of hamburger in cheese dipped suace eaten by intergalactic cute alien who is floating in space
      </div>
    </div>

    {/* Chat Message (Bot) */}
    <div className="flex items-start">
      <div className="bg-orange-500  shadow-xl rounded-lg p-3 max-w-[75%]">
        Sure! We offer a range of services. What are you specifically interested in?
      </div>
    </div>
  </div>

  {/* Chat Input Box */}
  <div className="flex gap-4 mt-auto mb-6 shadow-xl bg-white/15 h-[7dvh] w-full rounded-full items-center p-4">
{/* File Upload Icon */}
<input
  type="file"
  id="fileInput"
  className="hidden"
  accept="text/*"
/>

<button
  onClick={() => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }}
>
  <FileText className="text-gray-400 hover:text-orange-500" size={24} />
</button>

    {/* AI Captions Icon */}
    <button>
      <BsStars className="text-gray-400 hover:text-orange-500" size={24} />
    </button>

    {/* Input Box */}
    <input
      type="text"
      placeholder="Type a message..."
      className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 pl-4"
    />

    {/* Send Button */}
    <button className="bg-orange-500 text-white/25 p-2 rounded-full hover:bg-orange-600 flex items-center justify-center">
      <Send className="text-white" size={24} />
    </button>
  </div>

  {/* Secondary Button */}
  <div className="flex h-[4dvh] w-[6dvw] mt-auto mb-4 mx-auto justify-center items-center gap-2 p-4">
    {/* Time Duration Selector */}
    <select className="bg-[#1f233d] text-white/25 outline-none p-1 rounded-md">
      <option>1 min</option>
      <option>5 min</option>
      <option>10 min</option>
      <option>30 min</option>
      <option>1 hour</option>
    </select>

    {/* Genre/Mood/Theme Selector */}
    <select className="bg-[#1f233d] text-white/25 outline-none p-1 rounded-md">
      <option>Mood: Happy</option>
      <option>Mood: Sad</option>
      <option>Genre: Action</option>
      <option>Genre: Romance</option>
      <option>Theme: Futuristic</option>
      <option>Theme: Nostalgic</option>
    </select>
    <select className="bg-[#1f233d] text-white/25 outline-none p-1 rounded-md">
    <option>YouTube Shorts (9:16)</option>
    <option>Instagram Stories (9:16)</option>
    <option>TikTok (9:16)</option>
    <option>Instagram Post (1:1)</option>
    <option>Facebook Video (16:9)</option>
    <option>YouTube Video (16:9)</option>
    <option>Twitter Post (16:9)</option>
    <option>LinkedIn Post (16:9)</option>
  </select>
  </div>
</div>
<VideoPanel />

            </div>
        </div>
    );
}