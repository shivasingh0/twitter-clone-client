"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log(`Signup success`, response);
      router.push("/verifyemail");
      toast.success("Signup success");
    } catch (error: any) {
      console.log("Signup Failed");
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.userName.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing..." : "Signup"}</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        type="text"
        className="text-white p-2 bg-slate-800 rounded-md"
        id="userName"
        value={user.userName}
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email">email</label>
      <input
        type="email"
        className="text-white p-2 bg-slate-800 rounded-md"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        className="text-white p-2 bg-slate-800 rounded-md"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        onClick={onSignup}
        className="border-2 px-10 py-2 my-5 rounded-md hover:scale-105 transition-all hover:shadow-lg"
      >
        {buttonDisabled ? "Please fill the form" : "Signup"}
      </button>
      <Link href={"/login"} className="text-blue-900">Login</Link>
    </div>
  );
};
export default SignupPage;
