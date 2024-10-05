import Navbar from "@/components/custom/navbar";
import Circlers from "@/components/custom/circle";
import { Button } from "@/components/ui/button";
export default function Landing() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar />
      <div className="flex flex-col w-[100%] justify-center items-center h-[60vh]">
        {/* <Circlers /> */}
        <p className="text-5xl  text-center font-semibold mb-5">
          Videos? Our AI Does That!
        </p>
        <p className=" text-gray-600/50">
          Exclusively Open !! Join the waitlist below
        </p>
        <div className="flex flex-col gap-3 items-center px-2 w-[50vw]rounded-xl ">
          <input
            className="focus:outline-none relative z-10 h-14 p-8 w-full rounded-md "
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
