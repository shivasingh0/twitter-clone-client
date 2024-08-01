"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

 const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log(`Signup success`, response);
      router.push("/profile");
      toast.success("Signup success");
    } catch (error: any) {
      console.log("Signup Failed");
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0
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
        onClick={onLogin}
        className="border-2 px-10 py-2 my-5 rounded-md hover:scale-105 transition-all hover:shadow-lg"
      >
        {buttonDisabled ? "Please fill the form" : "Login"}
      </button>
      <Link href={"/signup"} className="text-blue-900">Signup</Link>
    </div>
  );
}
export default LoginPage