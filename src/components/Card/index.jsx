import { ImGift } from "react-icons/im";

export default function Card() {
  return (
    <div className="bg-zinc-900 h-80 rounded-lg flex flex-col justify-center items-center mx-7 gap-5">
      <img src="" alt="Here is img" className="w-50" />
      <div className="text-slate-500 px-5 text-center">
        <h2 className="">Title 1</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          porro.
        </p>
        <button>Buy Now</button>
      </div>
    </div>
  );
}
