import { AxiosError } from "axios";
import apiClient from "../services/apiClient";
import { useState } from "react";

interface RegisterUser {
  name: string;
  username: string;
  password: string;
  email: string;
  age: number;
}

const useRegister = () => {
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [userData, setUserData] = useState<RegisterUser | null>(null);

  const register = async () => {
    try {
      clearErrors(); // Clear errors before making the request

      // const userData = { name, username, password, email, age };
      console.log("Sending axios request with user data:", userData);

      const response = await apiClient.post("/register", userData);
      console.log("Response data:", response.data);

      // Handle success or set any state here if needed.
    } catch (error: AxiosError<unknown, any>) {
      handleError(error);
    }
  };

  const clearErrors = () => {
    setErrMsg(null); // Clear any previous error messages
  };

  const handleError = (error: AxiosError) => {
    console.error("Error during registration:", error);

    // Handle errors consistently based on status codes
    if (error.response) {
      if (error.response.status === 400) {
        setErrMsg("Bad Request: Invalid data submitted");
      } else if (error.response.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Registration Failed");
      }
    } else {
      setErrMsg("Network Error: Unable to connect to the server");
    }
  };

  return { register, errMsg, setUserData };
};

export default useRegister;
