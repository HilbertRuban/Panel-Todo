import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hero from "./components/Hero";
import TaskSection from "./components/TaskSection";

function App() {
  return (
    <div
      className=" w-[100vw]
    bg-gradient-to-r from-white via-pink-100 to-purple-200"
    >
      <Hero />
      <TaskSection />
    </div>
  );
}
;

export default App;
