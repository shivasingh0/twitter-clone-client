"use client";
import axios from "axios";
import Link from "next/link";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const VerifyPage = () => {
    // const router = useRouter();
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const verifyUserEmail = async () => {
    try {
      const response = await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
      setError(false)
      console.log(`response`, response);
    } catch (error: any) {
      setError(true);
      console.log(`error in login`, error.response.data);
      toast.error("User not logged in");
    }
  };

//   useEffect(() => {
//    if (router.isReady) {
//     const { query } = router;
//     const urlToken: any = query.token;
//     setToken(urlToken || "");
//    }
//   }, [router.isReady]);

useEffect(()=>{
    setError(false)
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "")
},[])

  useEffect(() => {
    setError(false)
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-3xl font-bold mb-4">Verify Email</h1>
        <h2 className="p-2 bg-orange-500 text-black">
            {token ? token : "No token"}
        </h2>
        {
            verified && <div>
                <h2>Verified</h2>
                <Link href={"/login"}>Login</Link>
            </div> 
        }
        {
            error && <div>
                <h2>Error</h2>
            </div> 
        }
    </div>
  );
};

export default VerifyPage;
