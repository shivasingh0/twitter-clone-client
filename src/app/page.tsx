import FeedCard from "@/components/FeedCard";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import React from "react";
import { BiHash, BiHome, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitterX } from "react-icons/bs";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHome />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <HiOutlineDotsCircleHorizontal />,
  },
];

export default function Home() {
  return (
    <section className="w-full h-screen">
      <div className="grid px-14 grid-cols-12">
        <div className="col-span-3 pt-2">
          <div className="text-3xl p-3 hover:bg-[#181818] transition-all w-fit h-fit rounded-full cursor-pointer">
            <BsTwitterX />
          </div>
          <div className="mt-4 text-2xl font-semibold pr-4">
            <ul>
              {sidebarItems.map((item, index) => (
                <li
                  key={index}
                  className="text-xl py-2 px-4 hover:bg-[#181818] transition-all w-fit h-fit rounded-full cursor-pointer flex items-center justify-start gap-2 mt-2"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="ml-2">{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pr-10">
              <button className="bg-[#1d9bf0] text-lg py-2 rounded-full hover:bg-[#1da1f2] w-full">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] overflow-y-scroll no-scrollbar h-screen border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 p-5">
          <div className="bg-[#181818] w-fit p-4 rounded-lg">
            <h1 className="text-xl font-bold text-center">New to Twitter?</h1>
          <GoogleLoginButton />
          </div>
        </div>
      </div>
    </section>
  );
}
