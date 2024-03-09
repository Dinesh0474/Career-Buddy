import React from "react";
import { Routes, Route,useParams } from "react-router-dom";
import Browser from "./Browser";
import Home from "./Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:index" element={<BrowserContainer />} />
    </Routes>
  );
}

function BrowserContainer() {
  const { index } = useParams();
  return <Browser index={index} />;
}
