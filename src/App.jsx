import { useState } from "react";
import "./App.css";
import General from "./sections/General";
import Education from "./sections/Education";
import Experience from "./sections/Experience";

function App() {
  return (
    <>
      <General />
      <Education />
      <Experience />
    </>
  );
}

export default App;
