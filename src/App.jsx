import { useState } from "react";
import onlyGLobe from "./assets/onlyglobe.png";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
