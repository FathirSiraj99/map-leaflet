import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaceList from "./pages/placeList";
import Map from "./pages/Map";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/place" element={<PlaceList/>}></Route>
          <Route path="/map" element={<Map/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;