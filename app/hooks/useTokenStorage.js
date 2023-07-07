import { useState } from "react";
import Cookies from "js-cookie";

export const useTokenStorage = () => {

  const storeToken = (newToken) => {
    Cookies.set("jwtToken", newToken, { path: "/" });
  };

 const getToken = () =>{
    let token = Cookies.get("jwtToken")
    if(token)
    {
      return token
    }
    return '';
 }

  return { getToken, storeToken };
};
