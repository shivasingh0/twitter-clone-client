"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import React from "react";

const GoogleLoginButton: React.FC = () => {

  const handleGoogleLogin = (cred: CredentialResponse) => {}

  return (
    <GoogleLogin onSuccess={(cred) => console.log(cred)} />
  );
};

export default GoogleLoginButton;
