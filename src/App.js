import React, { useState } from "react";
import './App.css';
import Login from './components/Login'
import Registration from './components/Registration';
import MapPage from './components/MapPage';
import Profile from "./components/Profile";
import { AuthProvider } from "./context/AuthContext";


function App() {
  const pages = { mapPage: <MapPage openPage={openPage} />, registration: <Registration openPage={openPage} />, login: <Login openPage={openPage} />, profile: <Profile openPage={openPage} /> };
  const [page, setPage] = useState(pages.login);

  function openPage(page) {
    return setPage(pages[page])
  }

  return (
    <div >
      <header >
        <AuthProvider openPage={openPage}>
          {page}
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
