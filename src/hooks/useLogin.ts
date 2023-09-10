import { AxiosError } from "axios";
import apiClient from "../services/apiClient";
import { useState } from "react";

interface LoginUser {
  email: string;
  password: string;
}

const useLogin = () => {
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [userData, setUserData] = useState<LoginUser | null>(null);

  const login = async () => {
    try {
      clearErrors(); // Clear errors before making the request

      // const userData = { email, password };
      console.log("Sending axios request with user data:", userData);

      const response = await apiClient.post("/auth", userData);
      console.log("Response data:", response.data);

      const accessToken = response.data.accessToken;
    } catch (error: AxiosError<unknown, any>) {
      handleError(error);
    }
  };

  const clearErrors = () => {
    setErrMsg(null); // Clear any previous error messages
  };

  const handleError = (error: AxiosError) => {
    console.error("Error during login:", error);

    // Handle errors consistently based on status codes
    if (error.response) {
      if (error.response.status === 400) {
        setErrMsg("Bad Request: Invalid data submitted");
      } else if (error.response.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    } else {
      setErrMsg("Network Error: Unable to connect to the server");
    }
  };

  return { login, errMsg, setUserData };
};

export default useLogin;
