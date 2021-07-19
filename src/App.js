import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import StokList from "./components/stoklist.component";
import CreateToko from "./components/createtoko.component";
import CreateDorayaki from "./components/createdorayaki.component";
import CreateStok from "./components/createstok.component";
import EditStok from "./components/editstok.component";
import MoveStok from "./components/movestok.component";
import FindToko from "./components/findtoko.component";

function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
      <br />
        <Route path = "/" exact component={StokList} />
        <Route path = "/new-toko" component={CreateToko}/>
        <Route path = "/new-dorayaki" component={CreateDorayaki} />
        <Route path = "/new-stok" component = {CreateStok}/>
        <Route path = "/edit/:id" component={EditStok}/>
        <Route path="/move-stok/:id" component={MoveStok}/>
        <Route path="/findtoko" component={FindToko}/> 
    </div>
    </Router>
  );
}

export default App;
