import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function useAuth(props) {
  const contextValue = useContext(AuthContext);
  return contextValue;
}

export default useAuth;
