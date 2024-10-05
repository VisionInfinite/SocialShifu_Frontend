import Navbar from "@/components/custom/navbar";
import Circlers from "@/components/custom/circle";
import { Button } from "@/components/ui/button";
export default function Landing() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="flex flex-col w-full justify-center items-center  bg-white text-black">
        <Circlers />
        <p className="absolute z-50 mt-[-14rem] text-5xl font-semibold leading-relaxed">
          Create beautiful video with <br />
          Artificial Intelligence
        </p>
        <p className="absolute z-50 mt-[3rem] text-gray-600/50">
          Exclusively Open !! Join the waitlist below
        </p>
        <div className="absolute justify-center items-center px-2 flex mt-[14rem] z-50 w-[40vw] h-[10vh] bg-white rounded-xl drop-shadow-xl">
          <input
            className="focus:outline-none relative z-10 h-full w-full rounded-xl drop-shadow-xl"
            type="text"
            placeholder="Enter Your Email to reserve your spot"
          ></input>
          <Button className="rounded-full h-[3rem] w-[6rem]">
            Join Waitlist
          </Button>
        </div>
      </div>
    </div>
  );
}
