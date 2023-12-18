import AuthContext from "contexts/AuthContexts";
import { useContext } from "react";

const useAuth = () => {
    const { auth, setAuth } = useContext(AuthContext)
    return {
        isLoggedIn: auth.isLoggedIn,
        user: auth.user,
        setAuth,
    };
}
 
export default useAuth;