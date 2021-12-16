import React from "react";
import { render } from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css";

import Home from "./components/Home";
import Create from "./components/Create";
import Ready from "./components/Ready";
import Pickup from "./components/Pickup";
import Card from "./components/Card";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vytvor-prani" element={<Create />} />
      <Route path="/vyzvedni-prani" element={<Pickup />} />
      <Route path="/card/:id" element={<Card />} />
      <Route path="/prani-hotove" element={<Ready />} />
    </Routes>
  </BrowserRouter>
);

render(<App />, document.querySelector("#app"));
