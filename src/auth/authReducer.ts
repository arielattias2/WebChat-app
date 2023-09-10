import { useReducer } from "react";

export interface User {
  usreName: string;
  token: string;
  userId: number;
}

interface LoginUser {
  type: "LOGIN";
  user: User;
}
interface LogoutUser {
  type: "LOGOUT";
}

// Define the authentication state type
export type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
};

export type AuthAction = LoginUser | LogoutUser;

const authReducer = (currentUser: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { isAuthenticated: true, user: action.user };
    case "LOGOUT":
      return {
        isAuthenticated: false,
        user: null,
      };
    default:
      return currentUser;
  }
};

export default authReducer;
