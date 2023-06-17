import React from "react";
import { Routes, Route, useLocation, Router } from "react-router-dom";
import { Home, Paraphernalia, Thc, Vapes } from "./screens";
import NavBar from "./components/NavBar";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
// import { goToAnotherPage } from "../routes/goToAnotherPage";
// onClick={() => goToAnotherPage(navigate, "/")}
const App = () => {
  const { pathname, key } = useLocation();

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vapes" element={<Vapes />} />
        <Route path="/thc" element={<Thc />} />
        <Route path="/paraphernalia" element={<Paraphernalia />} />
      </Routes>
    </>
  );
};

export default App;
