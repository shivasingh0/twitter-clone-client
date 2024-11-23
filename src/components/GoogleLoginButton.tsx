"use client";

import { graphqlClient } from "@/client/api";
import { verifyGoogleUserTokenQuery } from "@/graphql/query/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import React, { useCallback } from "react";
import toast from "react-hot-toast";

const GoogleLoginButton: React.FC = () => {

  const handleLoginWithGoogle = useCallback( async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if (!googleToken){
      toast.error(`Google token not found`);
      return;
    }
    const {verifyGoogleToken} = await graphqlClient.request(verifyGoogleUserTokenQuery, {token: googleToken});
    toast.success("Verified user");
    console.log(verifyGoogleToken);

    if(verifyGoogleToken){
      window.localStorage.setItem("__twitter_token__", verifyGoogleToken);
    }

  }, []);

  return (
    <GoogleLogin onSuccess={handleLoginWithGoogle} />
  );
};

export default GoogleLoginButton;
