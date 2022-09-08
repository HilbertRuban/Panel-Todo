import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hero from "./components/Hero";
import TaskSection from "./components/TaskSection";

function App() {
  return (
    <div
      className=" w-[100vw] max-h-[80px]
    bg-gradient-to-r from-white to-purple-100"
    >
      <Hero />
      <TaskSection />
      
    </div>
  );
}
;

export default App;
