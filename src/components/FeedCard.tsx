import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <section className="border-t-[1px] border-b-0 border-gray-800 p-5 hover:bg-[#181818] cursor-pointer transition-all">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/123007969?v=4"
            width={50}
            height={50}
            alt="user-img"
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h2 className="text-md font-bold">John Doe</h2>

          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            repellat.
          </p>
          <div className="flex justify-between items-center text-md w-[80%]">
            <div className="flex items-center gap-2 hover:text-[#1da1f2] hover:bg-[#0A171F] rounded-full p-2">
              <BiMessageRounded />
              <span>17k</span>
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedCard;