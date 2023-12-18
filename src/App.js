import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Router from "./Routes";

import AuthContext from "contexts/AuthContexts";

function App() {
  const [ auth, setAuth ] = useState({
  isLoggedIn: false,
    user: null,
  });


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
