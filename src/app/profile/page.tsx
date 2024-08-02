"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const getDetails = async () => {
    const res = await axios.post("/api/users/me");
    console.log(`res`, res);
    setData(res?.data?.data?._id);
  };

  const logout = async () => {
    try {
      const res = await axios.get("/api/users/logout");
      console.log("res", res);
      toast.success("Logout success");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <h2>
        {data === "nothing" ? (
          "No data"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logout}>Logout</button>
      <button className="bg-green-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getDetails}>Get user data</button>
    </div>
  );
};

export default Profile;
