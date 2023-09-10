import React, { Dispatch } from "react";
import { AuthAction, AuthState, User } from "./authReducer";

interface AuthContextType {
  currentUser: AuthState;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
