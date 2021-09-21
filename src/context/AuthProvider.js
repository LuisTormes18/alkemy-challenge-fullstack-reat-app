import { createContext, useEffect, useState } from "react";
import {FetchGetApi, FetchPostApi,FetchUpdateToken} from "../helpers";
import { login_url, register_url} from "../api/endpoins";
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
      FetchPostApi(login_url, values)
        .then((resp) => {
          const { token, user } = resp;
          setSession({ token, user });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Register(values) {
      FetchPostApi(register_url, values)
        .then((resp) => {
          const { token, user } = resp;
          setSession({ token, user });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logout() {
      setSession(null);
    },
    getUserId() {
      return session.user.id;
    },
    isLogged() {
      return session?.token;
    },
    getToken() {
      return session.token;
    },
    updateToken(){
      FetchUpdateToken(session?.token).then(resp=>{
        !resp.ok ? setSession(null) : setSession({...session,token:resp.token})
      })
    }
    
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
