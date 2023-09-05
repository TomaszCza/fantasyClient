import React from "react";
import Home from "./pages/Home"
import Tables from "./pages/Tables"
import Player from "./pages/Player"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/tables" element={<Tables/>}/>
        <Route exact path="/player/:id" element={<Player/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
