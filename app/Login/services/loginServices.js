import { useTokenStorage } from "@app/hooks/useTokenStorage";
import sendRequest from "@app/services/sendRequest";

/**
 * This method is used to log in the user
 * @param {*} values
 * @returns
 */
export const loginUser = async (values) => {
  const endpoint = "login";

  try {
    const response = await sendRequest(endpoint, "POST", values);
    return response;
  } catch (error) {
    console.error("Failed to log in user:", error.message);
    throw error;
  }
};

