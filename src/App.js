import { useState } from "react";
import Router from "./Routes";

import AuthContext from "contexts/AuthContexts";

function App() {
  const [ auth, setAuth ] = useState({
  isLoggedIn: false,
    user: null,
  });

  console.log(auth.isLoggedIn)
  return (
    <div className="App">
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Router />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
