import Cookies from "js-cookie";

export const useTokenStorage = () => {
  const storeToken = (newToken) => {
    Cookies.set("jwtToken", newToken, { path: "/" });
  };

  const getToken = () => {
    return Cookies.get("jwtToken");
  };

  return { 
    storeToken, 
    getToken 
    };
};
