import axios from "axios";
import apiClient from "./apiClient";
import Logo from "../components/Logo";

const API_BASE_URL = "your_api_base_url_here"; // Replace with your API base URL

export const login = async (username: string, password: string) => {
  // try {
  //   const response = await axios.post(`${API_BASE_URL}/login`, {
  //     username,
  //     password,
  //   });
  //   // Save the user data and token to localStorage
  //   localStorage.setItem("currentUser", JSON.stringify(response.data));
  //   return response.data;
  // } catch (error) {
  //   throw error;
  // }
  try {
    const response = await apiClient.post<{ accessToken: string }>(
      "/login",
      JSON.stringify({ username, password })
      // {
      //   headers: { "Content-Type": "application/json" },
      //   withCredentials: true,
      // }
    );
    console.log(JSON.stringify(response.data));
    const accessToken = response.data.accessToken;

    //setSuccess(true);
  } catch (err) {
    if (!err?.response) {
      setErrMsg("No Server Response");
    } else if (err.response?.status === 400) {
      setErrMsg("Missing Username or Password");
    } else if (err.response?.status === 401) {
      setErrMsg("Unauthorized");
    } else {
      setErrMsg("Login Failed");
    }
  }
};

export const logout = () => {
  // Remove the user data and token from localStorage
  localStorage.removeItem("currentUser");
};

export const getCurrentUser = () => {
  const userJSON = localStorage.getItem("currentUser");
  console.log(userJSON, `${userJSON == "undefined"}`);

  return userJSON == "undefined" ? null : JSON.parse(userJSON);
};
