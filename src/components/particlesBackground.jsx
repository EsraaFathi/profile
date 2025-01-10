// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         particles: {
//           number: { value: 200, density: { enable: true, value_area: 800 } },
//           color: { value: "#f771e8" },
//           shape: { type: "star" },
//           opacity: {
//             value: 1,
//             random: true,
//             anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
//           },
//           size: { value: 2, random: true },
//           move: { enable: true, speed: 1, random: true, out_mode: "out" },
//         },
//         interactivity: {
//           events: {
//             onhover: { enable: true, mode: "bubble" },
//             onclick: { enable: true, mode: "repulse" },
//           },
//           modes: {
//             bubble: { distance: 250, size: 0, duration: 2 },
//             repulse: { distance: 400, duration: 0.4 },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// };

// export default ParticlesBackground;

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Initializes the slim version of tsparticles
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#43aaf8",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#43aaf8",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 20,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#43aaf8",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
