import { createContext, useEffect, useState } from "react";
import FetchPostApi from "../helpers/FetchPostApi";
import { login_url, register_url } from "../api/endpoins";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(
    JSON.parse(localStorage.getItem("session")) || null
  );

  useEffect(() => {
    try {
      localStorage.setItem("session", JSON.stringify(session));
    } catch {
      // localStorage.removeItem("session");
    }
  }, [session]);

  const contextValue = {
    session,
    Login(values) {
      FetchPostApi(login_url, values).then(({token,user})=>{

      setSession({ token, user });
      })
    

    },
    Register(values) {
      FetchPostApi(register_url, values).then(({token,user})=>{

      setSession({ token, user });
      })
    

    },
    logout() {
      setSession(null);
    },
    getUserId(){
      return session.user.id;
    },
    isLogged() {
      return session?.token;
    },
    getToken(){
      return session.token;
    }
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
