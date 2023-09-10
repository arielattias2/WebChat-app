import { useContext } from "react";
import AuthContext from "./authContext";
import { AuthAction } from "./authReducer";

const useAuth = () => {
  return useContext(AuthContext);
};

export const loginUser = async (
  username: string,
  password: string,
  dispatch: React.Dispatch<AuthAction>
) => {
  try {
    // Make an API request to log in
    // const user = await login(username, password);
    // user = { usreName: username, token: "123", userId: 1 };
    dispatch({
      type: "LOGIN",
      user: { usreName: username, token: "123", userId: 1 },
    });
  } catch (error) {}
};

export default useAuth;
