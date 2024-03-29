import { useState } from "react";
import onlyGLobe from "./assets/onlyglobe.png";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/*" element={<Homepage />} />
        <Route path="/auth/*" element={<Authentication />} />
      </Routes>
    </>
  );
}

export default App;
