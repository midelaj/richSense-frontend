import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Router from "./Routes";
import { getToken } from "utils/storage";
import { getCurrentUser } from "pages/Users/api";

import AuthContext from "contexts/AuthContexts";

function App() {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    user: null,
  });

  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = getToken();
    if(!token) return setIsLoading(false)
    fetchCurrenUser()
  }

  const fetchCurrenUser = async () => {
    try {
      const response = await getCurrentUser();
      setAuth({
        isLoggedIn: true,
        user: response.user
      })
    } catch {
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="App">
      <ToastContainer />
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Router />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
