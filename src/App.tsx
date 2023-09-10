import { RouterProvider } from "react-router-dom";
import router from "./routes";
import AuthProvider from "./auth/authProvider";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
