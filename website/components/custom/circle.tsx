export default function Circlers() {
  return (
    <div className="flex align-center text-center justify-center items-center mt-[4rem] h-[100vh]  relative">
      <span className="absolute bg-gradient-to-r from-pink-300 to-blue-300 w-[140vh] h-[140vh] rounded-full  drop-shadow-2xl"></span>
      <span className="absolute h-full w-full bg-white/15 rounded-full drop-shadow-md"></span>
      <span className="absolute h-[75vh] w-[75vh] bg-white/25 rounded-full drop-shadow-md"></span>
      <span className="absolute h-[60vh] w-[60vh] bg-white/35 rounded-full drop-shadow-md"></span>
    </div>
  );
}
