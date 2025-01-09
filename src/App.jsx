import Hero from "./components/2 hero/Hero";
import Contact from "./components/4 contact/Contact";
import Main from "./components/3 main/Main";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Applayout from "./components/Applayout";

import Home from "./components/Home";
import Certificates from "./components/6certificates/cerificate";
import Skills from "./components/7skills/skills";
// import ParticlesBackground from "./components/particlesBackground";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        { index: true, element: <Home /> },

        { path: "/contact", element: <Contact /> },
        { path: "/projects", element: <Main /> },
        { path: "/skills", element: <Skills /> },

        { path: "/certificates", element: <Certificates /> },

        { path: "/hero", element: <Hero /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
