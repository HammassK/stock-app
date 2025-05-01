import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (data) => {
    setUser(data?.user);
    authStorage.storeToken(data?.user?.accessToken);
  };

  const signUp = (data) => {
    setUser(data?.user);
    authStorage.storeToken(data?.user?.accessToken);
  };

  const logOut = () => {
    authStorage.removeToken();
    setUser(null);
  };

  return { user, logIn, signUp, logOut, setUser };
};

export default useAuth;
