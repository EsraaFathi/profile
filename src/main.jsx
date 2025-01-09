import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ParticlesBackground from "./components/particlesBackground.jsx";
// import ParticlesBackground from "./components/particlesBackground.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParticlesBackground />

    <App />
  </React.StrictMode>
);
