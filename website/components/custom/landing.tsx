import Navbar from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";
export default function Landing() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar />
      <div className="flex flex-col w-[100%] justify-center items-center h-[60vh]">
        <div className="lg:mt-[20vh] mx-auto w-full">
          <h1 className="text-5xl  text-center font-semibold mb-5">
            #1 In the Market. Top-Notch Videos by AI.
          </h1>
          <h2 className="text-red-300 max-w-lg text-center">
            SocialSifu Does all the video automation you need, from generating
            to posting. Everything by us, just relax.
          </h2>
        </div>

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
