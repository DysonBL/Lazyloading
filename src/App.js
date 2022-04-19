import React from "react";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

// import Dyson from "../src/Components/Dyson";
// import Felix from "../src/Components/Felix";
// import Karthi from "../src/Components/Karthi";
import Mani from "../src/Components/Mani";
import Stanly from "../src/Components/Stanly";
import Friends from "../src/Friends";

const Dyson = React.lazy(() => import("./Components/Dyson"));
const Felix = React.lazy(() => import("./Components/Felix"));
const Karthi = React.lazy(() => import("./Components/Karthi"));


const App = () => {
  return (
    <>
      <h2>...HELLO MY DEAR FRIENDS...</h2>
      <Suspense fallback={<>...LOADING PAGE...</>}>
        <Routes>
          <Route path="/Dyson" element={<Dyson />} />
          <Route path="/Stanly" element={<Stanly />} />
          <Route path="/Felix" element={<Felix />} />
          <Route path="/Karthi" element={<Karthi />} />
          <Route path="/Mani" element={<Mani />} />
          <Route path="/" element={<Friends />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
