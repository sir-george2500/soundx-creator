"use client"
import { useState } from "react";
import Cookies from "js-cookie";

export const useTokenStorage = () => {
  const [token, setToken] = useState(null);

  const storeToken = (newToken) => {
    Cookies.set("jwtToken", newToken, { path: "/" });
    setToken(newToken);
  };

  return { token, storeToken };
};
