import { ReactNode, useEffect, useReducer } from "react";
import authReducer, { AuthAction, AuthState } from "./authReducer";
import AuthContext from "./authContext";
import { getCurrentUser, login } from "../services/apiService";

interface Props {
  children: ReactNode;
}

// Initial authentication state
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const AuthProvider = ({ children }: Props) => {
  const persistedUser = getCurrentUser();
  //console.log("prov", persistedUser);

  const [currentUser, dispatch] = useReducer(
    authReducer,
    initialState
    // persistedUser || initialState
  );

  // Add an effect to save currentUser to localStorage whenever it changes
  useEffect(() => {
    // console.log("prov 2", currentUser.user);
    localStorage.setItem("currentUser", JSON.stringify(currentUser.user));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
