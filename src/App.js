import React from "react";
import NavBar from "./Components/navBar/NavBar";
import './Components/App.css'
import Banner from './Components/Banner/Banner'
import RowPost from "./Components/RowPost/RowPost";
import {actions,orginals} from './urls'
function App() {
  return (
    <div >
     <NavBar />
     <Banner />
     <RowPost url={orginals} title='Netflix Orginals'/>
     <RowPost url={actions} title='Action' isSmall />
    </div>
  );
}

export default App;
