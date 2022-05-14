import React, {useState} from "react";
import './App.css';
import Login from './components/Login'
import Registration from './components/Registration';
import Map from './components/Map';
import Profile from "./components/Profile";

function App() {
  const pages = {map: <Map openPage={openPage}/>, registration: <Registration openPage={openPage}/>, login: <Login openPage={openPage}/>, profile: <Profile openPage={openPage}/>};
  const [page, setPage] = useState(pages.login);

  function openPage (page){
    return setPage(pages[page])
  }

  return (
    <div >
      <header >
        {page}
      </header>
    </div>
  );
}

export default App;
